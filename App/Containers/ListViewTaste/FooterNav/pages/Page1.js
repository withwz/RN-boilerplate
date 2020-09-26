import React from 'react'
import { View, Text } from 'react-native';
import { Helpers, Metrics } from 'App/Theme'

const Page1 = () => (
  <View style={[Helpers.fillCenter, Helpers.rowMain, Metrics.mediumHorizontalMargin]}>
    <Text> i'm page1</Text>
  </View>
)

export default Page1


