import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors';

export default function Profile() {
return (
  <View
    style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:Colors.WHITE
    }}
  >
    <Text
      style={{
        fontFamily: "outfit-bold",
        fontSize: 20,
      }}
    >
      Available Soon
    </Text>
  </View>
);
}