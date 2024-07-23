import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from "../../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../configs/FirebaseConfig';

export default function SignUp() {
    const navigation = useNavigation()
    const router = useRouter()


    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [loading, setLoading] = useState(false)


    useEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])

    const onCreateAccount = () => {

        if(!email.length || !password.length || !fullName.length ){
            ToastAndroid.show('Please Enter All Details',ToastAndroid.LONG)
            return;
        }

        setLoading(true)

        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            router.replace('/mytrip')
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
          setLoading(false)
    }

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 50,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 30,
          marginTop: 30,
        }}
      >
        Create New Account
      </Text>

      <View
        style={{
          marginTop: 50,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
            marginBottom: 8,
            marginLeft: 6,
            fontSize: 18,
          }}
        >
          Full Name
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Full Name"
          value={fullName}
          onChangeText={(value) => setFullName(value)}
        />
      </View>

      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
            marginBottom: 8,
            marginLeft: 6,
            fontSize: 18,
          }}
        >
          Email
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          onChangeText={(value) => setEmail(value)}
          value={email}
        />
      </View>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
            marginBottom: 8,
            marginLeft: 6,
            fontSize: 18,
          }}
        >
          Password
        </Text>
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Enter Password"
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
      </View>

      <TouchableOpacity
        style={{
          padding: 18,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 50,
        }}
        onPress={onCreateAccount}
      >
        {!loading && (
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: "center",
              fontSize: 18,
            }}
          >
            Create Account
          </Text>
        )}
        {loading && (
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: Colors.WHITE,
              // marginTop: 200,
              // marginTop:200,
              // position:'absolute'
            }}
          >
            <ActivityIndicator size="large" color="black" />
          </View>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 18,
          backgroundColor: Colors.WHITE,
          borderRadius: 15,
          marginTop: 20,
          borderWidth: 1,
        }}
        onPress={() => router.replace("auth/sign-in")}
      >
        <Text
          style={{
            color: Colors.PRIMARY,
            textAlign: "center",
            fontSize: 18,
          }}
        >
          Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    fontFamily: "outfit",
    fontSize:18
  },
});