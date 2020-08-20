import { StyleSheet } from 'react-native';

import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20 + Constants.statusBarHeight,
    backgroundColor: '#655DE6',
    alignItems: 'center',
  },
  homePage: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#f0f0f0',
  },
  button: {
    width: 150,
    height: 42,
    borderRadius: 50,
    textAlign: 'center',
    backgroundColor: '#77DD77',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    margin: 20,
    marginLeft: 50,
  },
  msg: {
    textAlign: 'center',
    paddingTop: 20,
    color: '#f0f0f0',
    fontSize: 18,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: 25,
  },
});

export default styles;
