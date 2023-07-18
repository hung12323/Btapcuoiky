import React, { useState } from 'react';
import { View, TextInput, FlatList, Text,Image,StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const data = [
    
  { id: '1',title: 'One Mission Bay',title1:'14 days ago',title2:'San Francisco, CA',title3:'$2,950,000',image: require('../assets/Search/ảnh1.png'), },
  { id: '2',title: '1410 Steiner St',title1:'14 days ago',title2:'San Francisco, CA',title3:'$3,950,000',image: require('../assets/Search/ảnh2.png'), },
  { id: '3', title: '246 Sussex St',title1:'14 days ago',title2:'San Francisco, CA',title3:'$4,950,000',image: require('../assets/Search/ảnh3.png'), },
  { id: '4', title: '1206 Market St',title1:'14 days ago',title2:'San Francisco, CA',title3:'$5,950,000',image: require('../assets/Search/ảnh4.png'), },
  { id: '5', title: '463 Eureka St',title1:'14 days ago',title2:'San Francisco, CA',title3:'$6,950,000',image: require('../assets/Search/ảnh5.png'), },
  { id: '6', title: '206 Ocean Ave ',title1:'14 days ago',title2:'San Francisco, CA',title3:'$1,950,000',image: require('../assets/Search/ảnh6.png'), },
];

const Search = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (text) => {
    setSearchText(text);

    const newData = data.filter((item) => {
      const itemData = item.title.toLowerCase();
      const textData = text.toLowerCase();

      return itemData.indexOf(textData) > -1;
    });

    setFilteredData(newData);
  };

  const renderItem = ({ item }) => (
    <ScrollView>
   <View style={styles.anh1}>
       <TouchableOpacity>
        <Image source={item.image} style={styles.itemImage} />
        </TouchableOpacity>
        <TouchableOpacity>
        <View>
        <TouchableOpacity onPress={() => navigation.navigate("Detail1")}>
        <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
      <Text style={styles.text1}>{item.title1}</Text>
        <Text style={styles.text2}>{item.title2}</Text>
        </View>
        
        </TouchableOpacity>
        
        <Text style={styles.text3}>{item.title3}</Text>

    </View>
    </ScrollView>
 
  
    
  );

  return (
    <View >
      <TextInput 
      style={{borderWidth:1,margin:1,paddingHorizontal:10,borderRadius:10,padding:5,}}
     
        placeholder="Search"
        onChangeText={handleSearch}
        value={searchText}
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};
const styles=StyleSheet.create({
    itemImage:{
        width:100,
       
    },
    anh1:{
        flexDirection:'row',
        margin:10,
       
    },
    text:{
fontSize:20,
fontWeight:'bold',
marginLeft:7,
    },
    text1:{
marginTop:9,
marginLeft:7,
    },
    text2:{
      marginTop:9,
      marginLeft:7,
    },
    text3:{
marginLeft:50,
marginTop:70,
marginRight:0,
    },
})
export default Search;