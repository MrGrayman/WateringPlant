/*Screen to update the user*/
import React from 'react';
import { View, YellowBox, ScrollView, KeyboardAvoidingView, Alert, Text, TimePickerAndroid, Picker} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Badge } from 'native-base';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'WateringPlant.db' });
 
export default class UpdateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input_plant_id: '',
      plant_name: '',
      plant_type: '',
      plant_status: '',
      time: '',
    };
  }
  searchUser = () => {
    const {input_plant_id} =this.state;
    console.log(this.state.input_plant_id);
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM vegetablePlot where plant_id = ?',
        [input_plant_id],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len',len);
          if (len > 0) {
            this.setState({
            plant_type:results.rows.item(0).plant_type,
            });
            this.setState({
             plant_name:results.rows.item(0).plant_name,
            });
            this.setState({
             plant_status:results.rows.item(0).plant_status,
            });
            this.setState({
             time:results.rows.item(0).time,
            });
          }else{
            alert('No Plant found');
            this.setState({
              plant_name:'',
              plant_type:'',
              plant_status:'',
              time:'',
            });
          }
        }
      );
    });
  };
  updateUser = () => {
    var that=this;
    const { input_plant_id } = this.state;
    const { plant_name } = this.state;
    const { plant_type } = this.state;
    const { plant_status } = this.state;
    const { time} = this.state;
    if (plant_name){
      if (plant_type){
        if (plant_status){
          if (time){
          db.transaction((tx)=> {
            tx.executeSql(
              'UPDATE vegetablePlot set plant_name=?, plant_type=? , plant_status=?, time=? where plant_id=?',
              [plant_name, plant_type, plant_status, input_plant_id],
              (tx, results) => {
                console.log('Results',results.rowsAffected);
                if(results.rowsAffected>0){
                  Alert.alert( 'Success', 'Plant updated successfully',
                    [
                      {text: 'Ok', onPress: () => that.props.navigation.navigate('ViewAll')},
                    ],
                    { cancelable: false }
                  );
                }else{
                  alert('Updation Failed');
                }
              }
            );
          });
        }else{
          alert('Please fill Time');
          }
        }else{
          alert('Please fill Status');
        }
      }else{
        alert('Please fill Type');
      }
    }else{
      alert('Please fill Name');
    }
  };
 
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <ScrollView keyboardShouldPersistTaps="handled">
        <Container>
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between' }}>
            
            <Mytextinput
              placeholder="Enter Plant Id"
              style={{ padding:10 }}
              onChangeText={input_plant_id => this.setState({ input_plant_id })}
            />
            <Mybutton
              title="Search Plant"
              customClick={this.searchUser.bind(this)}
            />
            <Mytextinput
              placeholder="Enter Name"
              value={this.state.plant_name}
              style={{ padding:10 }}
              onChangeText={plant_name => this.setState({ plant_name })}
            />

            {/* <Picker selectedValue = {this.state.department} onValueChange = {plant_type => this.setState({ plant_type })}>
               <Picker.Item label = "พืชต้องการน้ำน้อย" value = "P1" />
               <Picker.Item label = "พืชต้องการน้ำปานกลาง" value = "P2" />
               <Picker.Item label = "พืชต้องการน้ำมาก" value = "P3" />
               
            </Picker>
            
            <Text>Type: {this.state.plant_type}</Text> */}
            
            <Mytextinput
              placeholder="Enter Type"
              value={''+ this.state.plant_type}
              onChangeText={plant_type => this.setState({ plant_type })}
              maxLength={255}
              style={{ padding:10 }}
              keyboardType="text"
            />
            <Mytextinput
              placeholder="Enter Status"
              value={''+this.state.plant_status}
              style={{ padding:10 }}
              onChangeText={plant_status => this.setState({ plant_status })}
            />
             <Mytextinput
              placeholder="Enter Time"
              value={''+ this.state.time}
              onChangeText={time => this.setState({ time })}
              maxLength={10}
              style={{ padding:10 }}
              keyboardType="numeric"
            />
            {/* <Button title="Open TimePickerAndroid"
             onPress={ async () => {
              const { action, hour, minute } = await TimePickerAndroid.open({ hour : 11, minute : 30, is24Hour : false });
              if (action === TimePickerAndroid.timeSetAction)                             
              { this.setState({ ihour : hour, iminute: minute}); }
              if (action === TimePickerAndroid.dismissedAction)
              { console.log("Dismissed"); }
             }}
            />
            <Text>Date {this.state.ihour} {this.state.iminute}</Text> */}
            <Mybutton
              title="Update"
              customClick={this.updateUser.bind(this)}
            />
            
          </KeyboardAvoidingView>
          <Content />
        <Footer>
          <FooterTab style={{ backgroundColor: '#1e90ff' }}>
          <Button badge vertical onPress={() => this.props.navigation.navigate('ViewAll')}>
            <Badge><Text>2</Text></Badge>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button vertical active onPress={() => this.props.navigation.navigate('Update')}>
              <Icon name="build" />
              <Text>Update</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('Register')}>
              <Icon name="add" />
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