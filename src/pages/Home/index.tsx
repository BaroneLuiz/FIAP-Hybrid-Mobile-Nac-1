import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import axios from 'axios';

import styles from './styles';

interface Params {
  user: {
    username: string;
    password: string;
  };
}

const Home = () => {
  const { navigate } = useNavigation();
  const route = useRoute();

  const { user } = route.params as Params;

  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${user.username}`)
      .then((res) => setAvatar(res.data.avatar_url))
      .catch((error) =>
        setAvatar(
          'https://image.freepik.com/free-vector/error-404-found-glitch-effect_8024-4.jpg'
        )
      );
  }, []);

  function handleDeslogar() {
    navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.homePage}>Esta área é restrita!</Text>

      <Text style={styles.msg}>
        Olá{' '}
        <Text
          style={[
            styles.msg,
            { fontWeight: 'bold', fontSize: 20, color: '#fff' },
          ]}
        >
          {user.username}
        </Text>
      </Text>

      <Image
        style={styles.avatar}
        source={{
          uri: avatar
            ? avatar
            : 'https://miro.medium.com/max/1080/0*DqHGYPBA-ANwsma2.gif',
        }}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleDeslogar}>
          <Text style={styles.buttonText}>Deslogar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
