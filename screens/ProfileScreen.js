import { StyleSheet, Text, View ,SafeAreaView,Pressable} from 'react-native'
import React ,{useLayoutEffect} from 'react'
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const ProfileScreen = () => {
  
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Profile",
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
      headerRight: () => (

        <FontAwesome 
        name="list" size={24}
        color="white"
        style={{ marginRight: 12 }} />
      ),
    });
  }, []);
  return (
    <SafeAreaView>
         
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})