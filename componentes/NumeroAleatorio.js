import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function NumeroAleatorio(props) {

    const{min, max} = props
    
    const delta = max - min

    const NumeroAleatorio = Math.floor(Math.random()* delta) + min

  return (
    <View>
      <Text>O numero aleatorio é {NumeroAleatorio}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
