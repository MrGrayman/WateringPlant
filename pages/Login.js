import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert, StyleSheet, Image, ImageBackground,Text } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'WateringPlant.db' });
 
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: 'gun',
      user_password: '1234'
    };
  }
 
  login_user = () => {
    var that = this;
    const { user_name } = this.state;
    const { user_password } = this.state;
    if(user_name != null && user_password != null){
      if(user_name != user_name || user_password != user_password){
        alert('It wrong!!!. Please fill Username and Password agian');
      }else{
        this.props.navigation.navigate('ViewAll')
      } 
    }
    alert('Not have this account');
  };
 
  render() {
    return (
      <ImageBackground source={require('./images/Wallpaper1.jpg')} style={styles.inner}>
      <View style={styles.inner}>
        <ScrollView keyboardShouldPersistTaps="handled">
          {/* <Image
            source={require('./images/Picture112.png')}
            style={{width: '40%', height: '40%', alignSelf: 'center'}}
          /> */}
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between' }}>
            <Mytextinput
              placeholder="Username"
              onChangeText={user_name => this.setState({ user_name })}
              style={{ padding:10 }}
            />
            <Mytextinput
              placeholder="Password"
              onChangeText={user_password => this.setState({ user_password })}
              maxLength={30}
              keyboardType="numeric"
              style={{ padding:10 }}
            />
           
            <Mybutton
              title="Login"
              customClick={() => this.props.navigation.navigate('ViewAll')}
            />
            
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner:{
    width: '100%',
    height: '100%',
  }
 
});