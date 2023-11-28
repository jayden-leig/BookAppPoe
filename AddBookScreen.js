import React, { useState } from 'react';
import { ScrollView, SafeAreaView, View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';

function AddBookScreen({ navigation, route }) {
  const initialBookDetails = {
    title: '',
    author: '',
    genre: '',
    pages: '',
  };

  const [totalPages, setTotalPages] = useState(0);
  const [totalBooks, setTotalBooks] = useState(0);
  const [bookDetails, setBookDetails] = useState(initialBookDetails);

  const handleBooksSaved = () => {
    console.log("Title:", bookDetails.title);
    console.log("Author:", bookDetails.author);
    console.log("Genre:", selectedGenre);

    const newPages = parseInt(bookDetails.pages, 10);
    const updatedTotalBooks = totalBooks + 1;
    const updatedTotalPages = totalPages + newPages;

    const existingLastThreeBooks = route.params?.lastThreeBooksRead || [];
    const updatedLastThreeBooks = [
      `${bookDetails.title} by ${bookDetails.author} by ${selectedGenre}` ,
      ...existingLastThreeBooks.slice(0, 2),
    ];

    navigation.setParams({
      lastThreeBooksRead: updatedLastThreeBooks,
      TotalBooks: updatedTotalBooks,
      TotalPages: updatedTotalPages,
    });

    setTotalBooks(updatedTotalBooks);
    setTotalPages(updatedTotalPages);
    setBookDetails(initialBookDetails);

    alert('Added successfully!');
  };

  const [selectedGenre, setSelectedGenre] = useState('');

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Please enter Title"
            value={bookDetails.title}
            onChangeText={(text) =>
              setBookDetails({ ...bookDetails, title: text })
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Please enter Author"
            value={bookDetails.author}
            onChangeText={(text) =>
              setBookDetails({ ...bookDetails, author: text })
            }
          />
          <Picker
            style={styles.input}
            selectedValue={selectedGenre}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedGenre(itemValue)
            }>
            <Picker.Item label="Romance, Young Adult" value="Romance, Young Adult" />
            <Picker.Item label="Non Fiction" value="Non Fiction" />
            <Picker.Item label="Fiction" value="Fiction" />
            <Picker.Item label="Fantasy" value="Fantasy" />
            <Picker.Item label="Thriller" value="Thriller" />
            <Picker.Item label="Horror" value="Horror" />
          </Picker>
          <TextInput
            style={styles.input}
            placeholder="Number of Pages"
            keyboardType="numeric"
            value={bookDetails.pages}
            onChangeText={(text) =>
              setBookDetails({ ...bookDetails, pages: text })
            }
          />
          <TouchableOpacity onPress={handleBooksSaved}>
            <View style={styles.button5}>
              <Text style={styles.btnText4}>Save Book</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 50,
  },
  input: {
    margin: 20,
    padding: 15,
    fontSize: 20,
    color: '#765341',
  },
  button5: {
    padding: 16,
    backgroundColor: '#765341',
    alignItems: 'center',
    borderRadius: 35,
    marginBottom: 50,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 100,
  },
  btnText4: {
    fontSize: 15,
    color: '#D5b195',
    fontWeight: '500',
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
  
  export default AddBookScreen;




  //IIE,2023 Mobile Application Scripting MAST5112[POE]The inedpendent institute of education:unpublished//
  // Sergiu, L. and Lavric SergiuLavric Sergiu&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1122 bronze badges (1967) Adding an existing book to an existing user, Stack Overflow. Available at: https://stackoverflow.com/questions/66120364/adding-an-existing-book-to-an-existing-user (Accessed: 26 October 2023). //
  //Expo (no date) Expo/examples: Example projects that demonstrate how to use EXPO apis and Integrate Expo with other popular tools, GitHub. Available at: https://github.com/expo/examples/ (Accessed: 26 October 2023).  // 
  // JavaScript booklist app | no frameworks (2018) YouTube. Available at: https://www.youtube.com/watch?v=JaMCxVWtW58 (Accessed: 26 October 2023). //