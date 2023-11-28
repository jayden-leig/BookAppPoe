import { Image, SafeAreaView, StyleSheet, Text, View, Dimensions, TouchableOpacity,   TextInput,  ScrollView,} from 'react-native';
import React, { useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import { useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';




function HomeScreen({route}) {
  const navigation = useNavigation();
    const[totalPages, setTotalPages]=useState(route.params?.updatedTotalPages || 0);
    const[totalBooks, setTotalBooks]=useState(route.params?.updatedTotalBooks || 0);
    const lastBook = route.params?.lastBook || {};

    const initialBookDetails={
      title: route.params?.title || '',
      author:route.params?.author || '',
      genre: route.params?.genre || '',
      pages: route.params?.pages || '',
    };
  


    
    console.log('Params in HomeScreen:', route.params);
    const initialGenre='Romance';
    const initialtotalPages=50;
    const initialTotalBooks = 6;
    
  const totalAndAverageMemo = useMemo(() =>{
    const averagePages = totalBooks === 0? 0 : totalPages / totalBooks;
    return{
      total: totalPages,
      average: averagePages.toFixed(2),
    };

  }, [totalPages, totalBooks]);


    const handleTotalPress = () => {
      alert(`Total Pages Read: ${totalAndAverageMemo.total}`);
    };
  
    const handleAveragePress = () => {
      alert(`Average Pages per Book: ${totalAndAverageMemo.average}`);

      navigation.navigate('History', {
        lastThreeBooksRead: ['Book1', 'Book2', 'Book3'],
        title: 'jshdusj',
        author: 'dhfdjn',
        genre: 'YourGenreValue', // Replace with the actual genre value
      });
    };
  
    
  
    return(
      <ScrollView>
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.background}
          source={require('../assets/cover.jpg')}
          resizeMode="contain"
        />
        <View style={[styles.background, styles.overflow]} />
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>BookWorld{'\n'}</Text>
          </View>
          <View>
            <Text style={styles.Text}>Where Fantasy Becomes Reality</Text>
          </View>
          <View>
            <Text style={styles.Text2}>Your Profile</Text>
          </View>
          <View>
            <Text style={styles.Text3}>Last Book you read:</Text>
          </View>
          <View>
            <Text style={styles.Text4}>Title of the Book: To All The Boys I loved Before {lastBook.title}</Text>
          </View>
          <View>
            <Text style={styles.Text5}>Author: Jenny Han {lastBook.author}</Text>
          </View>
          <View>
            <Text style={styles.Text6}>Genre: {lastBook.genre}</Text>
          </View>
          <View><Text style={styles.Text9}>Number of Pages: 355 {lastBook.genre}</Text>
          </View>
          <View>
          <Text style={{fontSize: 36, color:"white",marginBottom:50, marginLeft:110, marginTop:20,}}>
              Reading Statistics
            </Text>
            <Text style={styles.Text7}>
              Total number of pages read{'\n'} across all the books ever entered:
            </Text>
          </View>
          <TouchableOpacity onPress={handleTotalPress}>
            <View style={styles.button2}>
              <Text style={styles.btnText2}>Total</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.Text8}>
            Average number of pages{'\n'} in the books read by you:
          </Text>
          <TouchableOpacity onPress={handleAveragePress}>
            <View style={styles.button3}>
              <Text style={styles.btnText3}>Average</Text>
            </View>
          </TouchableOpacity>
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
      width: 500,
      height: 892,
      
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
      fontSize: 38,
      color:'#D5b195',
       marginTop: -10,
       marginRight:30,
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
      fontSize: 30,
      color:'#D5b195',
      textAlign:'center',
      padding: 3,
      marginLeft: 100,
      marginBottom:70,
       marginTop:-50,
      
      
    },
  
    Text3:{
      fontSize: 15,
      color:'#D5b195',
      textAlign:'center',
      padding: 5,
      marginLeft: 100,
         marginBottom: 150,
         marginTop: -80,
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
    
    },
  
  });
  
  
export default HomeScreen;




  //IIE,2023 Mobile Application Scripting MAST5112[POE]The inedpendent institute of education:unpublished//
  // Sergiu, L. and Lavric SergiuLavric Sergiu&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1122 bronze badges (1967) Adding an existing book to an existing user, Stack Overflow. Available at: https://stackoverflow.com/questions/66120364/adding-an-existing-book-to-an-existing-user (Accessed: 26 October 2023). //
  //Expo (no date) Expo/examples: Example projects that demonstrate how to use EXPO apis and Integrate Expo with other popular tools, GitHub. Available at: https://github.com/expo/examples/ (Accessed: 26 October 2023).  // 
  // JavaScript booklist app | no frameworks (2018) YouTube. Available at: https://www.youtube.com/watch?v=JaMCxVWtW58 (Accessed: 26 October 2023). //