import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default Login = () => {
  return (
    <View style = {styles.container}>
      <Text>Login Screen Welcome</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
