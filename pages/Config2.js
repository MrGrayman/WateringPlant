import React from 'react';
import { View, YellowBox, ScrollView, KeyboardAvoidingView, Alert, Text, TimePickerAndroid, Picker, ViewPagerAndroid, DatePickerAndroid, Slider, Button, StyleSheet} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
import { Container } from 'native-base';
var db = openDatabase({ name: 'WateringPlant.db' });

export default class Config2 extends React.Component {
    constructor() {
        super();
        this.state = { iyear : 2020, imonth : 3, iday : 9}
        this.state = { ihour : 10, iminute : 30}

     }
  
    
    render() {
        return (
        <View style={{ marginTop : 100, flex : 1, alignItems : "center" }}>
            <ScrollView keyboardShouldPersistTaps="handled">

            <Button title="Open DatePickerAndroid"
             onPress={ async () => {
              const { action, year, month, day } = await DatePickerAndroid.open({date : new Date()});
              if (action === DatePickerAndroid.dateSetAction) 
              { this.setState({ iyear : year, imonth: month, iday: day }); }
              if (action === DatePickerAndroid.dismissedAction)                         
              { console.log("Dismissed"); }
             }}
            />
            <Text>Date {this.state.iday} {this.state.imonth} {this.state.iyear}</Text>


            <Button title="Open TimePickerAndroid"
             onPress={ async () => {
              const { action, hour, minute } = await TimePickerAndroid.open({ hour : 11, minute : 30, is24Hour : false });
              if (action === TimePickerAndroid.timeSetAction)                             
              { this.setState({ ihour : hour, iminute: minute}); }
              if (action === TimePickerAndroid.dismissedAction)
              { console.log("Dismissed"); }
             }}
            />
            <Text>Date {this.state.ihour} {this.state.iminute}</Text>


            <Mybutton
                title="OK"
                customClick={() => this.props.navigation.navigate('Detail')}
            />
         
        </ScrollView>
        </View>




        );
    }
}

