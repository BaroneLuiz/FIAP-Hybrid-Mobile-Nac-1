import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: "#655DE6"
    
  },
  campos:{
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor: "#fff",
    fontSize: 16,
    borderRadius: 3,
    fontWeight: 'bold'
  },
  logo:{
    width:300,
    margin:30,
    textAlign:"center",
    fontWeight: 'bold',
    fontSize: 26,
    color: "#fff"
  },
  botao:{
    width:300,
    height:42,
    backgroundColor: '#77DD77',
    marginTop:10,
    borderRadius:4,
    alignItems:'center',
    justifyContent:'center'
  },
  botaotext:{
    fontSize:16,
    fontWeight: 'bold',
    
  },
  criartext:{
    marginTop:10
  }
});

export default styles;
