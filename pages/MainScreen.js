import React from 'react';
import { View, StyleSheet } from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import { openDatabase } from 'react-native-sqlite-storage';
import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';

var db = openDatabase({ name: 'WateringPlant.db' });
 
export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          flexDirection: 'column',
        }}>
        <Mytext text="This is Homepage" />

        {/* <Mybutton
          title="SideMenu"
          customClick={() => this.props.navigation.navigate('SideMenuP')}
        /> */}
      
        
      
      </View>
    );
  }
}

