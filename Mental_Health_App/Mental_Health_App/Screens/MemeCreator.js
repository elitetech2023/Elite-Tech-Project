import * as React from 'react';
import { TextInput, View, StyleSheet, Dimensions, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import TakePhotoButton from './MemeComponents/TakePhotoButton';
import ChoosePhotoButton from './MemeComponents/ChoosePhotoButton';
import SharePhotoButton from './MemeComponents/SharePhotoButton';

const { width: screenWidth } = Dimensions.get("window");

const memeTemplateImageUris = [
  'https://i.imgflip.com/2/4t0m5.jpg',
  'https://imgflip.com/s/meme/Creepy-Condescending-Wonka.jpg',
  'https://i.imgflip.com/3jysf6.png',
  'https://i.imgflip.com/3j1z70.jpg',
  'https://imgflip.com/s/meme/Arthur-Fist.jpg',
];


export default function MemeCreator() {
  const [topText, setTopText] = React.useState("");
  const [bottomText, setBottomText] = React.useState("");

  const placeholderMeme = memeTemplateImageUris[0];
  const [imgUri, setImgUri] = React.useState(placeholderMeme);

  const memeView = React.useRef();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
        {memeTemplateImageUris.map((uri) => {
          return (
            <TouchableOpacity
              key={uri}
              onPress={() => {
                setImgUri(uri);
              }}>
              <Image source={{ uri }} style={styles.templateImage} />
            </TouchableOpacity>
          );
        })}
      </View>
        <View collapsable={false} ref={memeView}>
        <Image
          source={{ uri: imgUri }}
          style={{ height: screenWidth, width: screenWidth }}
        />
          <Text style={[styles.memeText, {top: 5}]}> {topText} </Text>
          <Text style={[styles.memeText, {bottom: 5}]}> {bottomText} </Text>
        </View>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setTopText(text)}
          value={topText}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setBottomText(text)}
          value={bottomText}
        />

        <TakePhotoButton setImgUri={setImgUri} />
        <ChoosePhotoButton setImgUri={setImgUri} />
        <SharePhotoButton memeView={memeView} />
      </View>
    </ScrollView>
  );
    
}

const styles = StyleSheet.create({
  memeText: {
    color: "white",
    fontSize: 38,
    fontWeight: "900",
    textAlign: "center",
    position: "absolute",
    left: 5,
    right: 5,
    backgroundColor: "transparent",
    textShadowColor: "black",
    textShadowRadius: 5,
    textShadowOffset: { height: 2, width: 2 },
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    width: screenWidth,
  },
  templateImage: {
    height: 60,
    width: 60,
    marginHorizontal: 0,
    marginVertical: 0,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
  },
});
