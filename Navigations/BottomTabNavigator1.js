import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Text,View,StyleSheet,Image,TouchableHighlight,} 
from 'react-native';
import { Badge } from 'react-native-elements';
import HomeScreen from '../Screens/HomeScreen';
import Wishlist from '../Screens/WishlistScreen';
import Carrito from '../Screens/CarroScreen';
import { TiendaContext } from '../Context/TiendaContext';

const Tab = createBottomTabNavigator();
export default function BottomTabNavigator1() {
  const { cantidad, contando,} = useContext(TiendaContext);
  return (
    <Tab.Navigator initialRouteName="Inicio">
      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
        tabBarLabel: 'Inicio',
        tabBarIcon: ({ color }) => (
        <Ionicons name={'basket'} size={20} color={color} />
          ),}} />
      <Tab.Screen
        name="Whishlist" component={Wishlist}
        options={{ tabBarLabel: 'Lista de deseos', tabBarIcon: 
        ({color})=> (
        <View>
        <Ionicons name={'heart'} size={20} color={color} />
        <Badge status="error" value={contando} containerStyle={{ position: 'absolute', top: 0, left: 150 }}/>
        </View>
        ), }} />
      <Tab.Screen
        name="Carrito"
        component={Carrito}
        options={{
        headerShown: false,
        tabBarIcon: ({ color }) => (
      <Ionicons name={'cart'} size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
