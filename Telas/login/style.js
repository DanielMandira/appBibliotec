import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      top: 22.5,
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#FFF',
      alignItems: 'center',
      width: '100%',
      justifyContent: 'space-around',
      bottom: 1,
  
    },
    containerSearch: {
      flexDirection: 'row',
      width: '100%',
      backgroundColor: '#E0E0E0',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },
    ContainerBody: {
      alignItems:'center',
      backgroundColor: '#fff',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%'
    },
    logo: {
      width: 45,
      height: 38,
      margin: 5,
    },
    textlogo: {
      color: '#783560',
      fontSize: 15,
      margin: 5
    },
    botao: {
      textAlign:'center',
      alignItems:'center',
      backgroundColor: '#783560',
      borderRadius: 13,
      width: 62
    },
    Login: {
      width: 300,
      backgroundColor: '#CCC',
      padding: 6,
      margin: 8,
      borderRadius: 14,
    },
    link: {
      fontSize: 14,
      borderBottomWidth: 1,
      color: '#009BFF',
      borderBottomColor: '#009BFF',
    }
  }
  );