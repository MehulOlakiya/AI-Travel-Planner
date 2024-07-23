import { View, Text,TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import {Colors} from "../../constants/Colors"
import CalendarPicker from "react-native-calendar-picker";
import moment from 'moment'
import {CreateTripContext} from "../../context/CreateTripContext"

export default function SelectDate() {
    const navigation = useNavigation()
    const [startDate,setStartDate] =  useState()
    const [endDate, setEndDate] = useState();
    const {tripData,setTripData} = useContext(CreateTripContext)
    const router = useRouter()
    useEffect(()=>{
        navigation.setOptions({
        headerShown: true,
        headerTransparent: true,
        headerTitle: "",
      })
    },[])

    const onDateSelection = () => {
        if(!startDate && !endDate){
            ToastAndroid.show('Please Select start and End Date.',ToastAndroid.LONG)
        }
        const totalDays = endDate.diff(startDate,'days')
        setTripData({
            ...tripData,
            startDate,
            endDate,
            totalDays : totalDays + 1
        })
        router.push('/create-trip/select-budget')
    }

    const onDateChange = (date,type) => {
        if(type === 'START_DATE'){
            setStartDate(moment(date))
        }else{
            setEndDate(moment(date))
        }
    }
    
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
          fontFamily: "outfit-bold",
          fontSize: 35,
          marginTop: 20,
        }}
      >
        Travel Dates
      </Text>
      <View
        style={{
          marginTop: 30,
        }}
      >
        <CalendarPicker
          onDateChange={onDateChange}
          allowRangeSelection={true}
          minDate={new Date()}
          
          maxRangeDuration={10}
          selectedRangeStyle={{
            backgroundColor: Colors.PRIMARY,
          }}
          selectedDayTextStyle={{
            color: Colors.WHITE,
          }}
        />
      </View>

      <TouchableOpacity
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 35,
        }}
        onPress={onDateSelection}
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