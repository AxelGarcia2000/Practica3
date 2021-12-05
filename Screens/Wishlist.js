import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LibreriaContext } from '../Context/LibreriaContext';
export default function Wishlist() {
const { wishList, eliminarWishList, agregarCarro } = useContext(LibreriaContext);

  return (
    <View>
      <ScrollView>
        {wishList.length === 0 ? (
          <View>
            <Image
             style={{height: 150, width: 150,}} source={require('../Imagenes/nop.png')}/>
            <Text style={{fontWeight: 'bold',textAlign: 'center',}}>No hay nada en tu Wishlist</Text>
            </View>): ( wishList.map((a,b)=><Card>
            <Card.Title>{a.titulo}</Card.Title>
            <Text key={b}>Precio = ${a.precio} </Text>
            <Text key={b + 10}>Idioma = {a.idioma}</Text>
            <View style={{  alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row',}}>
            <TouchableHighlight onPress={()=>agregarCarro(a)}>
            <Ionicons name={'cart-outline'} size={22} color={'green'} />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => eliminarWishList(a)}>
            <Ionicons name={'heart-dislike-outline'} size={22} color={'red'} />
            </TouchableHighlight>
            </View>
            </Card>
            ))}
      </ScrollView>
    </View>
  );
}