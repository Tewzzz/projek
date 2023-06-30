import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const Cardfood = () => {
  const [menu, setMenu] = useState([
    { name: 'sate', price: 15000, image: require('../assets/download.jpg') },
    { name: 'sate', price: 12000, image: require('../assets/download.jpg') },
    { name: 'sate', price: 10000, image: require('../assets/download.jpg') },
    { name: 'Sate Ayam', price: 15000, image: require('../assets/download.jpg') },
    {name: 'Sate Ayam', price: 15000, image: require('../assets/download.jpg')},
    {name: 'Sate Ayam', price: 15000, image: require('../assets/download.jpg')}
  ]);

  const addFoodToCart = (food) => {
    console.log(`Item ${food.name} added to cart.`);
  };

  const renderCatalog = () => {
    return menu.map((item, index) => (
      <View key={index} style={styles.catalogItem}>
        <Image source={item.image} style={styles.foodImage} />
        <Text style={styles.foodName}>{item.name}</Text>
        <Text style={styles.foodPrice}>Rp {item.price}</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => addFoodToCart(item)}
        >
          <Text style={styles.buttonText}>Tambah</Text>
        </TouchableOpacity>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.catalogContainer}>
          {renderCatalog()}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25
  },
  catalogContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  catalogItem: {
    width: '48%',
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 15,
    borderRadius: 14,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  foodImage: {
    width: 130,
    height: 120,
    borderRadius: 14,
    marginBottom: 14
  },
  foodName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  foodPrice: {
    fontSize: 14,
    marginBottom: 5,
    textAlign: 'right'
  },
  addButton: {
    borderRadius: 15,
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'green'
  },
  buttonText: {
    color: 'green',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default Cardfood;
