import { View, Text, Dimensions, TouchableOpacity,FlatList } from 'react-native'
import React from 'react'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const QuestionItem = ({data,selectedOption}) => {
  return (
    <View style={{width: windowWidth, height: windowHeight}}>
      <Text style={{fontSize:13,fontWeight:'650',
           color:'black',
           fontWeight: 800,
           marginLeft:20,marginRight:20}}>
          { data.question}
        </Text>


        <View style={{marginTop: 30,marginLeft:10}}>
        <FlatList
           data={data.Options}
           renderItem={({item,index}) => {
            return(
                <TouchableOpacity
                   style={{
                    width: windowWidth - 35,
                    padding: 15,
                    elevation:8,
                    backgroundColor: data.marked == index + 1? 'orange' : '#fff',
                    marginTop: 15,
                    
                    marginBottom:10,
                    alignSelf:'center',
                    alignItems: 'center',
                    paddingLeft:15,
                    flexDirection:'row',
                    borderRadius: 35,
                    shadowColor: 'rgba(0,0,0, .4)',
                    shadowOffset: { height: 3, width: 2 },
                    shadowOpacity: 1,
                    shadowRadius: 1,
                   }} onPress={()=>{
                    selectedOption(index + 1)
                   }}
                >
                    <View style={{
                        width:40,
                        height:40,
                        borderRadius: 25,
                        borderColor: data.marked == index + 1? 'purple' : 'black',
                        borderWidth: 5,
                        backgroundColor: data.marked == index + 1? 'white' : '#fff',
                        justifyContent:'center',
                        alignItems:'center'
                        }}>

                      <Text style={{fontWeight: '800', color: '#000'}}>
                        {index==0 
                      ?'A':index==1
                      ?'B':index==2
                      ?'C'
                      :'D'}</Text>
                     
                    </View>
                    <Text style={{fontSize:19,
                        fontWeight:'700',
                        marginLeft: 51,
                        color: data.marked == index + 1? '#fff' : '#000'}}>
                            {item}
                    </Text>
                </TouchableOpacity>
                
                
            )
           }}
        />
        </View>
    </View>
  )
}

export default QuestionItem
