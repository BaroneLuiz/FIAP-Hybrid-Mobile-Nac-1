import React from 'react';
import { View, Text,TextInput,TouchableOpacity  } from 'react-native';

import styles from './styles';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text
      style={styles.logo}
      >Login</Text>

     <br/>

      <TextInput 
      style={styles.campos}
      placeholder="Digite seu login"
      />

      <TextInput 
      style={styles.campos}
      secureTextEntry={true}
      placeholder="Digite sua senha"
      />
    <TouchableOpacity
      style={styles.botao}
      onPress={() =>{} }
      >
      <Text
      style={styles.botaotext}
      >Login</Text>
    </TouchableOpacity>

    <TouchableOpacity
    
      onPress={() =>{} }
      >
      <Text
      style={styles.criartext}
      >Criar conta</Text>
    </TouchableOpacity>


    </View>
  );
};

export default Login;
