
import {  View, TouchableOpacity, Image,StyleSheet, Text  } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import Saved from './src/Saved';
const Tab = createMaterialBottomTabNavigator();

const Houses = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
       <Tab.Navigator initialRouteName='Collection' >
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

function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Houses Tab 1</Text>
    </View>
  );
}

function Collections({navigation}) {
  return (
    
    <View style={StyleSheet.container}>
    <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
    <View style={styles.thananh}>
        <Image
          source={require("../assets/categori/30.png")}
        />
      </View>
    </TouchableOpacity>
     <TouchableOpacity onPress={() => navigation.navigate("Detail1")}>
     <View style={styles.thananh}>
        <Image
          source={require("../assets/categori/31.png")}
        />
        
      </View>
     </TouchableOpacity>
     <TouchableOpacity onPress={() => navigation.navigate("Detail2")}>
     <View style={styles.thananh}>
        <Image
          source={require("../assets/categori/32.png")}
        />
        
      </View>
     </TouchableOpacity>
     <TouchableOpacity onPress={() => navigation.navigate("Detail3")}>
     <View style={styles.thananh}>
        <Image
          source={require("../assets/categori/33.png")}
        />
        
      </View>
     </TouchableOpacity>
     <TouchableOpacity>
     <View style={styles.thananh}>
        <Image
          source={require("../assets/categori/34.png")}
        />
        
      </View>
     </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.thananh}>
        <Image
          source={require("../assets/categori/35.png")}
        />
        
      </View>
      </TouchableOpacity>
      
    </View>
  );
};
const styles=StyleSheet.create({
    container:{
        margin:10
    },
    thananh:{
       marginVertical:10,
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


export default Houses;