import React from 'react';
import { View, Image } from 'react-native';
//import Image from 'react-native-remote-svg'
import Onboarding from 'react-native-onboarding-swiper';
import AsyncStorage from '@react-native-community/async-storage';

const Onboard = ({ navigation }) => {
  console.log("in")
  //storeData = async () => {
    try {
      //await 
      AsyncStorage.setItem('@onboard_done', 'yes')
      console.log("Save Ok")
    } catch (e) {
      // saving error
      console.log("Error saving")
    }
  //}
  return (
    <Onboarding
      onSkip={() => navigation.navigate("App")}  // 
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/onboard/betterplace.svg')} />,
          title: 'Onboarding 1',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#000',
          image: <Image source={require('../assets/onboard/betterplace.svg')} />,
          title: 'Onboarding 2',
          subtitle: 'Done with React Native Onboarding Swiper',
        }
        ]}
  />
  );
};

export default Onboard;
