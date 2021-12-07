import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TiendaContext } from '../Context/TiendaContext';

export default function Wishlist() {
const { agregarCarro, wishList, eliminarWishList} = useContext(TiendaContext);

  return (
    <View>
      <ScrollView>
        {wishList.length === 0? (
          <View>
            <Image
             style={{height: 150, width: 150,}} source={require('../Imagenes/nop.png')}/>
            <Text style={{fontWeight: 'bold',textAlign: 'center',}}>No hay nada en tu Wishlist</Text>
            </View>): 
            ( wishList.map((x)=><Card>
            <Card.Title>{x.titulo}</Card.Title>
            <Text>Precio = ${x.precio} </Text>
            <Text>Idioma = {x.idioma}</Text>
            <View style={{alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row',}}>
            <TouchableHighlight onPress={()=>agregarCarro(x)}>
            <Ionicons name={'cart-outline'} size={22} />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => eliminarWishList(x)}>
            <Ionicons name={'md-trash'} size={22}/>
            </TouchableHighlight>
            </View>
            </Card>
            ))}
      </ScrollView>
    </View>
  );
}