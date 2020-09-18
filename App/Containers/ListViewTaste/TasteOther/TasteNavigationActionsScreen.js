import React from 'react'
import { Text, View, Button } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { Helpers, Metrics } from 'App/Theme'

/**
 * This is an example of a container component with a deep link.
 */
const TasteNavigationActionsScreen = () => (
  <View style={[Helpers.fillCenter, Helpers.rowMain, Metrics.mediumHorizontalMargin]}>
    <Button
      onPress={() => {
        console.log('back')
        NavigationActions.back({
          key: null,
        })
      }}
      title="Learn More"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />

    <Text>
      测试导航
    </Text>
  </View>
)

export default TasteNavigationActionsScreen
