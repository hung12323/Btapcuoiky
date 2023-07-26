
import {  View, TouchableOpacity, Image,StyleSheet, Text,images, } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { ScrollView } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
const Tab = createMaterialBottomTabNavigator();


const Detail1 = (navigation) => {
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
        <View style={{with:100,with:100}}>
      <Image
        source={require("../assets/detail/4.png")}
      />
    </View>
    </TouchableOpacity>
    <View>
    <Text style={{fontSize:22,fontWeight:'bold',margin:10,marginLeft:30}}>1410 Steiner St</Text>
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
    <Text style={{marginLeft:33}}>3ba </Text>
   </View>
   <View style={{flexDirection:'row',marginHorizontal:10,marginTop:15}}>
    <Text style={{marginLeft:50}}>New Construction</Text>
    <Text style={{marginLeft:110}}>No</Text>
   </View>
   <View style={{flexDirection:'row',marginHorizontal:10,marginTop:15}}>
    <Text style={{marginLeft:50}}>Baths</Text>
    <Text style={{marginLeft:185}}>No</Text>
   </View>
   <View>
  <TouchableOpacity style={styles.but1}
        onPress={() => navigation.navigate("Bookroom")}
      >
        <Text style={styles.but2}>Đặt Phòng </Text>
        
      </TouchableOpacity>
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
    but1: {
      width: 210,
      borderRadius: 30,
      height: 50,
      margin: 30,
      justifyContent: "center",
      alignItems: 'center',
      backgroundColor: "#20C065",
      marginTop:50,
      color: "white",
      marginLeft:100
    },
    but2: {
      color: 'white',
      fontSize: 20,
  
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


export default Detail1;