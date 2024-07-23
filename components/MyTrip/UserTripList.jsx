import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import moment from 'moment'
import { Colors } from '../../constants/Colors'
import UserTripCard from './UserTripCard'
import { useRouter } from 'expo-router'

export default function UserTripList({ userTrips }) {
    const latestTrip = JSON.parse(userTrips[0].tripData)
    const router = useRouter()
      const formatData = (data) => {
        return JSON.parse(data);
      };
      const getDestination = (data)=> {
        const tripPlan = formatData(data?.tripPlan);
        return formatData(tripPlan)?.travelPlan?.destination;
      }
    
  return (
    <View
      style={{
        marginTop: 20,
        height: "100%",
        marginBottom:70
      }}
    >
      <View>
        <Image
          source={require("./../../assets/images/placeholder.jpeg")}
          style={{
            width: "100%",
            height: 240,
            objectFit: "cover",
            borderRadius: 15,
          }}
        />
        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "outfit-medium",
              fontSize: 20,
            }}
          >
            {getDestination(userTrips[0])}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 17,
                color: Colors.GRAY,
              }}
            >
              {moment(latestTrip.startDate).format("DD MMM yyy")} -{" "}
              {moment(latestTrip.endDate).format("DD MMM yyy")}
            </Text>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 17,
                color: Colors.GRAY,
              }}
            >
              🚌 {latestTrip.traveler.title}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.PRIMARY,
              padding: 15,
              borderRadius: 15,
              marginTop: 10,
            }}
            onPress={() =>
              router.push({
                pathname: "/trip-details",
                params: {
                  trip: JSON.stringify(userTrips[0]),
                },
              })
            }
          >
            <Text
              style={{
                color: Colors.WHITE,
                textAlign: "center",
                fontFamily: "outfit-medium",
                fontSize: 15,
              }}
            >
              See your plan
            </Text>
          </TouchableOpacity>
        </View>
        {userTrips.map((trip, index) => (
          <UserTripCard key={index} trip={trip} />
        ))}
      </View>
    </View>
  );
}