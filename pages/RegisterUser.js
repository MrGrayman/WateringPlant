/*Screen to register the user*/
import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert, Text, TimePickerAndroid, Picker, StyleSheet, Switch, ViewPagerAndroid, ToastAndroid, DatePickerAndroid, Slider } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Badge } from 'native-base';
import Mytextinput from './components/Mytextinput';
import Mytext from './components/Mytext';
import Mybutton from './components/Mybutton';

import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'WateringPlant.db' });
const styles = StyleSheet.create({
   text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'red',
      textAlign: 'center'
   },
   viewPager: {
    flex: 1
  },
  pageStyle: {
    alignItems: 'center',
    padding: 50,
  }
})

export default class RegisterUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plant_name: '',
      plant_type: '',
      plant_status: '',
      time: '',
      switch1Value: false,

    };
    this.state = { iyear : 2020, imonth : 3, iday : 9}
    this.state = { ihour : 10, iminute : 30}
    
  }
  state = {price: ''}
   updatePrice = (price) => {
      this.setState({ price: price*100 })
   }

  state = {department: ''}
  updateDepartment = (department) => {
     this.setState({ department: department })
     
  }
  toggleSwitch1 = (value) => {
    this.setState({switch1Value: value})
 }
  
 register_user = () => {
    var that = this;
    this.setState({time:new Date()})
    const { plant_name } = this.state;
    const { plant_type } = this.state;
    const { plant_status } = this.state;
    const { time } = this.state;
    // alert(plant_name, plant_type, plant_status,time);
    if (plant_name) {
      if (plant_type) {
        if (plant_status) {
          if(time){
          db.transaction(function(tx) {
            
            tx.executeSql(
              
              'INSERT INTO vegetablePlot (plant_name, plant_type, plant_status, time) VALUES (?,?,?,?)',
              [plant_name, plant_type, plant_status , time],
              
              (tx, results) => {
                console.log('Results', results.rowsAffected);

                if (results.rowsAffected > 0) {
                  Alert.alert(
                    'Success',
                    'You are Registered Successfully',
                    [
                      {
                        text: 'Ok',
                        onPress: () =>
                          that.props.navigation.navigate('ViewAll'),
                      },
                    ],
                    { cancelable: false }
                  );
                } else {
                  alert('Registration Failed');
                }
              },
              (error) => { alert(JSON.stringify(error)) }
            );
            
          });
        }
         else {
          alert('Please fill Time');
        }
      } else {
        alert('Please fill Status');
      }
    } else {
      alert('Please fill Type');
    }
    } else {
      alert('Please fill Name');
    } 
  };
 
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <ScrollView keyboardShouldPersistTaps="handled">
        <Container>
        <ViewPagerAndroid initialPage={0}
          style={{ flex : 1, width : '100%', height : '100%'}}>
          <View style={styles.pageStyle} key="1">
             <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between' }}>
            <Mytextinput
              placeholder="Enter Name"
              onChangeText={plant_name => this.setState({ plant_name })}
              style={{ padding:10 }}
            />
            
            <Picker selectedValue = {this.state.department} onValueChange = {plant_type => this.setState({ plant_type })}>
               <Picker.Item label = "Choose Type..." value = "" />
               <Picker.Item label = "Echinopsis" value = "1" />
               <Picker.Item label = "Ferocactus" value = "P2" />
               <Picker.Item label = "Gymocalycium" value = "P3" />
               <Picker.Item label = "Astrophytum myriostigma" value = "P4" />
               <Picker.Item label = "Pereskia" value = "P5" />
               <Picker.Item label = "Opumtia" value = "P6" />
               <Picker.Item label = "Cereus" value = "P7" />
               <Picker.Item label = "Arequipa" value = "P8" />
               <Picker.Item label = "Neopoteria" value = "P9" />
            </Picker>
            
            <Text>Type: {this.state.plant_type}</Text>
            
            {/* <Text>สถานะต้นไม้</Text>
            <Switch onValueChange = {this.toggleSwitch1} value = {this.state.switch1Value}/>
            <Text style = {{fontSize: 30, color: 'red'}}>สถานะต้นไม้ คือ {this.state.switch1Value*1}</Text> */}

            <Mytextinput
              placeholder="Enter Status"
              onChangeText={plant_status => this.setState({ plant_status })}
              maxLength={225}
              style={{ padding:10 }}
            />

            <Mytextinput
              placeholder="Enter Time"
              onChangeText={time => this.setState({ time })}
              maxLength={225}
              style={{ padding:10 }}
            />

            <Mybutton
              title="Submit"
              customClick={this.register_user.bind(this)}
            />
            
          </KeyboardAvoidingView>
          
          </View>
          
          <View style={styles.pageStyle} key="2">
          

          </View>
          
        </ViewPagerAndroid>
        <Footer>
          <FooterTab style={{ backgroundColor: '#1e90ff' }}>
          <Button badge vertical onPress={() => this.props.navigation.navigate('ViewAll')}>
            <Badge><Text>2</Text></Badge>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('Update')}>
              <Icon name="build"  />
              <Text>Update</Text>
            </Button>
            <Button vertical active onPress={() => this.props.navigation.navigate('Register')} >
              <Icon active name="add" />
              <Text>Add</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('Delete')}>
              <Icon name="trash" />
              <Text>Delete</Text>
            </Button>
          </FooterTab>
        </Footer>
        </Container>
         
        </ScrollView>
      </View>
    );
  }
}
