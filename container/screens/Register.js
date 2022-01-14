import React,{useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ScrollView,
  Dimensions
} from 'react-native';

import LoginImage from '../assets/Login.jpg';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


// const width = Dimensions.get('window').width;
// const height = width * 0.6;

const images=[{LoginImage},{LoginImage},{LoginImage},]



const Register = () => {

  const [active, setActive] = useState(0);

  const change = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== active) {
      setActive(slide);
    }
  };
  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View>
          <ScrollView
            horizontal
            onScroll={change}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={(width, height)}>
            {images.map((image, index) => (
              <Image
                key={index}
                source={LoginImage}
                style={{
                  width: width,
                  height: 400,
                  resizeMode: 'cover',
                  
              
                }}></Image>
            ))}
          </ScrollView>
          <View style={styles.pagination}>
            {images.map((i, k) => (
              <Text
                key={k}
                style={
                  k == active ? styles.pagingActiveText : styles.pagingText
                }>
                ⬤
              </Text>
            ))}
          </View>
        </View>
      <View style={{justifyContent: 'space-between', height:650,}}>
        <View style={styles.container}>
          <View >
          <View style={{marginLeft:15, }}>
            <Text style={styles.getstarted}>Let's get started!</Text>
         </View> 
          <TextInput 
            style={styles.input}
            placeholder="First Name"></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Last Name"></TextInput>
             <TextInput
            style={styles.input}
            placeholder="Mobile Number / Email Address"></TextInput>
          </View>

         <View style={{marginLeft:15}}>
            <Text style={styles.optional}>Optional*</Text>
         </View>
         <TextInput
            style={styles.input}
            placeholder="Address"></TextInput>
         <View style={{flexDirection:'row'}}>
            <View style={styles.dob}>
                <Text style={styles.doblabel}>Date of Birth</Text>
                {/* calender here */}
                <TextInput
            style={styles.input}
            ></TextInput>
            </View>
            <View style={styles.dob}>
                <Text style={styles.doblabel} >Gender</Text>
                <TextInput
            style={styles.input}
          ></TextInput>

            </View>



             
        </View>  
        <View style={{marginLeft:15, }}>
            <Text style={styles.refferal}>Refferal Code*</Text>
         </View> 
        <TextInput
            style={styles.inputhalf}
            placeholder="Enter Code" ></TextInput>
         
        <TextInput
            style={styles.input}
            placeholder="Password"></TextInput>
         <TextInput
            style={styles.input}
            placeholder="Repeat Password"></TextInput>    

         <Button  title="Continue"color='#485ba7' style={styles.button}></Button>

        </View>
        

        <View style={styles.container}>
          
         
         
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  screen: {
    width: width,
    height: height,
    flex:1,
  },
  container: {
   
    padding: 20,
    height: 350,
  },
  
  SliderImage: {
    width: width,
  },
  optional: {
   color:'red'
  },
  refferal:{
      color:'green',
  },
  getstarted:{
      color:'black',
      fontWeight:'600',
  },

  doblabel:{
      marginLeft:15,
      color:'black'
      

  },

  dob:{
      width:width/3

  },

  input: {
    height: 40,
    padding: 10,
    margin:10,
    borderWidth: 0.5,
    borderRadius:5,
  },

  inputhalf:{
    height: 40,
    padding: 10,
    margin:10,
    borderWidth: 0.5,
    borderRadius:5,
    width:width/2.4

  },

  button:{
      margin:20,
  },

  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 5,
    alignSelf: 'center',
  },
  pagingText: {
    fontSize: width / 30,
    color: '#888',
    margin: 4,
  },
  pagingActiveText: {
    fontSize: width / 30,
    color: '#fff',
    margin: 4,
  },


});
