import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

const Register = () => {
  const { navigate } = useNavigation();

  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  async function handleRegister() {
    try {
      const userdb = await AsyncStorage.getItem(user.username);
      if (userdb) alert('Usuário já existe!');
      else {
        await AsyncStorage.setItem(user.username, user.password);
        alert('Usuário Criado!');
        navigate('Login');
      }
    } catch (error) {
      console.log('Erro no AsyncStorage ', error);
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.header}>Cadastro</Text>

        <Text style={styles.desc}>Faça o seu Cadastro</Text>

        <Text style={styles.title}>Usuário do GitHub</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setUser({ ...user, username: value })}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          onChangeText={(value) => setUser({ ...user, password: value })}
        />

        <TouchableOpacity style={styles.botao} onPress={handleRegister}>
          <Text style={styles.text}>Cadastrar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Register;
