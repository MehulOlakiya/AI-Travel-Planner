import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import {SelectTravelsList} from "../../constants/Option"
import OptionCard from '../../components/CreateTrip/OptionCard';
import { CreateTripContext } from '../../context/CreateTripContext';

export default function SelectTraveler() {

    const navigation = useNavigation()
    const router = useRouter()
   const [selectedTraveler,setSelectTraveler] = useState({})
   const {tripData,setTripData} = useContext(CreateTripContext)

    useEffect(() => {
         navigation.setOptions({
        headerShown: true,
        headerTransparent: true,
        headerTitle: "",
      })
    }, []);

    useEffect(()=>{
        setTripData({
            ...tripData,
            traveler:selectedTraveler
        })
    },[selectedTraveler])

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 35,
          fontFamily: "outfit-bold",
          marginTop: 20,
        }}
      >
        Who's Traveling
      </Text>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 23,
            fontFamily: "outfit-bold",
            marginBottom: 25,
          }}
        >
          Choose your travelers
        </Text>
        <FlatList
          data={SelectTravelsList}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{
                marginVertical: 10,
              }}
              onPress={() => setSelectTraveler(item)}
            >
              <OptionCard option={item} selectedOption={selectedTraveler} />
            </TouchableOpacity>
          )}
        />
      </View>
      <TouchableOpacity
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 20,
        }}
        onPress={() => router.push("/create-trip/select-date")}
      >
        <Text
          style={{
            textAlign: "center",
            color: Colors.WHITE,
            fontFamily: "outfit-medium",
            fontSize: 20,
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}