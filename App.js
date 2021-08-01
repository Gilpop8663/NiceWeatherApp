import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = "0db106f17f347fd5d0c8aa5eb69deb43";

export default class extends React.Component{
  state = {
    isLoading : true
  };
  getWeather = async (latitude,longitude) =>{
    const {data:{main:{temp},weather}} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&lang=kr&units=metric`)
    this.setState({isLoading : false , temp,condition: weather[0].main})
  }
  getLocation = async() =>{
    try {
      await Location.getForegroundPermissionsAsync();
      const {coords : {latitude,longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude,longitude)
    }catch (error) {
      Alert.alert("Can't find you." , "So sad");
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const { isLoading , temp,condition} = this.state;
    return isLoading ? <Loading/> : <Weather temp={Math.floor(temp)} condition={condition}/>;
  }
} 

