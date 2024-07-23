import { View, Text ,Image, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import moment from 'moment';
import FlightInfo from '../../components/TripDetails/FlightInfo';
import HotelList from '../../components/TripDetails/HotelList';
import PlannedTrip from '../../components/TripDetails/PlannedTrip';

export default function TripDetails() {
    const navigation =useNavigation()
    const {trip} = useLocalSearchParams();
   const [tripDetails,setTripDetails] = useState()

   const formatData = (data) => {
     return JSON.parse(data);
   };

    const getDestination = (data) => {
      const tripPlan = formatData(data?.tripPlan);
      return formatData(tripPlan)?.travelPlan?.destination;
    };

    const formateTripData = (data) => {
         const tripPlan = formatData(data?.tripPlan);
         return formatData(tripPlan)?.travelPlan;
    }

    
    useEffect(()=>{
        navigation.setOptions({
          headerShown: true,
          headerTransparent: true,
          headerTitle: "",
        });
       setTripDetails(JSON.parse(trip))
    },[])


    
  return (
    tripDetails && (
      <ScrollView>
        <Image
          source={require("./../../assets/images/placeholder.jpeg")}
          style={{
            height: 360,
            width: "100%",
          }}
        />
        <View
          style={{
            padding: 15,
            backgroundColor: Colors.WHITE,
            height: "100%",
            marginTop: -30,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        >
          <Text
            style={{
              fontFamily: "outfit-bold",
              fontSize: 25,
            }}
          >
            {getDestination(tripDetails)}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 18,
                color: Colors.GRAY,
              }}
            >
              {moment(formatData(tripDetails?.tripData).startDate).format(
                "DD MMM yyy"
              )}
            </Text>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 18,
                color: Colors.GRAY,
              }}
            >
              - {" "}
              {moment(formatData(tripDetails?.tripData).endDate).format(
                "DD MMM yyy"
              )}
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: 17,
              color: Colors.GRAY,
            }}
          >
            🚌 {formatData(tripDetails?.tripData).traveler.title}
          </Text>
          <FlightInfo
            flightData={formateTripData(tripDetails)?.flightDetails}
          />
          <HotelList hotelList={formateTripData(tripDetails)?.hotelOptions} />
          <PlannedTrip details={formateTripData(tripDetails)?.dailyPlan} />
        </View>
      </ScrollView>
    )
  );
}