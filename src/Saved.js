import * as React from 'react';
import { View, TouchableOpacity, Image,StyleSheet, Text,ScrollView ,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


const Saved =({navigation})=>{
  return(
      
      <ScrollView >
          <View style={styles.container}>
              

          <View style={{  justifyContent: 'space-between', marginVertical:20}}>
           
           <Text style={{fontSize: 20, textAlign:'center'}}>Saved Items</Text>
          
       </View>

          <ScrollView>
              <View style={{flexDirection:'row'}}>
              <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
              <View style={styles.sphouse}>
                 <View style={styles.sp}>
                      <Image style={styles.houses}
                          source={require('../assets/categori/20.png')}
                      />
                      
                  </View> 
              </View>
              </TouchableOpacity>
           <TouchableOpacity onPress={() => navigation.navigate("Detail1")}>
           <View style={styles.sphouse}>
                 <View style={styles.sp}>
                      <Image  style={styles.houses}
                          source={require('../assets/categori/21.png')}
                      />
                      
                    
                      
                  </View> 
              </View>
           </TouchableOpacity>
              </View>
              <View style={{flexDirection:'row'}}>
              <TouchableOpacity onPress={() => navigation.navigate("Detail2")}>
              <View style={styles.sphouse}>
                 <View style={styles.sp}>
                      <Image style={styles.houses}
                          source={require('../assets/categori/22.png')}
                      />
                  </View> 
              </View>
              </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Detail3")}>
            <View style={styles.sphouse}>
                 <View style={styles.sp}>
                      <Image  style={styles.houses}
                          source={require('../assets/categori/23.png')}
                      />
                      
                      
                  </View> 
              </View>
            </TouchableOpacity>
            
              
              </View>
              <View style={{flexDirection:'row'}}>
              <TouchableOpacity>
              <View style={styles.sphouse}>
                 <View style={styles.sp}>
                      <Image style={styles.houses}
                          source={require('../assets/categori/26.png')}
                      />
                  </View> 
              </View>
              </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.sphouse}>
                 <View style={{marginLeft:-10}}>
                      <Image  style={styles.houses}
                          source={require('../assets/categori/27.png')}
                      />  
                  </View> 
              </View>
            </TouchableOpacity>   
              </View>            
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
      justifyContent:'space-between'
  },
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
    marginHorizontal:18,
    marginVertical:4
  }
,
  btn:{
      borderColor:'#20C065',
      borderWidth:1.5,
      borderRadius:5,
      width:'90%',
      height:40,
      marginHorizontal:17,
      marginTop:5,
  },
  
})
export default Saved;