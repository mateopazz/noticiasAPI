import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native'
import Content from './Content';
import React from 'react'

const Busqueda = () => {
  const [text, setText] = React.useState('');
  const [loaded, setLoaded] = React.useState(false);
  
  return (
    <View style={styles.container}>
      <Text>Ingrese una palabra para buscar una noticia</Text>
      <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          placeholder="Palabra a buscar"
          keyboardType="text"
        />
        <TouchableOpacity style= {styles.button}
          underlayColor="#DDDDDD"
          onPress={() => {
            setLoaded(true);
            alert(text);
            
          }
          
          }
          
        >
          <Text style={{color: "white"}}>Buscar</Text></TouchableOpacity>
         
    </View>
  )
}

export default Busqueda

const styles = StyleSheet.create({
  container:{
  backgroundColor: "#69f",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1
  },
  input: {
    textAlign: "center",
    height: 40,
    backgroundColor: "white",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: "blue",
    
    alignItems: "center",
    width: 120,
    height: 30,
    borderRadius: 50,
    margin: "auto",
    justifyContent: "center"
  }
});