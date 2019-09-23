/*Screen to view single user*/
import React from 'react';
import { Text, View, Button } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'WateringPlant.db' });
 
export default class ViewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input_plant_id: '',
      plantData: '',
    };
  }
  searchPlant = () => {
    const { input_plant_id } = this.state;
    console.log(this.state.input_plant_id);
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM vegetablePlot where plant_id = ?',
        [input_plant_id],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          if (len > 0) {
            this.setState({
              userPlant: results.rows.item(0),
            });
          } else {
            alert('No user found');
            this.setState({
              userPlant: '',
            });
          }
        }
      );
    });
  };
  render() {
    return (
      <View>
        <Mytextinput
          placeholder="Enter User Id"
          onChangeText={input_plant_id => this.setState({ input_plant_id })}
          style={{ padding:10 }}
        />
        <Mybutton
          title="Search Plant"
          customClick={this.searchPlant.bind(this)}
        />
        <View style={{ marginLeft: 35, marginRight: 35, marginTop: 10 }}>
          <Text>Plant Id: {this.state.userPlant.plant_id}</Text>
          <Text>Plant Name: {this.state.userPlant.plant_name}</Text>
          <Text>Plant Type: {this.state.userPlant.plant_type}</Text>
          <Text>Plant Status: {this.state.userPlant.plant_status}</Text>
          <Text>Plant Time: {this.state.userPlant.time}</Text>
        </View>
      </View>
    );
  }
}