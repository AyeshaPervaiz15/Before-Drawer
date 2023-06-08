import React, { useLayoutEffect } from "react";
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    Image,
    Alert,
    FlatList
  } from "react-native";
import { useNavigation } from "@react-navigation/native";
const getRecommendedGift = (gender, age, interest) => {
    // Implement your gift recommendation logic here
  
    // Convert gender, age, and interest to lowercase
    const lowerCaseGender = gender.toLowerCase();
    const lowerCaseInterest = interest.toLowerCase();
  
    // Check the lowercase values of gender, age, and interest to determine the recommended gift
    if (lowerCaseGender == "male" && age >= 10 && age <= 60) {
      if (lowerCaseInterest == "game") {
        return ["Football", "Cricket Kit", "Basketball"];
      } else if (lowerCaseInterest == "music") {
        return ["Guitar", "Drum Set", "Headphones"];
      } else if (lowerCaseInterest == "art") {
        return ["Paint Set", "Drawing Pad", "Modeling Clay"];
      }
    } else if (lowerCaseGender == "female" && age >= 10 && age <= 60) {
      if (lowerCaseInterest == "game") {
        return ["Ludo", "Racket", "Doll"];
      } else if (lowerCaseInterest == "music") {
        return ["Keyboard", "Microphone", "Sheet Music"];
      } else if (lowerCaseInterest == "art") {
        return ["Craft Kit", "Coloring Book", "Origami Set"];
      }
    }
  
    // If no specific condition matches, return a default gift or an empty array
    return ["No gift available"];
  };
  
  
  
  

const GiftRecommendationScreen = ({ route }) => {
  const { gender, age, interest } = route.params;

  // Implement your gift recommendation logic here based on the received parameters
  const recommendedGift = getRecommendedGift(gender, age, interest);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Recommended Gifts",
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
    //   headerRight: () => (
    //     <FontAwesome name="list" size={24} color="white" style={{ marginRight: 12 }} />
    //   ),
    });
  }, []);
  //
  const pressableData = [
   
    
    // Add more pressable data objects as needed
    
        {
          title: "Gift Recommendation",
          description: `Gender: ${gender}\nAge: ${age}\nInterest: ${interest}\nRecommended Gift: ${recommendedGift}`,
          style: {
            width: 300,
            height: 200,
            marginTop: 20,
            borderColor: "#ff8c00",
            backgroundColor: "#8b0000",
            borderRadius: 10,
            padding: 10,
            marginHorizontal: 20,
            marginTop: 30,
          },
          logoStyle: styles.logo,
        },
        // Add more pressable data objects as needed
    
      
  ];

  //

  return (
    <>
    <View>
      <Text style={{ color:"#8b0000" ,marginHorizontal: 20, fontSize: 17,textAlign: "center", fontWeight: "500" }}>Gift Recommendation</Text>
      {/* <Text style={{ color:"#8b0000" ,marginHorizontal: 20, fontSize: 17,textAlign: "center", fontWeight: "500" }}>{recommendedGift}</Text> */}
    </View>
    
    <View>
      <ScrollView>
        
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

export default GiftRecommendationScreen;
const styles = StyleSheet.create({
    title:{
    color:'white',
    fontSize:15,
    fontWeight:'bold',
    textAlign:'center',
    paddingTop: 10,
    paddingBottom:10

    },
    description:
    {
    color:'white',
    fontSize:15,
    fontWeight:'bold',
    paddingTop: 10,
    paddingBottom:10
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
    