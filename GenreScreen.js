import { Image, SafeAreaView, StyleSheet, Text, View, Dimensions, TouchableOpacity,   TextInput, width, height, ScrollView, bookDetails,selectedGenre,pages} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from 'react';
import {Picker} from '@react-native-picker/picker';


function GenreScreen() {

  const[selectedGenre, setSelectedGenre]=useState('');
  const[bookDetails, setBookDetails]=useState({
    title: '',
    author:'',
    genre:'',
    pages:'',
  });
    
  const [numberOfBooksPerGenre, setnNumberOfBooksPerGenre]= useState({});
    const updateNumberOfBooksPerGenre= ()=>{
      setnNumberOfBooksPerGenre({
        [selectedGenre]: (numberOfBooksPerGenre[selectedGenre] || 0) +1,
      });
    };
    return (
      <ScrollView>
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.background}
          source={require('../assets/Bggg.jpg')}
          resizeMode="contain"
        />
        <View style={[styles.background, styles.overflow]} />
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>     Genres{'\n'}</Text>
          </View>
          
          <View>
            <Text style={styles.Text2}>Your Profile</Text>
          </View>
          <View>
            <Text style={styles.Text3}>Number of Books Per Genre:</Text>
            {Object.entries(numberOfBooksPerGenre).map(([genre, count]) =>(
             <Text key={genre} style={styles.Text3}>{`${genre}: ${count} book`}</Text>
            ))}
          </View>
        </View>


         <Picker 
           style={styles.input}
           selectedValue={selectedGenre}
           onValueChange={(itemValue, itemIndex) => {
            setSelectedGenre(itemValue);
            updateNumberOfBooksPerGenre();
           }
           
                     }>
           <Picker.Item label="Romance, Young Adult" value="Romance, Young Adult" />
           <Picker.Item label="Non Fiction" value="Non Fiction" />
           <Picker.Item label="Fiction" value="Fiction" />
           <Picker.Item label="Fantasy" value="Fantasy" />
           <Picker.Item label="Thriller" value="Thriller" />
           <Picker.Item label="Horror" value="Horror" />
           </Picker>
            
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
      width: 450,
      height: 800,
      
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
      fontSize: 40,
      color:'#A86E58',
       marginTop: -10,
      textAlign: 'center',
      alignItems:'center',
       padding:80,
      
      
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
      fontSize: 28,
      color:'#D5b195',
      textAlign:'center',
      padding: 3,
      marginLeft: 110,
      marginRight:110,
      marginBottom:70,
       marginTop:-40,
       
      
      
    },
  
    Text3:{
      fontSize: 22,
      color:'#D5b195',
      textAlign:'center',
      padding: 5,
      marginLeft: 90,
      marginRight:50,
         marginBottom: 150,
         marginTop: -50,
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
      fontSize: 35,
      color:'#765341',
      marginTop:-90,
    
    },
    
    inputContainer:{
        padding: 50,
        
    },
    
  });
  
  export default GenreScreen;