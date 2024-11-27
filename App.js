import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, ActivityIndicator, TouchableOpacity, Dimensions } from 'react-native';
export default function App() {
  // Estado para guardar la carta
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(false);

  // Función para obtener una carta de tarot
  const getCard = async () => {
    setLoading(true);
    try {
      // Llamada a la API utilizando fetch
      const response = await fetch('https://tarot-api-es.vercel.app/api/v1/cards');
      const data = await response.json();
      
      // Selecciona una carta aleatoria de las cartas disponibles
      const randomCard = data.cards[Math.floor(Math.random() * data.cards.length)];
      
      // Guarda la carta seleccionada
      setCard(randomCard);
    } catch (error) {
      console.error(error);
      alert('Error al obtener la carta');
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <View style={styles.container}>
      
      <TouchableOpacity onPress={getCard} style={styles.cardButton}>
        <Text style={{color: "orange", fontSize: 30,  textShadowColor: 'gold', textShadowOffset: { width: 0.5, height: 0.5 }, textShadowRadius: 10,}}>Tirar una carta aleatoria</Text>
      </TouchableOpacity>
      {/* mientras busca la carta, muestra esto */}
      {loading && <ActivityIndicator style={{marginTop: 20 }} size="large" color="orange"/>}
      
      {/* Si encontró una carta y no está cargando, realiza este código */}
      {card && !loading && (
        <View style={styles.cardContainer}>
          <Text style={styles.cardName}>{card.name}</Text>
          <Image source={{ uri: card.image }} style={styles.cardImage} />
          <Text style={styles.cardDescription}>{card.meaning_up}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: "#1d0527"
  },
  cardContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  cardName: {
    textShadowColor: '#ffa500', textShadowOffset: { width: 0.5, height: 0.5 }, textShadowRadius: 5,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "orange",
    marginBottom: 10,
  },
  cardImage: {
    width: 200,
    height: 300,
  
    resizeMode: 'contain',
    marginBottom: 10,
  },
  cardDescription: {
    textAlign: 'center',
    fontSize: 20,
    width: 400,
    color: 'orange',
    textShadowColor: 'gold', textShadowOffset: { width: 0.5, height: 0.5 }, textShadowRadius: 5
  },
  cardButton: {
    backgroundColor: "#212157ad",
    width: 400,
    height: 80,
    borderRadius: 50,
    
    alignItems: "center",
    justifyContent: "center"
  }
});