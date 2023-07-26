import React, { Component } from "react";
import { Button, View, Text, StyleSheet, TextInput, TouchableOpacity,Alert} from "react-native";
export default function Bookroom({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.title1}>
       
      </View>

        <View>
        <Text style={{fontWeight:'bold',fontSize:20,marginTop:100}}>
        Họ Tên*
        </Text>
            <TextInput style={styles.input1}
                placeholder="Họ tên"
                // value={email}
                // onChangeText={setEmail}
            />
             <Text style={{fontWeight:'bold',fontSize:20}}>
        Số Di Động*
        </Text>
            <TextInput style={styles.input1}
                placeholder="Số di động"
                // value={email}
                // onChangeText={setEmail}
            />
             <Text style={{fontWeight:'bold',fontSize:20}}>
        Email*
        </Text>
            <TextInput style={styles.input1}
                placeholder="Email"
                // value={email}
                // onChangeText={setEmail}
            />
             <Text style={{fontWeight:'bold',fontSize:20}}>
        Ghi chú:
        </Text>
            <TextInput style={styles.input2}
                placeholder=""
                // value={email}
                // onChangeText={setEmail}
            />
        </View>

        <View>
        <TouchableOpacity
            style={styles.but1}
            onPress={() =>
              Alert.alert('Chúc mừng bạn', 'Đặt Phòng Thành Công', [
                {
                  text: 'OK',
                  onPress: () => navigation.navigate('Houses'),
                  style: 'default',
                },
              ])
            }>
        <Text style={styles.but2}>Đặt Phòng</Text>
      
      </TouchableOpacity>
    </View>
    </View>
  );
}
const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white',
      },
      title: {
        color: '#20C065',
        fontSize: 24,
        marginBottom:100,
        paddingRight:180,
      },
      title1: {
        marginTop:10,
      },
      input1: {
        height: 40,
        width:370,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom:20
      },
      input2: {
        height: 80,
        width:370,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
      },

      but1: {
        width: 210,
        borderRadius: 30,
        height: 50,
        margin: 30,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#20C065",
        marginBottom: 130,
        color: "white"
      },
      but2: {
        color: 'white',
        fontSize: 20,
    
      },

});