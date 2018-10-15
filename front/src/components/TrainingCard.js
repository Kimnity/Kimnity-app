import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  AsyncStorage,
  ScrollView,
  Image
} from 'react-native'

import icon from '../images/icon.jpg';
import Colors from '../const/colors';

export default class TrainingCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      total: 0
    }
  }

  render() {

    return (
      <View style={styles.cardContainer}>
        <View style={styles.postInfo}>
          <Image source={icon} style={styles.cardIcon} />
          <Text style={styles.userName}>Mike Anderson</Text>
          <Text style={styles.trainingDate}>{this.props.post.createdAt}</Text>
        </View>
        <Text style={styles.content}>{this.props.post.text}</Text>
        {this.props.post.trainings.map((training) => {
          let subTotal = 0;
          return(
            <View>
              <Text>{training.name}</Text>
              <View>
                {training.sets.map((set) => {
                  let setTotal = 0;
                  setTotal = set.weight * set.time
                  subTotal += setTotal;
                  return (
                    <Text>{set.weight}{set.unit} × {set.time}</Text>
                  )
                })}
              </View>
              <Text>{subTotal}</Text>
            </View>
          )
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.white,
    // height: 100,
    shadowOpacity: 0.08,
    shadowRadius: 2,
    shadowColor: 'black',
    shadowOffset: { height: 2, width: 0 },
    marginBottom: 6,
    padding: 8
  },

  cardIcon: {
    borderRadius: 27,
    height: 50,
    marginRight: 12,
    width: 50
  },

  postInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12
  },
  
  userName: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 20
  },

  trainingDate: {
    color: Colors.black,
    opacity: .7
  },

  content: {
    color: Colors.black,
    fontSize: 14,
    lineHeight: 18
  }
})