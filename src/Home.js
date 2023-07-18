
import React from 'react';
import { View, TouchableOpacity, Image,StyleSheet, Text,ScrollView ,Button} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//import { Ionicons } from "@expo/vector-icons";
import Header from './Header'

const Home =({navigation})=>{
    return(
        
        <ScrollView >
            <Header />
            <View style={styles.container}>
                <Text style={styles.title}>Categories</Text>
                <View style={styles.category}>
                  
                    <View style ={styles.houses1}>
                <TouchableOpacity  onPress={() => navigation.navigate("Houses")}>
                      
                      <Image 
                         source={require('../assets/categori/89.png')}
                         style={styles.anhcategory}
                       />
                   <Text style={{fontWeight:'bold',fontSize:18,marginTop:9,marginLeft:10}}>Houses</Text>
                  </TouchableOpacity>
                       </View>
   
                    <View style ={styles.houses1}>
                     <TouchableOpacity  onPress={() => navigation.navigate("Apartments")}>
                     
                      <Image 
                            source={require('../assets/categori/87.png')}
                            style={styles.anhcategory}
                        />
                         <Text style={{fontWeight:'bold',fontSize:18,marginTop:9,marginLeft:10}}>Apartments</Text>
                      </TouchableOpacity>
                      
                    </View>

                    <View style ={styles.houses1}>
                    <TouchableOpacity  onPress={() => navigation.navigate("Detail2")}>

                        <Image 
                            source={require('../assets/categori/89.png')}
                         
                            style={styles.anhcategory1}
                        />
                           <Text style={{fontWeight:'bold',fontSize:18,marginTop:9,marginLeft:10}}>Condos</Text>
                    </TouchableOpacity>
                     
                    </View>
                </View>

                <Text style={styles.title}>Houses</Text>


            <ScrollView>

            
                <View style={{flexDirection:'row'}}>
                <View style={styles.sphouse}>
                   <View style={styles.sp}>
                   <TouchableOpacity  onPress={() => navigation.navigate("Detail")}>
                     
                        <Image style={styles.houses}
                            source={require('../assets/categori/4.png')}
                        />
                        <Text style={styles.misson1}>One Mission Bay</Text>
                        <Text style={styles.misson2}>San Francisco, CA</Text>
                     </TouchableOpacity>
                    </View> 
                </View>
                <View style={styles.sphouse}>
                   <View style={styles.sp}>
                   <TouchableOpacity  onPress={() => navigation.navigate("Detail1")}>
                    
                        <Image  style={styles.houses}
                            source={require('../assets/categori/5.png')}
                        />
                        
                        <Text style={styles.misson1}>1410 Stayner ST </Text>
                        <Text style={styles.misson2}>San Francisco, CA</Text>
                        
                     </TouchableOpacity>
                    </View> 
                </View>
                </View>
                <View style={{flexDirection:'row'}}>
                <View style={styles.sphouse}>
                   <View style={styles.sp}>
                   <TouchableOpacity  onPress={() => navigation.navigate("Detail2")}>
                     
                        <Image style={styles.houses}
                            source={require('../assets/categori/6.png')}
                        />
                        <Text style={styles.misson1}>246 Suses St</Text>
                        <Text style={styles.misson2}>San Francisco, CA</Text>
                     </TouchableOpacity>
                    </View> 
                </View>
                <View style={styles.sphouse}>
                   <View style={styles.sp}>
                   <TouchableOpacity  onPress={() => navigation.navigate("Detail3")}>
                    
                        <Image  style={styles.houses}
                            source={require('../assets/categori/7.png')}
                        />
                        
                        <Text style={styles.misson1}>1206 Maket ST </Text>
                        <Text style={styles.misson2}>San Francisco, CA</Text>
                     </TouchableOpacity>
                        
                    </View> 
                </View>
                
                </View>

                <TouchableOpacity onPress={() => navigation.navigate("Houses")} style={styles.btn}>
                        <Text style={{textAlign:'center', fontSize:20, color:'#20C065',marginTop:8}}>Show all(6) </Text>
                    </TouchableOpacity>
                
            </ScrollView>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        borderTopWidth:1,
        borderTopColor: 'black'
    },
    title:{
        fontSize:28,
        marginTop:30,
        marginBottom:5,

    },
    category:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:10,

    },
    // category1:{
    //     flexDirection:'row',
    //     justifyContent:'space-between',
    //     height:30
    // },
    house:{
        borderColor:'black',
        borderWidth:0.1,
        borderRadius:3,
        width: 120,
        height:100,
        marginBottom: 20,

    }, 
    anhcategory:{
        //width: 80,
        //height:30
    },
    houses:{
        height:160,
        width:180,
      
        marginHorizontal:10,
    },
    houses1:{
        width: 120,
        height:120,
        borderColor:'black',
        borderWidth:0.1,
        borderRadius:3,
       backgroundColor:'white',
    },

    btn:{
        borderColor:'#20C065',
        borderWidth:1.5,
        borderRadius:5,
        width:'90%',
        height:50,
        marginHorizontal:17,
        marginTop:26,
    },
    sp:{
        marginTop:20,
    },
    misson1:{
        marginLeft:40,
        fontWeight:600
    },
    misson2:{
        marginLeft:35,
    }
})
export default Home;