import React,{useEffect} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  StatusBar
} from 'react-native';



import {Dimensions} from 'react-native';
import LoginRegister from './container/screens/LoginRegister';
import Login from './container/screens/Login';
import Register from './container/screens/Register';
import Home from './container/screens/Home';
import Navigator from './container/Navigation/Navigator';



const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function App() {
  // useEffect(() => {
  //  SplashScreen.hide();

  // }, [])


  return (
    <>
    <StatusBar backgroundColor='#485ba7'/>
    <Navigator />
    </>
  );
}

const styles = StyleSheet.create({});
