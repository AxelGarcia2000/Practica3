import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Header, Card, ListItem, Button, Icon } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TiendaContext } from '../Context/TiendaContext';

export default function Wishlist() {
  const { carrito, eliminarCarro, total, comprarCarrito } = useContext(TiendaContext);
  return (
    <View>      
        {
        carrito.length ===0? 
          <View>
            <Image
              style={{height: 200, width: 200, margin: 50, textAlign: 'center', }}
              source={require('../Imagenes/carrito.png')}
            />
            <Text style={{ fontWeight: 'bold', textAlign: 'center', }}>Carrito vacio</Text>
            </View>:
            <ScrollView>
            <Header centerComponent={{text: 'Carrito', style: { color: 'black'}}} />
            <View>
            <Text style={{fontWeight: 'bold', textAlign: 'center', }}>Total:${total}</Text>
            <View style={{flex: 1,justifyContent: 'center',alignItems:'center'}}>
            <FontAwesome.Button   onPress={()=>comprarCarrito()}>Compra
            </FontAwesome.Button>         
            </View>
            </View>
          {
            carrito.map((x)=>
            <Card>
            <Card.Title>{x.titulo}</Card.Title>
            <Text>Cantidad={x.cantidad} </Text>
            <Text>Precio=${x.precio}</Text>
            <Text>Total=${x.Total1}  </Text>
            <View style={{flex: 1,alignItems: 'center', flexDirection: 'row',}}>
            <TouchableHighlight onPress={() => eliminarCarro(x)}>
            <Ionicons name={'close-circle'} size={22}  />
            </TouchableHighlight>
            </View>
            </Card>)
            }
            </ScrollView>      
            }      
            </View>
             );
          }