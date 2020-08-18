import { StyleSheet } from 'react-native';

import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20 + Constants.statusBarHeight,
    backgroundColor: '#655DE6',
  },
  homePage: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
  button: {
    width: 300,
    height: 42,
    marginTop: 10,
    borderRadius: 4,
    textAlign: 'center',
    backgroundColor: '#77DD77',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    margin: 20,
    marginLeft: 50,
  },
});

export default styles;
