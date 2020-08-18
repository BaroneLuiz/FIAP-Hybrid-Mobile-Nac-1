import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import styles from './styles';

const Register = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.header}>Cadastro</Text>

        <Text style={styles.desc}>Faça o seu Cadastro</Text>

        <Text style={styles.title}>Nome Completo</Text>
        <TextInput style={styles.input} />

        <Text style={styles.title}>Email</Text>
        <TextInput style={styles.input} />

        <Text style={styles.title}>Senha</Text>
        <TextInput style={styles.input} />

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.text}>Cadastrar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Register;
