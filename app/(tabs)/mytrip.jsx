import { View, Text, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { Ionicons } from "@expo/vector-icons";
import StartNewTripCard from '../../components/MyTrip/StartNewTripCard';
import {db,auth} from "../../configs/FirebaseConfig"
import {  where ,query,collection, getDocs} from 'firebase/firestore';
import UserTripList from '../../components/MyTrip/UserTripList';
import { useRouter } from 'expo-router';
export default function MyTrip() {
    const [userTrips,setUserTrips] = useState([])
    const [loading,setLoading] = useState(false)
    const router = useRouter()
    const user = auth.currentUser
    useEffect(()=>{
        user && GetMyTrips()
    },[user])
    const GetMyTrips = async() => {
        setLoading(true)
        setUserTrips([])
        const q = query(collection(db,'userTrip'),where('userEmail','==',user.email));
        const querySnapShot = await getDocs(q);
        querySnapShot.forEach((doc)=>{
            setUserTrips(prev=>[...prev,doc.data()])
        })
        setLoading(false)


    }
  return (
    <ScrollView
      style={{
        padding: 25,
        paddingTop: 55,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 35,
          }}
        >
          My Trips
        </Text>
        <TouchableOpacity
          onPress={() => router.push("/create-trip/search-place")}
        >
          <Ionicons name="add-circle" size={50} color="black" />
        </TouchableOpacity>
      </View>
      {loading && (
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 300,
            flex: 1,
          }}
        >
          <ActivityIndicator size={"large"} color={Colors.PRIMARY} />
        </View>
      )}
      {userTrips?.length === 0 ? (
        !loading && <StartNewTripCard />
      ) : (
        <UserTripList userTrips={userTrips} />
      )}
    </ScrollView>
  );
}