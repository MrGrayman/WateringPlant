/*Screen to view all the user*/
import React from 'react';
import { FlatList, Text, View, ScrollView,Image } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Badge } from 'native-base';
import { openDatabase } from 'react-native-sqlite-storage';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
var db = openDatabase({ name: 'WateringPlant.db' });

 
export default class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [],
    };
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM vegetablePlot', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        this.setState({
          FlatListItems: temp,
        });
      });
    });
    
  }
  

  ListViewItemSeparator = () => {
    return (
      <View style={{ height: 0.2, width: '100%', backgroundColor: '#808080' }} />
    );
  };
  render() {
    return (
      <View>

        

        <ScrollView>
        <Container>
        <Image
          source={require('./images/CactusOn.jpg')}
          style={{width: '40%', height: '40%', alignSelf: 'center'}}
        />
        <View style={{ marginLeft: 35, marginRight: 35, marginTop: 10 }}>
          <Text>Air Moisture: {Math.floor(Math.random() * 100) + 1 }%</Text>
          <Text>Soil Moisture: {Math.floor(Math.random() * 100) + 1 }%</Text>
          <Text>Temperature: {Math.floor(Math.random() * 36) + 1 } ํc</Text>
          <Text>Light Intensity: {Math.floor(Math.random() * 100) + 1 }%</Text>
        </View>
        <Mybutton
              title="WATERING"
              customClick={() => this.props.navigation.navigate('')}
            />
            <Mybutton
              title="CONFIG"
              customClick={() => this.props.navigation.navigate('Config')}
            />
            <Mybutton
              title="REFRESH"
              
            />
        {/* <FlatList
          data={this.state.FlatListItems}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View key={item.plant_id} style={{ backgroundColor: 'white', padding: 20 }}>
              <Text>Id: {item.plant_id}</Text>
              <Text>Name: {item.plant_name}</Text>
              <Text>Type: {item.plant_type}</Text>
              <Text>Status: {item.plant_status}</Text>
              <Text>Time: {item.time}</Text>
            </View>
          )}
        /> */}
        {/* <Mybutton
          title="Update"
          customClick={() => this.props.navigation.navigate('Update')}
        />
        <Mybutton
          title="Add Trees"
          customClick={() => this.props.navigation.navigate('Register')}
        />
        <Mybutton
          title="Delete"
          customClick={() => this.props.navigation.navigate('Delete')}
        /> */}
        
        {/* <Footer>
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
            <Button vertical onPress={() => this.props.navigation.navigate('Delete')}>
              <Icon name="trash" />
              <Text>Delete</Text>
            </Button>
          </FooterTab>
        </Footer> */}
        </Container>
        </ScrollView>
        
        
        
      </View>
    );
  }
}