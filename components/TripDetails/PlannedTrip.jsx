import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {  useRouter } from 'expo-router';
import TripCard from './TripCard';

export default function PlannedTrip({details}) {
    const router = useRouter()
    const formatDayActivity= (data) => {
        const result = data.reduce((acc, item) => {
            const day = item.day;
            if (!acc[day]) {
                acc[day] = [];
            }
            acc[day].push(item);
            return acc;
        }, {});
        return result
    }

   
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
        🏕️ Plan Details
      </Text>

      {Object.entries(formatDayActivity(details)).map(([day, details]) => (
        <View key={day}>
          <Text
            style={{
              fontFamily: "outfit-medium",
              fontSize: 20,
              marginTop: 20,
            }}
          >
            {day.charAt(0).toUpperCase() + day.slice(1)}
          </Text>
            <TripCard details={details}/>
        </View>
      ))}
    </View>
  );
} 