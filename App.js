import { Image, SafeAreaView, StyleSheet, Text, View, Dimensions, TouchableOpacity,   TextInput, width, height, ScrollView, bookDetails,} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import HomeScreen from './Screens/HomeScreen';
import HistoryScreen from './Screens/HistoryScreen';
import GenreScreen from './Screens/GenreScreen';
import AddBookScreen from './Screens/AddBookScreen';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ tabBarIcon: makeIconRender("home"),headerShown:false  }}
        />
        <Tab.Screen
          name="Add Book"
          component={AddBookScreen}
          options={{ tabBarIcon: makeIconRender("book-plus-multiple-outline") , headerShown:false }}
        />


        <Tab.Screen
          name="Genre"
          component={GenreScreen}
          options={{ tabBarIcon: makeIconRender("book-alphabet") ,headerShown:false }}
        />

        <Tab.Screen
          name="History"
          component={HistoryScreen}
          options={{ tabBarIcon: makeIconRender("history") ,headerShown:false }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

function makeIconRender(name) {
  return ({ color, size }) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );
}




//IIE,2023 Mobile Application Scripting MAST5112[POE]The inedpendent institute of education:unpublished//
// Sergiu, L. and Lavric SergiuLavric Sergiu&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1122 bronze badges (1967) Adding an existing book to an existing user, Stack Overflow. Available at: https://stackoverflow.com/questions/66120364/adding-an-existing-book-to-an-existing-user (Accessed: 26 October 2023). //
//Expo (no date) Expo/examples: Example projects that demonstrate how to use EXPO apis and Integrate Expo with other popular tools, GitHub. Available at: https://github.com/expo/examples/ (Accessed: 26 October 2023).  // 
// JavaScript booklist app | no frameworks (2018) YouTube. Available at: https://www.youtube.com/watch?v=JaMCxVWtW58 (Accessed: 26 October 2023). //