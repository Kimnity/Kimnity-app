import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  AsyncStorage,
  Dimensions,
  ImageBackground,
  ScrollView
} from 'react-native';

import Colors from '../const/colors';


import header from '../images/header.jpg';
import Icon from '../images/icon.jpg';

export default class ProfileHero extends React.Component {
  render() {
    const dimensions = Dimensions.get('window');
    // const imageHeight = Math.round(dimensions.width * 10 / 16);
    const imageWidth = dimensions.width;
    return (
      <View style={styles.container}>
        <View style={styles.headerImage}>
          <Image source={header} style={{width: imageWidth, height: 240}} />
        </View>
        <View style={styles.userIconWrapper}>
          <View style={styles.userIcon}>
            <Image source={Icon} style={{width: 84, height: 84}} />
          </View>
        </View>
        <View style={styles.profileContainer}>
          <Text style={styles.profileName}>Mike Anderson</Text>
        </View>
        <View style={styles.followStatus}>
          <View style={styles.followItem}>
            <Text style={styles.followNum}>1000</Text><Text style={styles.followUnit}>フォロー</Text>
          </View>
          <View style={styles.followItem}>          
            <Text style={styles.followNum}>1000</Text><Text style={styles.followUnit}>フォロワー</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    // flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.white,
  },

  headerImage: {
    height: 240,
    overflow: 'hidden',
    marginBottom: -44
  },

  userIcon: {
    borderColor: Colors.white,
    borderWidth: 3,
    borderRadius: 100,
    overflow: 'hidden',
  },

  userIconWrapper: {
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: { height: 2, width: 0 },
    marginBottom: 14
  },

  profileContainer: {

  },

  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12
  },

  followStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 220,
  },

  followItem: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },

  followNum: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 4
  },

  followUnit: {
    fontSize: 10,
    marginBottom: 3
  }


})