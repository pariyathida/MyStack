import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 50,
  },
  buttonGroup:{
    flexDirection: 'row',
    margin: 5,
  },
  buttonMargin:{
    marginHorizontal: 2,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textinput: {
    width: 200,
    textAlign: 'center',
  },
  listview: {
    width: '100%',
   
  },
  text:{
    textAlign: 'center',
  }
});

module.exports = styles;