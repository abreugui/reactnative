import React from 'react';
import { StyleSheet, Text, View, Image, Icon } from 'react-native';

export default class Menu extends React.Component{
  render(){
    return(
      <View style={[styles.menu]}>
        <Image style={[styles.logo]} source={require('./logo.png')} />
      </View>
    );
  }
}

const styles  = StyleSheet.create({
  menu: {
    backgroundColor: 'white',
    marginTop: '7%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '100%',
  },
  logo: {
    height: 80,
    width: 100,
  },
});
