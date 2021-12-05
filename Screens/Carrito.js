import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Header, Card, ListItem, Button, Icon } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LibreriaContext } from '../Context/LibreriaContext';

export default function Wishlist() {
  const { carrito, total, eliminarCarrito, comprarCarrito, eliminarCarro } = useContext(LibreriaContext);
  return (
    <View>      
        {
        carrito.length === 0 
        ? 
          <View>
            <Image
              style={{height: 200, width: 200, margin: 50, textAlign: 'center', }}
              source={require('../Imagenes/carrito.png')}
            />
            <Text style={styles.paragraph}>Carrito vacio</Text>
          </View>:
          <ScrollView>
          <Header centerComponent={{text: 'Carrito', style: { color: 'red'}}} />
          <View>
            <Text style={styles.paragraph}>Total: $ {total}</Text>
            <View style={{flex: 1,justifyContent: 'center',alignItems: 'center', }}>
            <FontAwesome.Button backgroundColor="#3b7bbf" onPress={()=>comprarCarrito()}>
                 Pagar 
            </FontAwesome.Button>         
          </View>
        </View>
          {
            carrito.map((a,i)=>
            <Card>
            <Card.Title>{a.titulo}</Card.Title>
            <Text key={i}>Cantidad = {a.cantidad} </Text>
            <Text key={i}>Precio = $ {a.precio} c/u </Text>
            <Text key={i}>Importe = $ {a.importe}  </Text>
            <View style={{flex: 1,alignItems: 'center', flexDirection: 'row',}}>
              <TouchableHighlight onPress={() => eliminarCarro(a)}>
              <Ionicons name={'close-circle'} size={22} color={'red'} />
              </TouchableHighlight>
            </View>
            </Card>)
          }
           </ScrollView>      
        }      
    </View>
  );
}
const styles = StyleSheet.create({
  paragraph: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});