import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors'

export default function Discover() {
  return (
    <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Colors.WHITE
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:20
      }}>Available Soon</Text>
    </View>
  )
}