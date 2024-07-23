import { SafeAreaView, Text, View } from "react-native";
import Login from '../components/Login'
import {auth} from "../configs/FirebaseConfig"
import { Redirect } from "expo-router";
import { Colors } from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";

export default function Index() {
 const user = auth.currentUser
  return (
    <SafeAreaView style={{
        backgroundColor:Colors.WHITE,
        flex:1
    }}>
      <View
        style={{
          flex: 1,
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        {user ? <Redirect href={"/mytrip"} /> : <Login />}
      </View>
      <StatusBar style="inverted"  />
    </SafeAreaView>
  );
}
 