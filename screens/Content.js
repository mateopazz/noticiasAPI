
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { useEffect, useState } from 'react';
import React from 'react'

const Content = () => {
    let [isLoading, setIsLoading] = useState(true);
    let[error, setError] = useState();
    let [response,setResponse] = useState();
  
    useEffect(() => {
      //se conecta la API y se consiguen los datos 2aea0f33848c4bf5986f235a484c34ba
      fetch(`https://newsapi.org/v2/everything?q=a&apiKey=2aea0f33848c4bf5986f235a484c34ba`)
      .then(res => res.json())
      .then((result) =>{
        //una vez conseguidos todos los datos, la variable de carga pasa a ser falsa
        setIsLoading(false);
        setResponse(result);
      },
      (error) => {
        setIsLoading(false);
        //si ocurre un error con la conexión de la API, en vez de mostrar los resultados, muestra el error que ocurrió
        setError(error);
      }
    )
    }, []);
  
    //CONSTANTE DONDE SE MUESTRA EL CONTENIDO DE LA API
   
      //si la variable de carga es verdadera, se muestra la rueda de carga en pantalla
      if(isLoading){
        return<ActivityIndicator size="large" />;
      }
      //una vez finalizada la carga, se muestra lo siguiente
      console.log(response);
      return <Text>API called</Text>
    };
  


export default Content

const styles = StyleSheet.create({})