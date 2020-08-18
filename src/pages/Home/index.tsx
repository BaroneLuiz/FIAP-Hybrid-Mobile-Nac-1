import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

interface HomeProps {
  name: string;
}

const Home: React.FC<HomeProps> = ({ name }) => {
  const navigation = useNavigation();

  function handleDeslogar() {
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.homePage}>Home Page</Text>

      <View>
        <Text style={{ textAlign: 'center', paddingTop: 20 }}>Olá {name}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleDeslogar}>
          <Text style={styles.buttonText}>Deslogar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
