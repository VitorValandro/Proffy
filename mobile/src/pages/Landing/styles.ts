import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257e5',
    justifyContent: 'center',
    padding: 40
  },

  banner:{
    width:'100%',
    resizeMode: 'contain'
  },

  title: {
    color: '#FFF',
    fontSize:20,
    lineHeight: 30,
    marginTop: 80,
  },
  buttonsContainer:{
    flexDirection:'row',
    marginTop: 40,
    justifyContent: 'space-between'
  },
  button:{
    height: 150,
    width: '48%',
    backgroundColor:'#333',
    borderRadius: 8,
    padding: 24,
    justifyContent:'space-between'
  },
  buttonPrimary:{
    backgroundColor:'#9871f5'
  },
  buttonSecondary:{
    backgroundColor:'#04d361'
  },
  buttonText:{
    color: '#FFF',
    fontSize:20,
  },
  totalConnections:{
    color:'#d4c2ff',
    lineHeight: 20,
    maxWidth: 140,
    fontSize: 12,
    marginTop: 140
  }
});

export default styles;