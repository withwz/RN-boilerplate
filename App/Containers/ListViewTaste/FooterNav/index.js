import React from 'react'
import { Text, View } from 'react-native'
import { Helpers, Metrics } from 'App/Theme'
import Route from './route/route'

const TasteFooterNav = () => (
  <View style={[Helpers.fillCenter, Helpers.rowMain, Metrics.mediumHorizontalMargin]}>
    <Text>
      测试导航
    </Text>
  </View>
)

export default Route
// export default TasteFooterNav
