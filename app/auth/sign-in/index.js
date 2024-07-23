import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
} from "react-native";
import React, { useEffect ,useState} from 'react'
import { useNavigation, useRouter } from 'expo-router'
import {Colors} from "../../../constants/Colors"
import { Ionicons } from "@expo/vector-icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../configs/FirebaseConfig";

export default function SignIn() {
    const navigation = useNavigation()
    const router = useRouter()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])

    const onSignIn = () => {
        setLoading(true)
        if (!email.length || !password.length) {
            ToastAndroid.show("Please Enter Email & Password", ToastAndroid.BOTTOM);
            return;
        }
        
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setLoading('false')
          router.replace("/mytrip");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === "auth/invalid-credential"){
            ToastAndroid.show(
              "Invalid Credential",
              ToastAndroid.BOTTOM
            );
          }
            setLoading(false)
        });

    
    };

  return (
    <>
      <View
        style={{
          padding: 25,
          backgroundColor: Colors.WHITE,
          height: "100%",
          paddingTop: 40,
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
          Let's Sign You In
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 30,
            color: Colors.GRAY,
            marginTop: 20,
          }}
        >
          Welcome Back
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 30,
            color: Colors.GRAY,
            marginTop: 10,
          }}
        >
          You've been missed
        </Text>

        <View
          style={{
            marginTop: 50,
          }}
        >
          <Text
            style={{
              fontFamily: "outfit",
              marginBottom: 5,
              marginLeft: 6,
              fontSize: 18,
            }}
          >
            Email
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
        </View>
        <View
          style={{
            marginTop: 30,
          }}
        >
          <Text
            style={{
              fontFamily: "outfit",
              marginBottom: 5,
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
          style={
            {
              padding: 18,
              backgroundColor: Colors.PRIMARY,
              borderRadius: 15,
              marginTop: 50,
            }}
          disabled={loading}
          onPress={onSignIn}
        >
          {!loading && (
            <Text
              style={{
                color: Colors.WHITE,
                textAlign: "center",
                fontSize: 18,
              }}
            >
              Sign In
            </Text>
          )}
          {loading && (
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // backgroundColor: Colors.WHITE,
                // marginTop: 200,
                // marginTop:200,
                // position:'absolute'
              }}
            >
              <ActivityIndicator size="large" color="white" />
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
          disabled={loading}
          onPress={() => router.replace("auth/sign-up")}
        >
          <Text
            style={{
              color: Colors.PRIMARY,
              textAlign: "center",
              fontSize: 18,
            }}
          >
            Create Account
          </Text>
        </TouchableOpacity>
      </View>
    </>
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