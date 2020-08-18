import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

const Login = () => {
  const { navigate } = useNavigation();

  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  async function handleLogin() {
    try {
      const userdb = await AsyncStorage.getItem(user.username);
      if (userdb) {
        const password = JSON.parse(userdb);

        if (user.password == password) {
          navigate('Home', { user });
          setUser({ username: '', password: '' });
        } else alert('Senha incorreta!');
      } else alert('Usuário não encontrado! \n Por favor realize o cadastro!');
    } catch (error) {
      console.log('Erro ao procurar usario no AsyncStorage', error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Login</Text>

      <TextInput
        style={styles.campos}
        placeholder='Digite seu login'
        onChangeText={(value) => setUser({ ...user, username: value })}
        value={user.username}
      />

      <TextInput
        style={styles.campos}
        secureTextEntry={true}
        placeholder='Digite sua senha'
        onChangeText={(value) => setUser({ ...user, password: value })}
        value={user.password}
      />
      <TouchableOpacity style={styles.botao} onPress={handleLogin}>
        <Text style={styles.botaotext}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigate('Register')}>
        <Text style={styles.criartext}>Criar conta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
