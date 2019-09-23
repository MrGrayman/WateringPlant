import React from 'react';
import { View, YellowBox, ScrollView, KeyboardAvoidingView, Alert, Text, TimePickerAndroid, Picker, ViewPagerAndroid, DatePickerAndroid, Slider, Button, StyleSheet} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
import { Container } from 'native-base';
var db = openDatabase({ name: 'WateringPlant.db' });

export default class Config extends React.Component {
    constructor() {
        super();
        this.state = { iyear : 2020, imonth : 3, iday : 9}
        this.state = { ihour : 10, iminute : 30}

     }
  

    state = {price: ''}
        updatePrice = (price) => {
        this.setState({ price: price*100 })
    }
    state = {price1: ''}
    updatePrice1 = (price1) => {
    this.setState({ price1: price1*100 })
    }
    state = {price2: ''}
        updatePrice2 = (price2) => {
        this.setState({ price2: price2*100 })
    }
    state = {price3: ''}
        updatePrice3 = (price3) => {
        this.setState({ price3: price3*100 })
   }
   state = {price4: ''}
        updatePrice4 = (price4) => {
        this.setState({ price4: price4*100 })
   }
   state = {price5: ''}
        updatePrice5 = (price5) => {
        this.setState({ price5: price5*100 })
   }
   state = {price6: ''}
        updatePrice6 = (price6) => {
        this.setState({ price6: price6*100 })
   }
   state = {price7: ''}
        updatePrice7 = (price7) => {
        this.setState({ price7: price7*100 })
   }
    
    render() {
        return (
        <View style={{backgroundColor: 'white', flex: 1}}>
            {/* <ScrollView keyboardShouldPersistTaps="handled">
                <Container>
            <ViewPagerAndroid initialPage={ 0 }
            style={{ flex : 1, width : "100%", height : 100 }}>
            <View style={{ alignItems : "center", padding : 10 }}>
                <Text style={{ fontSize : 24 }}>Page{"\n"}Number{"\n"}1</Text>
                    <Text>Alert 1</Text>
                    
                    <Text>Air Moisture:</Text>
                    <Slider onValueChange = {this.updatePrice} />
                    <Text style = {{fontSize: 30, color: 'red'}}>{this.state.price}</Text>

                    <Text>Soil Moisture:</Text>
                    <Slider onValueChange = {this.updatePrice} />
                    <Text style = {{fontSize: 30, color: 'red'}}>{this.state.price}</Text>

                    <Text>Temperature:</Text>
                    <Slider onValueChange = {this.updatePrice} />
                    <Text style = {{fontSize: 30, color: 'red'}}>{this.state.price}</Text>

                    <Text>Light Intensity:</Text>
                    <Slider onValueChange = {this.updatePrice} />
                    <Text style = {{fontSize: 30, color: 'red'}}>{this.state.price}</Text>
            </View>



            
            <View style={{ alignItems : 'center', padding : 10 }}>
                <Text style={{ fontSize : 24 }}>Page{"\n"}Number{"\n"}2</Text>
                <Text>Alert 2</Text>
                    <Text>Air Moisture:</Text>
                    <Slider onValueChange = {this.updatePrice} />
                    <Text style = {{fontSize: 30, color: 'red'}}>{this.state.price}</Text>
                    <Text>Soil Moisture:</Text>
                    <Slider onValueChange = {this.updatePrice} />
                    <Text style = {{fontSize: 30, color: 'red'}}>{this.state.price}</Text>

                    <Text>Temperature:</Text>
                    <Slider onValueChange = {this.updatePrice} />
                    <Text style = {{fontSize: 30, color: 'red'}}>{this.state.price}</Text>

                    <Text>Light Intensity:</Text>
                    <Slider onValueChange = {this.updatePrice} />
                    <Text style = {{fontSize: 30, color: 'red'}}>{this.state.price}</Text>
            </View>





            <View style={{ alignItems : 'center', padding : 10 }}>
                <Text style={{ fontSize : 24 }}>Page{"\n"}Number{"\n"}3</Text>
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


            </View>
            </ViewPagerAndroid>

            </Container>
            </ScrollView> */}







            <ScrollView keyboardShouldPersistTaps="handled">
        <Container>
          <View style={{alignItems : "center", padding : 10, flex : 1, width : '100%', height : 100 }} key="1">
             <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between' }}>
                <Text>Alert 1</Text>
                    
                    <Text>Air Moisture:</Text>
                    <Slider onValueChange = {this.updatePrice} />
                    <Text style = {{fontSize: 30, color: 'red'}}>{this.state.price}</Text>

                    <Text>Soil Moisture:</Text>
                    <Slider onValueChange = {this.updatePrice1} />
                    <Text style = {{fontSize: 30, color: 'red'}}>{this.state.price1}</Text>

                    <Text>Temperature:</Text>
                    <Slider onValueChange = {this.updatePrice2} />
                    <Text style = {{fontSize: 30, color: 'red'}}>{this.state.price2}</Text>

                    <Text>Light Intensity:</Text>
                    <Slider onValueChange = {this.updatePrice3} />
                    <Text style = {{fontSize: 30, color: 'red'}}>{this.state.price3}</Text>
       
                    <Text>Alert 2</Text>
                    
                    <Text>Air Moisture:</Text>
                    <Slider onValueChange = {this.updatePrice4} />
                    <Text style = {{fontSize: 30, color: 'red'}}>{this.state.price4}</Text>

                    <Text>Soil Moisture:</Text>
                    <Slider onValueChange = {this.updatePrice5} />
                    <Text style = {{fontSize: 30, color: 'red'}}>{this.state.price5}</Text>

                    <Text>Temperature:</Text>
                    <Slider onValueChange = {this.updatePrice6} />
                    <Text style = {{fontSize: 30, color: 'red'}}>{this.state.price6}</Text>

                    <Text>Light Intensity:</Text>
                    <Slider onValueChange = {this.updatePrice7} />
                    <Text style = {{fontSize: 30, color: 'red'}}>{this.state.price7}</Text>    

            
                    <Mybutton
                        title="Next"
                        customClick={() => this.props.navigation.navigate('Config2')}
                        />

                    
          </KeyboardAvoidingView>
          
          </View>
          
        
        </Container>
         
        </ScrollView>
        </View>




        );
    }
}

const style = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })