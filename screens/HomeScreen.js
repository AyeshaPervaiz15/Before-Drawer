import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, TextInput, View, Pressable, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { auth, db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [recipientGender, setRecipientGender] = useState("");
  const [recipientAge, setRecipientAge] = useState("");
  const [interest, setInterest] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  const handleRecommendation = async () => {
    navigation.navigate("GiftRecommendation", {
        gender: recipientGender,
        age: recipientAge,
        interest: interest,
                //recommendations: recommendations,
       });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Dashboard",
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
  }, [navigation]);

  const pressableData = [
    {
      title: '"Moto":',
      description: "Finding the perfect gift for your loved one can be challenging, but this shows how much you truly care.",
      style: {
        width: 200,
        height: 150,
        marginTop: 10,
        borderColor: "#ff8c00",
        backgroundColor: "#8b0000",
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 20,
        marginTop: 30,
      },
      logoStyle: styles.logo,
    },
    {
      title: '"Aim:"',
      description: "Our Aim is to make every happy moment more special",
      style: {
        width: 200,
        height: 150,
        marginTop: 10,
        borderColor: "#8b0000",
        backgroundColor: "#ff8c00",
        borderWidth: 2,
        borderRadius: 10,
        padding: 20,
        marginHorizontal: 10,
        marginTop: 30,
      },
      logoStyle: styles.logo,
    },
    {
      title: '"Our logo:"',
      description: "",
      style: {
        width: 200,
        height: 150,
        marginTop: 10,
        borderColor: "#8b0000",
        backgroundColor: "#ff8c00",
        borderWidth: 2,
        borderRadius: 10,
        padding: 20,
        marginHorizontal: 10,
        marginTop: 30,
      },
      logoStyle: styles.logo,
    },
    // Add more pressable data objects as needed
  ];

  return (
    <View>
      <Text style={styles.questionnaire}>Questionnaire:</Text>
      <ScrollView>
        <View style={styles.container}>
          {/* Destination */}
          <Pressable style={styles.inputContainer}>
            <AntDesign name="user" size={24} color="black" />
            <TextInput
              style={styles.input}
              value={recipientGender}
              onChangeText={setRecipientGender}
              placeholder="Enter recipient's gender"
            />
          </Pressable>

          {/* Selected Dates */}
          <Pressable style={styles.inputContainer}>
            <Feather name="calendar" size={24} color="black" />
            <TextInput
              style={styles.input}
              value={recipientAge}
              onChangeText={setRecipientAge}
              placeholder="Enter recipient's age"
              keyboardType="numeric"
            />
          </Pressable>

          {/* Interests */}
          <Pressable style={styles.inputContainer}>
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
          <Pressable onPress={handleRecommendation} style={styles.recommendButton}>
            <Text style={styles.recommendButtonText}>Recommend</Text>
          </Pressable>
        </View>

        <Text style={styles.chooseBestText}>"Choose Best for your loved ones"</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {pressableData.map((item, index) => (
            <Pressable key={index} style={item.style}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Image source={require("../assets/logo.png")} style={item.logoStyle} />
            </Pressable>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    margin: 50,
    borderColor: "#FFC72C",
    borderWidth: 3,
    borderRadius: 6,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
    borderColor: "#FFC72C",
    borderWidth: 2,
    paddingVertical: 15,
  },
  input: {
    flex: 1,
  },
  recommendButton: {
    paddingHorizontal: 10,
    borderColor: "#FFC72C",
    borderWidth: 2,
    paddingVertical: 15,
    backgroundColor: "#8b0000",
  },
  recommendButtonText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "500",
    color: "white",
  },
  title: {
    color: "white",
  },
  description: {
    color: "white",
  },
  questionnaire: {
    color: "#8b0000",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 0,
  },
  chooseBestText: {
    color: "#8b0000",
    marginHorizontal: 20,
    fontSize: 17,
    textAlign: "center",
    fontWeight: "500",
  },
});
