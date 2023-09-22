import React, { useEffect, useState, useRef } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import { Buffer } from 'buffer';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { BottomSheet, ListItem } from 'react-native-elements';
global.Buffer = Buffer;

const CLIENT_ID = '2cda8b32630d4194b20ca0c5063e1f1c';
const CLIENT_SECRET = 'b2704cb0e4a94b5e98cf60f9ad9d0089';

const emotionalSongs = [
  'The Scientist - Coldplay',
  'Someone Like You - Adele',
  'Say You Love Me - Jessie Ware',
  'All of Me - John Legend',
  'Hello - Adele',
  'Fix You - Coldplay',
  'Chasing Cars - Snow Patrol',
  'In the end - Tommee Profit',
  'Stay with Me - Sam Smith',
  'Love on Top - Beyonce',
  'Skinny Love - Bon Iver',
  'A Thousand Years - Christina Perri',
  'When I Was Your Man - Bruno Mars',
  'I Will Always Love You - Whitney Houston',
  'Without You - Mariah Carey',
  'The One That Got Away - Katy Perry',
  'All I Ask - Adele',
  'Let Her Go - Passenger',
  'Un-Break My Heart - Toni Braxton',
  'I Don\'t Want to Miss a Thing - Aerosmith',
];

const MusicScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [tracks, setTracks] = useState([]);
  const [accessToken, setAccessToken] = useState('');
  const soundRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  useEffect(() => {
    getAccessToken();
    setQuery(emotionalSongs[Math.floor(Math.random() * emotionalSongs.length)]);
  }, []);

  const getAccessToken = async () => {
    try {
      const response = await axios.post(
        'https://accounts.spotify.com/api/token',
        'grant_type=client_credentials',
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
          },
        }
      );
      setAccessToken(response.data.access_token);
    } catch (error) {
      console.log('Failed to get access token', error);
    }
  };

  const searchTracks = async () => {
    try {
      const response = await axios.get(`https://api.spotify.com/v1/search?type=track&q=${query}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setTracks(response.data.tracks.items);
    } catch (error) {
      console.log('Failed to search tracks', error);
    }
  };

  const playTrack = async (previewUrl, track) => {
    try {
      if (soundRef.current) {
        await soundRef.current.unloadAsync();
      }
      soundRef.current = new Audio.Sound();
      await soundRef.current.loadAsync(
        { uri: previewUrl },
        { shouldPlay: true }
      );
      setIsPlaying(true);
      setCurrentSong(track);
      setIsBottomSheetVisible(true);
    } catch (error) {
      console.log('Failed to load the sound', error);
    }
  };

  const pauseTrack = async () => {
    try {
      if (soundRef.current && isPlaying) {
        await soundRef.current.pauseAsync();
        setIsPlaying(false);
      }
    } catch (error) {
      console.log('Failed to pause the sound', error);
    }
  };

  const resumeTrack = async () => {
    try {
      if (soundRef.current && !isPlaying) {
        await soundRef.current.playAsync();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log('Failed to resume the sound', error);
    }
  };

  const closeBottomSheet = () => {
    setIsBottomSheetVisible(false);
  }

  const skipToNextTrack = async () => {
    try {
      if (soundRef.current) {
        await soundRef.current.unloadAsync();
        const currentIndex = tracks.findIndex((track) => track === currentSong);
        if (currentIndex !== -1 && currentIndex < tracks.length - 1) {
          const nextTrack = tracks[currentIndex + 1];
          playTrack(nextTrack.preview_url, nextTrack);
        }
      }
    } catch (error) {
      console.log('Failed to skip to the next track', error);
    }
  };

  const skipToPreviousTrack = async () => {
    try {
      if (soundRef.current) {
        await soundRef.current.unloadAsync();
        const currentIndex = tracks.findIndex((track) => track === currentSong);
        if (currentIndex !== -1 && currentIndex > 0) {
          const previousTrack = tracks[currentIndex - 1];
          playTrack(previousTrack.preview_url, previousTrack);
        }
      }
    } catch (error) {
      console.log('Failed to skip to the previous track', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={25} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Music</Text>
      </View>

      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.searchIcon}>
          <Feather name="search" size={24} color="black" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchBar}
          placeholder="Enter your emotion..."
          onChangeText={(text) => setQuery(text)}
          onSubmitEditing={searchTracks}
          value={query}
        />
      </View>

      <ScrollView style={styles.tracksContainer} showsVerticalScrollIndicator={false}>
        {tracks.map((track) => (
          <TouchableOpacity
            style={styles.track}
            key={track.id}
            onPress={() => playTrack(track.preview_url, track)}
          >
            <Image source={{ uri: track.album.images[0].url }} style={styles.albumImage} />
            <View style={styles.trackDetails}>
              <Text style={styles.trackName}>{track.name}</Text>
              <Text style={styles.trackArtist}>{track.artists[0].name}</Text>
            </View>
            <Feather name="play-circle" size={24} color="black" />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <BottomSheet isVisible={isBottomSheetVisible}>
        <View style={styles.bottomSheetContainer}>
          <Text style={styles.bottomSheetTitle}>{currentSong?.name}</Text>
          <Text style={styles.bottomSheetArtist}>{currentSong?.artists[0].name}</Text>
          <View style={styles.bottomSheetControls}>
            <TouchableOpacity onPress={pauseTrack}>
              <Feather name="pause" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={resumeTrack}>
              <Feather name="play" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={skipToPreviousTrack}>
              <Feather name="skip-back" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={skipToNextTrack}>
              <Feather name="skip-forward" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={closeBottomSheet}>
              <Feather name="x" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'lightgray',
  },
  searchBar: {
    width: '100%',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  tracksContainer: {
    width: '100%',
  },
  track: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  albumImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 10,
  },
  trackDetails: {
    flex: 1,
  },
  trackName: {
    fontWeight: 'bold',
  },
  trackArtist: {
    fontStyle: 'italic',
  },
  bottomSheetContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bottomSheetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bottomSheetArtist: {
    fontSize: 16,
    marginBottom: 16,
  },
  bottomSheetControls: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    paddingLeft: 10,
    width: '100%',
    backgroundColor: '#E6E2E2',
    borderColor: '#E6E2E2',
  },
});

export default MusicScreen;