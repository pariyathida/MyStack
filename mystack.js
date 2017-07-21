import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  ListView,
  TouchableHighlight,
  Alert,
  Button,
} from 'react-native';
import styles from './styles.js';

export default class MyStack extends Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
        ds : new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
        newItem : '',
        list: ['row 1','row 2',],
    };
    //Alert.alert('Welcome','message')
  }

  _log(){
    console.log(this.state);
  }

  _addItem() {
   
    if(this.state.newItem==''){
      Alert.alert('Empty Field','Please input some text');
    }else{
       Alert.alert('Success','The item was pushed into the list');
        const newList = [...this.state.list, this.state.newItem]; 
    //console.log(newList);
    this.setState({
      list: newList,
    },this._log());
    }
    
  }

  _popItem(){
    this.state.list.pop();
    this.setState({
          list : this.state.list,
    });
  }

  _popAlert(){
    Alert.alert(
  'POP',
  'You want to pop the item?',
  [
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => this._popItem()},
  ],
  { cancelable: false }
)
  }

  render() {
    const dataSource = 
    this.state.ds.cloneWithRows(this.state.list); 
    return (
      
      <View style={styles.container}>
        <TextInput label={'Name'} highlightColor={'#00BCD4'} style={styles.textinput}
            ref= {(el) => { this.newItem = el; }} 
            onChangeText={(newItem) => this.setState({newItem})} value={this.state.newItem} />
            <View style={styles.buttonGroup}>
              <Button title='PUSH' onPress={() => this._addItem()} style={styles.buttonMargin}/>  
              <Button title='POP' onPress={() => this._popAlert()} style={styles.buttonMargin} />  
            </View>
            <ListView
              dataSource={dataSource}
              renderRow={(rowData) => <Text style={styles.text}>{rowData}</Text>}
              style={styles.listview}
            />    
      </View>
      
    );
  }
}

