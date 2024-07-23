import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import moment from 'moment';
import { Colors } from '../../constants/Colors';
import { useRouter } from 'expo-router';

export default function UserTripCard({trip}) {
    const router = useRouter()
    const formatData = (data) => {
        return JSON.parse(data)
    }

     const getDestination = (data) => {
       const tripPlan = formatData(data?.tripPlan);
       return formatData(tripPlan)?.travelPlan?.destination;
     };

  
    
  return (
    <View
      style={{
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
      }}
    >
      <Image
        source={require("./../../assets/images/placeholder.jpeg")}
        style={{
          height: 100,
          width: 100,
          borderRadius: 15,
        }}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          flex:1
        //   width:'100%'
          //   gap: 70,
        }}
      >
        <View
          style={
            {
              // flex:1
            }
          }
        >
          <Text
            style={{
              fontFamily: "outfit-medium",
              fontSize: 18,
            }}
          >
            {getDestination(trip)}
          </Text>
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: 14,
              color: Colors.GRAY,
            }}
          >
            {moment(formatData(trip?.tripData).startDate).format("DD MMM yyy")}
          </Text>
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: 14,
              color: Colors.GRAY,
            }}
          >
            Traveling: {formatData(trip?.tripData).traveler?.title}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.PRIMARY,
              padding: 8,
              borderRadius: 10,
              borderWidth: 1,
            }}
            onPress={() =>
              router.push({
                pathname: "/trip-details",
                params: {
                  trip: JSON.stringify(trip),
                },
              })
            }
          >
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 15,
                color: Colors.WHITE,
                textAlign: "center",
              }}
            >
              See Plan
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}