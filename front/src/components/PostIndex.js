import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  AsyncStorage,
  ScrollView
} from 'react-native'

import TrainingCard from './TrainingCard';

let myPosts = [
  {
    createdAt: '2018-07-21',
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    trainings: [
      {
        type: 'weight',
        name: 'サイドチェスト',
        sets: [
          {
            weight: 7.8,
            unit: 'kg',
            time: 30
          },
          {
            weight: 4.2,
            unit: 'kg',
            time: 10
          },
          {
            weight: 10.8,
            unit: 'kg',
            time: 40
          },
        ]
      },
      {
        type: 'weight',
        name: 'サイドチェスト',
        sets: [
          {
            weight: 7.8,
            unit: 'kg',
            time: 30
          },
          {
            weight: 4.2,
            unit: 'kg',
            time: 10
          },
          {
            weight: 10.8,
            unit: 'kg',
            time: 40
          },
        ]
      }
    ]
  },
  {
    createdAt: '2018-07-21',
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    trainings: [
      {
        type: 'weight',
        name: 'サイドチェスト',
        sets: [
          {
            weight: 7.8,
            unit: 'kg',
            time: 30
          },
          {
            weight: 4.2,
            unit: 'kg',
            time: 10
          },
          {
            weight: 10.8,
            unit: 'kg',
            time: 40
          },
        ]
      },
      {
        type: 'weight',
        name: 'サイドチェスト',
        sets: [
          {
            weight: 7.8,
            unit: 'kg',
            time: 30
          },
          {
            weight: 4.2,
            unit: 'kg',
            time: 10
          },
          {
            weight: 10.8,
            unit: 'kg',
            time: 40
          },
        ]
      }
    ]
  },
  {
    createdAt: '2018-07-21',
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    trainings: [
      {
        type: 'weight',
        name: 'サイドチェスト',
        sets: [
          {
            weight: 7.8,
            unit: 'kg',
            time: 30
          },
          {
            weight: 4.2,
            unit: 'kg',
            time: 10
          },
          {
            weight: 10.8,
            unit: 'kg',
            time: 40
          },
        ]
      },
      {
        type: 'weight',
        name: 'サイドチェスト',
        sets: [
          {
            weight: 7.8,
            unit: 'kg',
            time: 30
          },
          {
            weight: 4.2,
            unit: 'kg',
            time: 10
          },
          {
            weight: 10.8,
            unit: 'kg',
            time: 40
          },
        ]
      }
    ]
  },
  {
    createdAt: '2018-07-21',
    text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    trainings: [
      {
        type: 'weight',
        name: 'サイドチェスト',
        sets: [
          {
            weight: 7.8,
            unit: 'kg',
            time: 30
          },
          {
            weight: 4.2,
            unit: 'kg',
            time: 10
          },
          {
            weight: 10.8,
            unit: 'kg',
            time: 40
          },
        ]
      },
      {
        type: 'weight',
        name: 'サイドチェスト',
        sets: [
          {
            weight: 7.8,
            unit: 'kg',
            time: 30
          },
          {
            weight: 4.2,
            unit: 'kg',
            time: 10
          },
          {
            weight: 10.8,
            unit: 'kg',
            time: 40
          },
        ]
      }
    ]
  }
]

export default class Home extends React.Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        {myPosts.map((post, key) => {
          return <TrainingCard post={post} key={key} />
        })}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 6,
    paddingLeft: 6,
    paddingTop: 6
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  }
})