import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  Alert
} from "react-native";
import { AntDesign } from '@expo/vector-icons';

import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import { Feather } from "@expo/vector-icons";



import { FontAwesome } from '@expo/vector-icons';
const HomeScreen = () => {
  const navigation = useNavigation();
  const [recipientGender, setRecipientGender] = useState('');
  const [recipientAge, setRecipientAge] = useState('');
  const [interest, setInterest] = useState('');
  const handleRecommendation = () => {
    // Implement your recommendation logic here based on the user's inputs
    // You can use the recipientName, recipientAge, occasion, and budget variables to generate recommendations
    // Display the recommendations to the user in some way
  };


  

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "DashBoard",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#8b0000",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    
    });
  }, []);
  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{
          container: { width: "80%", marginHorizontal: "3%" },
          text: { fontSize: 20 },
        }}
        primary
        title="Submit"
      />
    );
  };
  // console.log(route.params);

 
  const pressableData = [
    {
      title: '"Moto":',
      description: 'Finding the perfect gift for your loved one can be challenging,but this shows how much you truly care.',
      style: {
        width: 200,
        height: 150,
        marginTop: 10,
        borderColor: '#ff8c00',
        backgroundColor: '#8b0000',
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 20,
        marginTop:30,
      },
      logoStyle: styles.logo,
      
    },
    {
      title: '"Aim:"',
      description: 'Our Aim is to make every happy moment more special',
      style: {
        width: 200,
        height: 150,
        marginTop: 10,
        borderColor: '#8b0000',
        backgroundColor: '#ff8c00',
        borderWidth: 2,
        borderRadius: 10,
        padding: 20,
        marginHorizontal: 10,
        marginTop:30,
      },
      logoStyle: styles.logo,
    },
    {
      title: '"Our logo:"',
      description: '',
      style: {
        // Add your style properties here
        width: 200,
        height: 150,
        marginTop: 10,
        borderColor: '#8b0000',
        backgroundColor: '#ff8c00',
        borderWidth: 2,
        borderRadius: 10,
        padding: 20,
        marginHorizontal: 10,
        marginTop:30,
      },
      logoStyle: styles.logo,
    },
    // Add more pressable data objects as needed
  ];

  return (
    <>
      <View>
        <Header />
<Text style={styles.questionnaire}> Questionnaire:</Text>
        <ScrollView>
          <View
            style={{
              margin: 50,
              borderColor: "#FFC72C",
              borderWidth: 3,
              borderRadius: 6,
            }}
          >
            {/* Destination */}
            <Pressable
              
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
              }}
            >
             <AntDesign name="user" size={24} color="black" />
             <TextInput
      style={styles.input}
      value={recipientGender}
      onChangeText={setRecipientGender}
      placeholder="Enter recipient's gender"
    />
             
            </Pressable>


            {/* Selected Dates */}
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
              }}
            >
              <Feather name="calendar" size={24} color="black" />
              <TextInput
      style={styles.input}
      value={recipientAge}
      onChangeText={setRecipientAge}
      placeholder="Enter recipient's age"
      keyboardType="numeric"
    />
               
            </Pressable>

            {/* interests */}
            <Pressable
              //onpress={}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
              }}
            >
              <AntDesign name="hearto" size={24} color="black" />
              <TextInput
                placeholderTextColor="gray"
             
     
        style={styles.input}
        value={interest}
        onChangeText={setInterest}
        placeholder="Enter the interest"
      />
      
             
            </Pressable>

            {/* Recommend Button */}
            <Pressable
             onPress={handleRecommendation}
              style={{
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
                backgroundColor: "#8b0000",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 15,
                  fontWeight: "500",
                  color: "white",
                }}
              >
                Recommend
              </Text>
            </Pressable>
          </View>

          <Text
            style={{ color:"#8b0000" ,marginHorizontal: 20, fontSize: 17,textAlign: "center", fontWeight: "500" }}
          >
            "Choose Best for your love ones"
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {pressableData.map((item, index) => (
             <Pressable key={index} style={item.style}>
             <Text style={styles.title}>{item.title}</Text>
             <Text style={styles.description}>{item.description}</Text>
             <Image source={require('../assets/logo.png')} style={item.logoStyle} />
      
    
          </Pressable>
            ))}

          </ScrollView>

          <Pressable
            style={{
              marginTop: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            
          </Pressable>
        </ScrollView>
      </View>

    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
title:{
  color:'white'
},
description:
{
  color:'white'
}
,questionnaire:
{
  color:'#8b0000',
  fontSize:20,
  fontWeight:'bold',
  textAlign:'center',
   paddingTop: 20,
   paddingBottom:0
}

});