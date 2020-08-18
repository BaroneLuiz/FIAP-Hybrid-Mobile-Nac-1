import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#655DE6',
  },

  header: {
    fontSize: 50,
    marginTop: '15%',
  },

  desc: {
    fontSize: 20,
    marginTop: '5%',
    marginBottom: '5%',
    fontWeight: 'bold',
  },

  input: {
    marginTop: 15,
    backgroundColor: 'white',
    width: 300,
    height: 50,
    borderRadius: 20,
    paddingLeft: 20,
  },

  title: {
    marginTop: 25,
    fontSize: 25,
    alignSelf: 'baseline',
    marginLeft: 35,
  },

  botao: {
    backgroundColor: 'black',
    borderRadius: 20,
    height: 50,
    width: 300,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 20,
    color: 'white',
  },
});

export default styles;
