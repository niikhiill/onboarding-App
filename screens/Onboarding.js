import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import Onboard from 'react-native-onboarding-swiper';

const Done = ({...props}) => <Button title="Done" color="#000" {...props} />;

export default Onboarding = ({navigation}) => {
  return (
    <Onboard
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.replace('Login')}
      DoneButtonComponent={Done}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: <Image source={require('../assets/onboarding-img1.png')} />,
          title: 'Onboarding 1',
          subtitle: 'This is 1st onboarding screen for movie app',
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../assets/onboarding-img2.png')} />,
          title: 'Onboarding 2',
          subtitle: 'This is 2nd onboarding screen for movie app',
        },
        {
          backgroundColor: '#e9bcbe',
          image: <Image source={require('../assets/onboarding-img3.png')} />,
          title: 'Onboarding 3',
          subtitle: 'This is 3rd onboarding screen for movie app',
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
