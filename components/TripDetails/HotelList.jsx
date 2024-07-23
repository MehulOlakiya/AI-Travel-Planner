import { View, Text, FlatList,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { WebView, Linking } from "react-native";
import { Colors } from '../../constants/Colors';


export default function HotelList({hotelList}) {
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
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 20,
        }}
      >
        🏨 Hotel Recommendation
      </Text>
      <FlatList
        style={{
          marginTop: 10,
        }}
        horizontal={true}
        data={hotelList}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View
            style={{
              marginRight: 20,
              width: 180,
            }}
          >
            <Image
              source={require("./../../assets/images/placeholder.jpeg")}
              style={{
                width: 180,
                height: 120,
                borderRadius: 15,
              }}
            />
            <View
              style={{
                padding: 5,
              }}
            >
              <Text
                style={{
                  fontFamily: "outfit-medium",
                  fontSize: 17,
                }}
              >
                {item.hotelName}
              </Text>
              <View>
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
                      fontFamily: "outfit",
                    }}
                  >
                    ⭐ {item.rating}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "outfit",
                    }}
                  >
                    💵 {item.price}
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    padding: 8,
                    backgroundColor: Colors.PRIMARY,
                    borderRadius: 10,
                    marginTop: 10,
                  }}
                  onPress={() => handleNavigation(item.hotelBookingUrl)}
                >
                  <Text
                    style={{
                      fontFamily: "outfit",
                      color: Colors.WHITE,
                      textAlign: "center",
                    }}
                  >
                    Book Here
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}