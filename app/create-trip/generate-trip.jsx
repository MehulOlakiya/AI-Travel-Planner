import { View, Text,Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { CreateTripContext } from '../../context/CreateTripContext';
import { AI_PROMPT } from '../../constants/Option';
import { chatSession } from '../../configs/AiModel';
import { useRouter } from 'expo-router';
import { doc, setDoc } from 'firebase/firestore';
import { db,auth } from '../../configs/FirebaseConfig';

export default function GenerateTrip() {
    const {tripData,setTripData} = useContext(CreateTripContext)
    const [loading,setLoading] = useState(false)
    const router = useRouter()
    const user = auth.currentUser
    useEffect(()=>{
        tripData && GenerateAiTrip()
    },[])
    const GenerateAiTrip = async () => {
        setLoading(true)
      const FINAL_PROMPT = AI_PROMPT.replace(
        "{location}",
        tripData?.locationInfo?.name
      )
        .replace("{totalDay}", tripData?.totalDays)
        .replace("{totalNight}", tripData?.totalDays - 1)
        .replace("{traveler}", tripData?.traveler?.title)
        .replace("{budget}", tripData?.budget)
        .replace("{totalDay}", tripData?.totalDays)
        .replace("{totalNight}", tripData?.totalDays - 1);
         const result = await chatSession.sendMessage(FINAL_PROMPT);
         const tripRes = result.response.text();
        setLoading(false)
        const docId = (Date.now()).toString()
        const res = await setDoc(doc(db,'userTrip',docId),{
            userEmail:user.email,
            tripPlan:JSON.stringify(tripRes),
            tripData:JSON.stringify(tripData),
            docId:docId
        })
         router.push('(tabs)/mytrip')
    }
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 105,
        backgroundColor: Colors.WHITE,
        height: "100%",
        
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 35,
          marginTop: 20,
          textAlign: "center",
        }}
      >
        Please Wait...
      </Text>
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 20,
          marginTop: 40,
          textAlign: "center",
        }}
      >
        We are working to generate your dream trip
      </Text>
      <Image source={require("../../assets/images/plane.gif")}
       style={{
          width:'100%',
          height:200,
          objectFit:'contain'
       }}
      />
      <Text style={{
        fontFamily:'outfit',
        color:Colors.GRAY,
        fontSize:20,
        textAlign:'center',
        marginTop:50
      }}>Do not Go Back</Text>
    </View>
  );
}