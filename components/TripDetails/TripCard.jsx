import { View, Text,TouchableOpacity,Image, ToastAndroid } from 'react-native'
import React from 'react'
import { Colors } from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { WebView, Linking } from "react-native";



export default function TripCard({details}) {


    const handleNavigation = async (url) => {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    };

    function showOnMapHandler(geoCoordinates) {
      if (geoCoordinates === "N/A") {
        ToastAndroid.show(`Navigation does't available for this place`,ToastAndroid.LONG)
        return;
      }
      const url = `https://www.google.com/maps?q=${geoCoordinates.latitude},${geoCoordinates.longitude}`;
      handleNavigation(url)
     
    }
  return (
      <>
     {details.map((place, index) => (
            <View
            key={index}
              style={{
                backgroundColor: Colors.LIGHT_GRAY,
                padding: 10,
                borderRadius: 15,
                borderColor: Colors.GRAY,
                marginTop: 20,
              }}
            >
              <Image
                source={require("./../../assets/images/placeholder.jpeg")}
                style={{
                  height: 120,
                  width: "100%",
                  borderRadius: 15,
                }}
              />
              <View
                style={{
                  marginTop: 5,
                }}
              >
                <Text
                  style={{
                    fontFamily: "outfit-bold",
                    fontSize: 20,
                  }}
                >
                  {place?.placeDetails?.placeName}
                </Text>
                <Text
                  style={{
                    fontFamily: "outfit",
                    fontSize: 17,
                    color: Colors.GRAY,
                  }}
                >
                  {place?.placeDetails?.placeDetails}
                </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <Text
                      style={{
                        fontFamily: "outfit",
                        fontSize: 17,
                        marginTop: 5,
                      }}
                    >
                      🎟️ Ticket Price:{" "}
                      <Text style={{ fontFamily: "outfit-bold" }}>
                        {place?.placeDetails?.ticketPricing}
                      </Text>
                    </Text>
                    <Text
                      style={{
                        fontFamily: "outfit",
                        fontSize: 17,
                        marginTop: 5,
                      }}
                    >
                      ⏱️ Time to Travel:{" "}
                      <Text style={{ fontFamily: "outfit-bold" }}>
                        {place?.placeDetails?.timeToTravel}
                      </Text>
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: Colors.PRIMARY,
                      padding: 7,
                      borderRadius: 7,
                    }}
                    onPress={() =>
                      showOnMapHandler(place?.placeDetails?.geoCoordinates)
                    }
                  >
                    <Ionicons name="navigate" size={20} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
          </>
  )
}