import React,{useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView
} from 'react-native';

import LoginImage from '../assets/Login.jpg';
import {Dimensions} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const images=[{LoginImage},{LoginImage},{LoginImage},]


const LoginRegister = ({navigation}) => {
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
      <View style={styles.container}>
        <Button title="Login" color="#485ba7" onPress={()=>
        navigation.navigate('Login',{name:'Login'})}></Button>
        <Button title="Guest Login" color="#485ba7"onPress={()=>
        navigation.navigate('Register',{name:'Register'})}></Button>
       
      </View>
    </View>
  );
};

export default LoginRegister;

const styles = StyleSheet.create({
  screen: {
    width: width,
    height: height,
  },
  container: {
    justifyContent: 'space-evenly',
    padding: 20,
    height: 200,
  },
  SliderImage: {
    width: width,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 15,
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
