import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {LOGO} from '../images/';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image style={styles.headerLogo} source={LOGO} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderBottomWidth: 1,
    borderBottomColor: '#03DAC5',
  },
  headerLogo: {
    width: 120,
    height: 50,
  },
});

export default Header;
