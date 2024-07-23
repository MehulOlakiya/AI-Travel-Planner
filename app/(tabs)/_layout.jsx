import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarInactiveTintColor:Colors.GRAY
      }}
    >
      <Tabs.Screen
        name="mytrip"
        options={{
          tabBarLabel: "My Trip",
          tabBarLabelStyle: {
            fontFamily: "outfit",
            fontSize: 15,
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="location-sharp" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          tabBarLabel: "Discover",
          tabBarLabelStyle: {
            fontFamily: "outfit",
            fontSize: 15,
          },
          tabBarIcon: ({ color }) => (
            <Ionicons name="globe-sharp" size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarLabelStyle: {
            fontFamily: "outfit",
            fontSize: 15,
          },
          tabBarIcon: ({ color }) => (
            <Ionicons name="people-circle" size={30} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}