import { View, Text, FlatList,TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors'
import { SelectBudgetOptions } from '../../constants/Option'
import OptionCard from "../../components/CreateTrip/OptionCard"
import { CreateTripContext } from '../../context/CreateTripContext'

export default function SelectBudget() {
    const navigation = useNavigation()
    const [selectedBudget,setSelectedBudget] = useState()
    const {tripData,setTripData} = useContext(CreateTripContext)
    const router = useRouter()
    useEffect(()=>{
         navigation.setOptions({
           headerShown: true,
           headerTransparent: true,
           headerTitle: "",
         });
    },[])
    useEffect(()=>{
      selectedBudget && setTripData({
            ...tripData,
            budget:selectedBudget?.title
        })
    },[selectedBudget])

    const onSelectBudget = () => {
        if(!selectedBudget){
            ToastAndroid.show('Select Your Budget',ToastAndroid.LONG);
            return;
        }
        router.push('/create-trip/review-trip')
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
        Budget
      </Text>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 20,
            marginBottom: 25,
          }}
        >
          Choose spending habits for your trip
        </Text>
        <FlatList
          data={SelectBudgetOptions}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{
                marginVertical: 10,
              }}
              onPress={() => setSelectedBudget(item)}
            >
              <OptionCard option={item} selectedOption={selectedBudget} />
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity
          style={{
            padding: 15,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 15,
            marginTop: 20,
          }}
          onPress={onSelectBudget}
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
    </View>
  );
}