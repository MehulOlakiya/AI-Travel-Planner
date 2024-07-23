import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors'
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { CreateTripContext } from '../../context/CreateTripContext';

export default function SearchPlace() {
    const navigation = useNavigation()
    const router = useRouter()
    const [search,setSearch] = useState()
    const {tripData,setTripData} = useContext(CreateTripContext)
    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:'Search'
        })
    },[])
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      {/* <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true

        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_API_KEY,
          language: "en",
        }}
      /> */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 25,
        }}
      >
        <TextInput
          style={{
            borderRadius: 10,
            padding: 15,
            borderWidth: 1,
            flex:1,
            marginRight:10
          }}
          placeholder="Search Place"
          value={search}
          onChangeText={(value)=>setSearch(value)}
        />
        <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 10,
          }}
          onPress={()=>{
            setTripData({
            locationInfo:{
                name:search,
                coordinates:{lat:'',long:''},
                photoRef:"",
                url:""
            }
          })
          router.push("/create-trip/select-traveler")
        }}
        >
          <Text
            style={{
              fontFamily: "outfit",
              color: Colors.WHITE,
            }}
          >
            Search
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}