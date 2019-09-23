/*Home Screen With buttons to navigate to diffrent options*/
import React from 'react';
import { View ,ScrollView,ActivityIndicator,Image,StyleSheet,AppRegistry,ImageBackground,Text} from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'WateringPlant.db' });
 
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    db.transaction(function(txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='vegetablePlot'",
        [],
        function(tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS vegetablePlot', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS vegetablePlot(plant_id INTEGER PRIMARY KEY AUTOINCREMENT, plant_name VARCHAR(255), plant_type VARCHAR(255), plant_status INTEGER, time INTEGER)',
              []
            );
          }
        },
        (error) => { alert(JSON.stringify(error)) }
      );
    });
  }
 
  render() {
    return (
      <ImageBackground source={require('./images/Wallpaper.jpg')} style={styles.inner}>
<View style={styles.inner}>
  <Image
    source={require('./images/Picture112.png')}
    style={{width: '40%', height: '40%', alignSelf: 'center'}}
  />
  <Text style={{color: 'white', alignSelf: 'center', fontSize: 25}}>WE LOVE THE TREE</Text>
        <ActivityIndicator size="large" color="#ff0000" />
      
      {/* <Mybutton
        title="Register"
        customClick={() => this.props.navigation.navigate('Register')}
      />
      <Mybutton
        title="Update"
        customClick={() => this.props.navigation.navigate('Update')}
      />
      <Mybutton
        title="View"
        customClick={() => this.props.navigation.navigate('View')}
      />
      <Mybutton
        title="View All"
        customClick={() => this.props.navigation.navigate('ViewAll')}
      />
      <Mybutton
        title="Delete"
        customClick={() => this.props.navigation.navigate('Delete')}
      /> */}
      <Mybutton
        title="Login"
        customClick={() => this.props.navigation.navigate('Login')}
      />
      
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