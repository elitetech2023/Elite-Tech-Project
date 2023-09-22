import React, { useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Animated, FlatList, StyleSheet, Text, TouchableOpacity, View, Modal, Dimensions } from 'react-native';
import { englishdata } from './EnglishQuestions';
import QuestionItem from './QuestionItem';


const QuizScreen = () => {
  const [currentIndex, setCurrentIdenx] = useState(1);
  const [qustion, setQuestion] = useState(englishdata);
  const listRef = useRef();
  const [modalVisible, setModalVisible] = useState(false);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const OnSelectOption = (index, x) => {
    const tempData = qustion; 
    tempData.map((item, ind) => {
      if (index == ind) {
        if (item.marked !== -1) {
          item.marked - 1;
        } else {
          item.marked = x;
        }
      }

    });
    let temp = [];
    tempData.map(item => {
      temp.push(item);
    });
    setQuestion(temp);
  }
  const getTextScores = () => {
    let marks = 0;
    qustion.map(item => {
      if (item.marked !== -1) {
        marks = marks + 5;
      }
    });
    return marks;
  }
  const reset = () => {
    const tempData = qustion;
    tempData.map((item, ind) => {
      item.marked = -1;
    });
    let temp = [];
    tempData.map(item => {
      temp.push(item);
    });
    setQuestion(temp);
  }

  return (
    <View style={{
      flex: 1,
      width: windowWidth,
      height: windowHeight,
    }}>
      

        <Text style={{
          fontSize: 25,
          fontWeight: '600',
          color: '#000',
          marginBottom: 25,
          marginTop: 55,
          marginLeft: 65,
        }}>
          STRESS DETECTOR
        </Text>

  
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 20,
      }}>
        <Text style={{
          fontSize: 15,
          color: 'orange',
          fontWeight:600,
        }}>QUIZ: {'' + currentIndex + ' of ' + englishdata.length}
        </Text>

        <Text style={{
          marginRight: 20,
          fontSize: 15,
          fontWeight: '600',
          color: 'red'
        }} onPress={() => {
          reset();
          listRef.current.scrollToIndex({ animated: true, index: 0 });
        }}>
          Reset
        </Text>
      </View>

     <Seperator/>

      <View style={{ marginTop: 30 }}>
        <FlatList
          ref={listRef}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          onScroll={e => {
            const x = e.nativeEvent.contentOffset.x / windowWidth + 1;
            setCurrentIdenx((x).toFixed(0));
          }}
          data={qustion}
          renderItem={({ item, index }) => {
            return <QuestionItem data={item} selectedOption={(x) => {
              OnSelectOption(index, x)
            }} />
          }} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'absolute',
          bottom: 50,
          width: '100%',
        }}>

        <TouchableOpacity
          style={{
            backgroundColor: currentIndex > 1 ? 'purple' : 'grey',
            height: 50,
            width: 100,
            borderRadius: 10,
            marginLeft: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            if (currentIndex > 1) {
              listRef.current.scrollToIndex({
                animated: true,
                index: parseInt(currentIndex) - 2,
              })
            }

          }}>
          <Text style={{ color: '#fff' }}>Previous</Text>
        </TouchableOpacity>

        {currentIndex < 15 ? (
          <TouchableOpacity
            style={{
              backgroundColor: 'orange',
              height: 50,
              width: 100,
              borderRadius: 10,
              marginRight: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              if (qustion[currentIndex - 1].marked !== -1) {
                if (currentIndex < qustion.length) {
                  listRef.current.scrollToIndex({
                    animated: true,
                    index: currentIndex,
                  })
                }
              }

            }}>
            <Text style={{ color: '#fff' }}>Next</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              height: 50,
              width: 100,
              borderRadius: 10,
              marginRight: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              setModalVisible(true);
            }}>
            <Text style={{ color: '#fff' }}>Submit</Text>
          </TouchableOpacity>
        )}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {

          setModalVisible(!modalVisible);
        }}>
        <View style={{
          flex: 1, backgroundColor: 'rgba(0,0,0,.5)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <View style={{
            backgroundColor: '#fff',
            width: '90%',
            height: 200,
            borderRadius: 10,
          }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: '800',
                alignSelf: 'center',
                marginTop: 20,
              }}>
              FeedBack
            </Text>
            <Text
              style={{
                fontSize: 40,
                fontWeight: '800',
                alignSelf: 'center',
                marginTop: 20,
                color: 'orange'
              }}>
              {getTextScores()}
            </Text>
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                height: 40,
                padding: 10,
                borderWidth: 1,
                borderRadius: 10,
                marginTop: 20,
                marginBottom: 20,
                color: 'red',
              }} onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={{color:'red',fontWeight: 700}}>
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
export default QuizScreen;

const windowWidth = Dimensions.get('window').width;

const sepratorStyles = {
  marginTop: 20,
  marginLeft: 20,
  height: 5,
  width: windowWidth - 30,
  backgroundColor: 'purple',
}

const Seperator = () => <View style={sepratorStyles}/>;