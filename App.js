import * as React from 'react';
import { Text, View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from './src/Home'
import Collections  from './src/Collections';
import Header  from './src/Header';
import Saved from './src/Saved';
import Search from './src/Search';
import LandingScreen from './src/LandingScreen';
import Signup from './src/Signup';
import Signin from './src/Signin';
import Apartments from './src/Apartments';
import Houses from './src/Houses';
import Detail from './src/Detail';
import Detail1 from './src/Detail1';
import Detail2 from './src/Detail2';
import Detail3 from './src/Detail3';
import Profile from './src/Profile';
import Bookroom from './src/Bookroom';



const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StackScreen=() =>{
  return(
    <Tab.Navigator initialRouteName='Home' >
           <Tab.Screen name="Home" component={Home}
           options={{tabBarIcon: () => 
          <Image
            source={require('./assets/categori/icon4.png')}
            style={{height:30,width:30}}resizeMode="stretch"
            />}}
            />
           <Tab.Screen name="Collection" component={Collections}
            options={{tabBarIcon: () => 
          <Image
            source={require('./assets/categori/icon5.png')}
            style={{height:30,width:30}}resizeMode="stretch"
            />}}
            />
           <Tab.Screen name="Saved" component={Saved} 
            options={{tabBarIcon: () => 
          <Image
            source={require('./assets/categori/icon6.png')}
            style={{height:30,width:30}}resizeMode="stretch"
            />}}

           />
           <Tab.Screen name="Search" component={Search} 
           options={{tabBarIcon: () => 
          <Image
            source={require('./assets/categori/icon7.png')}
            style={{height:30,width:30}}resizeMode="stretch"
            />}}

           />
            <Tab.Screen name="Profile" component={Profile} 
           options={{tabBarIcon: () => 
          <Image
            source={require('./assets/categori/icon8.png')}
            style={{height:30,width:30,tintColor:'gray'}}resizeMode="stretch"
            />}}

           />
    </Tab.Navigator>
  );
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LandingScreen' >
        <Stack.Screen name="LandingScreen" component={LandingScreen}/>
        <Stack.Screen name="Signin" component={Signin}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Home" component={StackScreen}  />
        <Stack.Screen name="Collections" component={Collections} />
        <Stack.Screen name="Header" component={Header} />
        <Stack.Screen name="Saved" component={Saved} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Apartments" component={Apartments} />
        <Stack.Screen name="Houses" component={Houses} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Detail1" component={Detail1} />
        <Stack.Screen name="Detail2" component={Detail2} />
        <Stack.Screen name="Detail3" component={Detail3} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Bookroom" component={Bookroom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;