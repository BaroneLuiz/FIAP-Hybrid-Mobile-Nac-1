import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

const Login = () => {
  const navigation = useNavigation();

  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  async function handleLogin() {
    // const userdb = await AsyncStorage.getItem(JSON.stringify(user));
    // console.log('userdb = ', userdb)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Login</Text>

      <TextInput
        style={styles.campos}
        placeholder='Digite seu login'
        onChangeText={(value) => setUser({ ...user, username: value })}
      />
      <TouchableOpacity style={styles.botao} onPress={() => {}}>
        <Text style={styles.botaotext}>Login</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.campos}
        secureTextEntry={true}
        placeholder='Digite sua senha'
        onChangeText={(value) => setUser({ ...user, password: value })}
      />
      <TouchableOpacity style={styles.botao} onPress={handleLogin}>
        <Text style={styles.botaotext}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.criartext}>Criar conta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
