
import React from 'react';
import { View, TouchableOpacity, Image,StyleSheet, Text,ScrollView ,Button} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';



const Profile =({navigation})=>{
    return(
         
        <View>
           <View style={{  justifyContent: 'space-between',}}>
           <Text style={{fontSize: 25, textAlign:'center',marginVertical:20}}>Profile </Text>
           </View>
           <View style={{alignItems:'center',justifyContent:'center'}}>
            <Image
                            source={require('../assets/profile/1.png')}
                        />
            <Text style={{fontSize:25,fontWeight:'bold',marginTop:10}}>Bruno</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <View style={{flexDirection:'row',marginHorizontal:10,marginTop:50,}}>
            <Image style={{marginLeft:20}}
                            source={require('../assets/categori/icon8.png')}
                        />
            <Text style={{marginLeft:30,fontSize:18,fontWeight:'bold'}}>Account Details</Text>
            </View>
            </TouchableOpacity>
           <TouchableOpacity onPress={() => navigation.navigate("Collections")}>
           <View style={{flexDirection:'row',marginHorizontal:10,marginTop:40,}}>
            <Image style={{marginLeft:20,tintColor:'blue'}}
                            source={require('../assets/categori/icon5.png')}
                        />
            <Text style={{marginLeft:30,fontSize:18,fontWeight:'bold'}}>Collection</Text>
            </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => navigation.navigate("Saved")}>
           <View style={{flexDirection:'row',marginHorizontal:10,marginTop:40,}}>
            <Image style={{marginLeft:20}}
                            source={require('../assets/profile/2.png')}
                        />
            <Text style={{marginLeft:30,fontSize:18,fontWeight:'bold'}}>Saved</Text>
            </View>
           </TouchableOpacity>
           <TouchableOpacity>
           <View style={{flexDirection:'row',marginHorizontal:10,marginTop:40,}}>
            <Image style={{marginLeft:20}}
                           source={require('../assets/profile/3.png')}
                        />
            <Text style={{marginLeft:30,fontSize:18,fontWeight:'bold'}}>Contact Us</Text>
            </View>
           </TouchableOpacity>
          
            
                <View style={{marginTop:15}}>
                <TouchableOpacity style={styles.but1}
        onPress={() => navigation.navigate("Signin")}
      >
        <Text style={styles.but2}>Log Out</Text>
        
      </TouchableOpacity>
                </View>
            
        </View>
       
           
    )
}
const styles = StyleSheet.create({
    container:{
        borderTopWidth:1,
        borderTopColor: 'black'
    },
   img:{

    


   },
   but1: {
    width: 330,
    borderRadius: 10,
    height: 50,
    margin: 30,
    justifyContent: "center",
    backgroundColor: "#20C065",
    color: "white",
    textAlign:'center',
  },
  but2: {
    color: 'white',
    fontSize: 20,
    textAlign:'center',
  },
    
})
export default Profile;