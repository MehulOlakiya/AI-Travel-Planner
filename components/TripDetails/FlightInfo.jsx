import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { Colors } from '../../constants/Colors';
import { WebView, Linking } from "react-native";


export default function FlightInfo({flightData}) {
     const handleNavigation = async (url) => {
       const supported = await Linking.canOpenURL(url);
       if (supported) {
         await Linking.openURL(url);
       } else {
         Alert.alert(`Don't know how to open this URL: ${url}`);
       }
     };
  return (
    <View
      style={{
        marginTop: 20,
        // borderWidth: 1,
        padding: 10,
        borderRadius: 15,
        borderColor: Colors.GRAY,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 20,
          }}
        >
          ✈️ Flights
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.PRIMARY,
            padding: 5,
            width: 100,
            borderRadius: 7,
            marginTop: 7,
          }}
          onPress={() => handleNavigation(flightData.bookingUrl)}
        >
          <Text
            style={{
              textAlign: "center",
              color: Colors.WHITE,
              fontFamily: "outfit",
            }}
          >
            Book Here
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 17,
          marginTop: 7,
        }}
      >
        Airline: {flightData.airline}
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 17,
        }}
      >
        Price: {flightData.flightPrice}
      </Text>
    </View>
  );
}