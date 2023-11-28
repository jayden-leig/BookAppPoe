import { Image, SafeAreaView, StyleSheet, Text, View, Dimensions, TouchableOpacity,   TextInput, width, height, ScrollView, bookDetails,selectedGenre,pages,route} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState,useEffect } from 'react';
import {Picker} from '@react-native-picker/picker';


function HistoryScreen({ route, navigation }) {
  const [lastThreeBooksRead, setLastThreeBooksRead] = useState([]);

  useEffect(() => {
    console.log('Params in HistoryScreen:', route?.params);
    if (route && route.params && route.params.title) {
      console.log('Title:', route.params.title);
      console.log('Author:', route.params.author);
      console.log('Genre:', route.params.genre);
  
      setLastThreeBooksRead(route.params.lastThreeBooksRead);
    }
  }, [route?.params?.lastThreeBooksRead]);

  const updateLastThreeBooksRead = (bookTitle) => {
    setLastThreeBooksRead((prevBooks) => {
      const newBooks = [bookTitle, ...prevBooks.slice(0, 2)];
      return newBooks;
    });

    
    navigation.navigate('History', {
      lastThreeBooksRead: ['Book1', 'Book2', 'Book3'],
      title: 'Hello',
      author: 'James',
      genre: 'YourGenreValue', 
    })
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.background}
          source={require('../assets/Bgg.jpg')}
          resizeMode="contain"
        />
        <View style={[styles.background, styles.overflow]} />
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>     History{'\n'}</Text>
          </View>

          <View>
            <Text style={styles.Text3}>Your Last Three Book Read:</Text>
            {lastThreeBooksRead.map((book, index) => (
              <Text key={index} style={styles.Text3}>
                {book}
              </Text>
            ))}
          </View>

          <View>
            <Text style={styles.Text3}>Book 1:</Text>
            <Text style={styles.Text3}>{lastThreeBooksRead.length > 0 ? lastThreeBooksRead[0] : 'No Data'}</Text>
          </View>

          <View>
            <Text style={styles.Text3}>Book 2:</Text>
            <Text style={styles.Text3}>{lastThreeBooksRead.length > 1 ? lastThreeBooksRead[1] : 'No Data'}</Text>
          </View>

          <View>
            <Text style={styles.Text3}>Book 3:</Text>
            <Text style={styles.Text3}>{lastThreeBooksRead.length > 2 ? lastThreeBooksRead[2] : 'No Data'}</Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#572D0C',
    },
  
    background: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: 440,
      height: 880,
      
      
    },
  //IIE,2023//
    overflow:{
      backgroundColor: 'rgba(0,0,0,0.7)',
    },
  
    content:{
      
      alignItems:'flex-start',
      paddingHorizontal:14,
    },
  
    title: {
      fontSize: 48,
      color:'#D5b195',
       marginTop: -20,
      textAlign: 'center',
      alignItems:'center',
       padding:80,
       marginRight:10,
       marginLeft:30,
      
      
    },
  
    btnText:{
      fontSize: 24,
      color:'#D5b195',
      fontWeight:'500',
    },
  
    button:{
      padding:16,
      backgroundColor:'#765341',
      alignItems:'center',
      borderRadius: 35,
       marginBottom:20,
      marginLeft:110,
    },
    Text:{
      fontSize: 15,
      color: '#D5b195',
      textAlign:'center',
      padding: 28,
       marginBottom: 10,
      marginTop:-150,
      marginLeft:28,
      
    },
  
    Text2:{
      fontSize: 30,
      color:'#D5b195',
      textAlign:'center',
      padding: 3,
      marginLeft: 100,
      marginBottom:70,
       marginTop:-50,
      
      
    },
  
    Text3:{
      fontSize: 25,
      color:'#D5b195',
      textAlign:'center',
      padding: 5,
      marginLeft: 30,
         marginBottom: 110,
         marginTop: -70,
    },
  
    Text4:{
      fontSize: 18,
      color:'#D5b195',
       marginBottom: 115,
        marginTop: -100,
      padding: 2,
  
    },
  
    Text5:{
      fontSize: 18,
      color:'#D5b195',
       marginBottom: 80,
       marginTop: -70,
      padding: 2,
  
    },
  
    Text6:{
      fontSize: 18,
      color:'#D5b195',
        marginBottom: 50,
        marginTop: -30,
      padding: 2,
  
    },
    Text7:{
      fontSize: 15,
      color:'#D5b195',
       marginBottom:15,
       marginTop:-10,
      
    },
    Text8:{
      fontSize: 15,
      color:'#D5b195',
      marginBottom:5,
    },
  
    Text9:{
      fontSize: 18,
      color:'#D5b195',
      marginBottom:5,
    },
  
  
    button2:{
      padding:16,
      backgroundColor:'#765341',
      alignItems:'center',
      borderRadius: 35,
      marginBottom:15,
      marginLeft:250,
      marginTop:-50,
    },
  
    button3:{
      padding:16,
      backgroundColor:'#765341',
      alignItems:'center',
      borderRadius: 35,
      marginBottom:5,
      marginLeft:250,
      marginTop: -50,
    },
  
    button5:{
      padding:16,
      backgroundColor:'#765341',
      alignItems:'center',
      borderRadius: 35,
      marginBottom:50,
      marginLeft:50,
      marginRight:50,
      marginTop: 100,
    },
  
    btnText2:{
      fontSize:15,
      color:'#D5b195',
      fontWeight:'500',
    },
  
    btnText3:{
      fontSize: 15,
      color:'#D5b195',
      fontWeight:'500',
    },
    
    btnText4:{
      fontSize: 15,
      color:'#D5b195',
      fontWeight:'500',
  
    },
  
   input:{
      margin:20,
      padding:15,
      fontSize: 20,
      color:'#765341',
    
    },
    
    inputContainer:{
        padding: 50,
        
    },
    
  });
  

  export default HistoryScreen;