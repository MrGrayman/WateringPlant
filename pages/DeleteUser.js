/*Screen to delete the user*/
import React from 'react';
import { Text, View, Alert } from 'react-native';
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
      plantData: '',
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
            console.log(results.rows.item(0).plant_type);
            this.setState({
              plant_id:results.rows.item(0).plant_id,
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
              plant_id:'',
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

  deleteUser = () => {
    var that = this;
    const { input_plant_id } = this.state;
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM  vegetablePlot where plant_id=?',
        [input_plant_id],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'User deleted successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => that.props.navigation.navigate('ViewAll'),
                },
              ],
              { cancelable: false }
            );
          } else {
            alert('Please insert a valid Plant Id');
          }
        }
      );
    });
  };
 
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Container>
        <Mytextinput
              placeholder="Enter Plant Id"
              style={{ padding:10 }}
              onChangeText={input_plant_id => this.setState({ input_plant_id })}
            />
          <Mybutton
          title="Search Plant"
          customClick={this.searchUser.bind(this)}
        />
        <View style={{ marginLeft: 35, marginRight: 35, marginTop: 10 }}>
          <Text>Plant Id: {this.state.plant_id}</Text>
          <Text>Plant Name: {this.state.plant_name}</Text>
          <Text>Plant Type: {this.state.plant_type}</Text>
          <Text>Plant Status: {this.state.plant_status}</Text>
          <Text>Plant Time: {this.state.time}</Text>
        </View>
        <Mybutton
          title="Delete Plant"
          customClick={this.deleteUser.bind(this)}
        />
        <Content />
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
            <Button vertical onPress={() => this.props.navigation.navigate('Register')} >
              <Icon active name="add" />
              <Text>Add</Text>
            </Button>
            <Button vertical active onPress={() => this.props.navigation.navigate('Delete')}>
              <Icon name="trash" />
              <Text>Delete</Text>
            </Button>
          </FooterTab>
        </Footer>
        </Container>
      </View>
    );
  }
}