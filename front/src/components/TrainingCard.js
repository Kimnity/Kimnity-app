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

import TrainingSubTotal from './TrainingSubTotal';

export default class TrainingCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      subTotal: []
    }
  }

  componentWillMount() {
    let total = 0;
    let subTotals = [];

    // const Trainings = [];
    this.props.post.trainings.map((training) => {
      let setTotal = 0;
      let subTotal = 0;
      training.sets.map((set) => {
        setTotal = set.weight * set.time;
        subTotal += setTotal
        total += setTotal;
        console.log(total, 6789)
      });
      subTotals.push(subTotal)
    });

    this.setState({
      total: total,
      subTotal: subTotals
    });
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
        {this.props.post.trainings.map((training, i) => {
          return(
            <View style={styles.trainingItem} key={i}>
              <Text>{training.name}</Text>
              <View style={styles.trainingSet}>
                {training.sets.map((set, i) => {
                  return (
                    // <Text>{this.state.subTotal}</Text>
                    <Text style={styles.trainingSetItem} key={i}>{set.weight}{set.unit} × {set.time}回</Text>
                  )
                })}
              </View>
              <Text>{this.state.subTotal[i]}</Text>
            </View>
          )
        })}
        <Text>合計：{this.state.total}</Text>
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
  },

  trainingItem: {

  },

  trainingSet: {
    flexDirection: 'row'
  },

  trainingSetItem: {
    marginRight: 20
  }
})