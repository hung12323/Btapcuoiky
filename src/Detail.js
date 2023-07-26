
import {  View, TouchableOpacity, Image,StyleSheet, Text,ScrollView } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Swiper from 'react-native-swiper';

const Tab = createMaterialBottomTabNavigator();
const Detail =({navigation}) =>{
  return (
    <View style={{ flex: 1 }}>
       <Tab.Navigator initialRouteName='Home' >
       <Tab.Screen name="Home" component={Home}
           options={{tabBarIcon: () => 
          <Image
            source={require('../assets/categori/icon4.png')}
            style={{height:30,width:30}}resizeMode="stretch"
            />}}
            />
           <Tab.Screen name="Collection" component={Collections}
            options={{tabBarIcon: () => 
          <Image
            source={require('../assets/categori/icon5.png')}
            style={{height:30,width:30}}resizeMode="stretch"
            />}}
            />
           <Tab.Screen name="Saved" component={Saved} 
            options={{tabBarIcon: () => 
          <Image
            source={require('../assets/categori/icon6.png')}
            style={{height:30,width:30}}resizeMode="stretch"
            />}}

           />
           <Tab.Screen name="Search" component={Search} 
           options={{tabBarIcon: () => 
          <Image
            source={require('../assets/categori/icon7.png')}
            style={{height:30,width:30}}resizeMode="stretch"
            />}}

           />
    </Tab.Navigator>
    </View>
  )
}

function Home({navigation}) {
  return (
 
    
    <View>
    
    <ScrollView>
    <TouchableOpacity>
        <View style={styles.thananh}>
      <Image
        source={require("../assets/detail/1.png")}
      />
    </View>
    </TouchableOpacity>
    <View>
    <Text style={{fontSize:22,fontWeight:'bold',margin:10,marginLeft:30}}>One Mission Bay</Text>
    <Text style={{margin:5,marginLeft:20}}>The lush interior courtyard invites you to swim, dine or relax, while the interior amenities provide numerous options for exercise, entertainment or business.Prominent design, fabulous finishes & the ultimate open floor plan, this home features 3 bed, 2 bath + 2 powder rooms.</Text>
    <Text style={{fontSize:22,fontWeight:'bold',margin:10,marginLeft:30}}>Location</Text>
    </View>
   <View style={styles.thananh}>
   <TouchableOpacity onPress={() => navigation.navigate("Apartments")}> 
   <Image
        source={require("../assets/detail/2.png")}
      />
   </TouchableOpacity>
      
       <Text style={{fontSize:22,fontWeight:'bold',margin:10,marginLeft:30}}>Extra info</Text>
   </View>
   <View style={{flexDirection:'row',marginHorizontal:10,marginTop:10}}>
    <Text style={{marginLeft:50}}>Rent or Buy</Text>
    <Text style={{marginLeft:150}}>Rent </Text>
   </View>
   <View style={{flexDirection:'row',marginHorizontal:10,marginTop:15}}>
    <Text style={{marginLeft:50}}>Bedrooms</Text>
    <Text style={{marginLeft:157}}>3bd </Text>
   </View>
   <View style={{flexDirection:'row',marginHorizontal:10,marginTop:15}}>
    <Text style={{marginLeft:50}}>Close to Public Transportation</Text>
    <Text style={{marginLeft:33}}>No </Text>
   </View>
   <View style={{flexDirection:'row',marginHorizontal:10,marginTop:15}}>
    <Text style={{marginLeft:50}}>New Construction</Text>
    <Text style={{marginLeft:110}}>No</Text>
   </View>
   <View style={{flexDirection:'row',marginHorizontal:10,marginTop:15}}>
    <Text style={{marginLeft:50}}>Baths</Text>
    <Text style={{marginLeft:182}}>3ba</Text>
   </View>
  
  
   
        </ScrollView>
  
  </View>
  );
}

function Collections() {
  return (
    
  <Text>hhh</Text>
  );
}
const styles=StyleSheet.create({
    container:{
        margin:10
    },
    thananh:{
       marginHorizontal:10,
    
    },
  
});
function Saved() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Houses Tab 1</Text>
      </View>
    );
  }
  function Search() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Houses Tab 1</Text>
      </View>
    );
  }


export default Detail;