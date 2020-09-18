import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Helpers, Metrics } from 'App/Theme'
import NavigationService from 'App/Services/NavigationService'

const ListViewTasteScreen = () => (
  <View style={[Helpers.fillCenter, Helpers.rowMain, Metrics.mediumHorizontalMargin]}>
    <FlatList
      data={[
        {
          key: '尝试 NavigationActions',
          route: 'TasteNavigationActionsScreen',
        },
        {
          key: '尝试样式',
          route: 'TasteStylesScreen',
        },
        { key: 'Dominic' },
        { key: 'Jackson' },
        { key: 'James' },
        { key: 'Joel' },
        { key: 'John' },
        { key: 'Jillian' },
        { key: 'Jimmy' },
        { key: 'Julie1' },
        { key: 'Julie2' },
        { key: 'Julie3' },
        { key: 'Julie4' },
        { key: 'Julie5' },
        { key: 'Julie6' },
        { key: 'Julie7' },
        { key: 'Julie8' },
        { key: 'Julie9' },
        { key: 'Julie0' },

      ]}
      renderItem={({ item }) => <Text
        onPress={() => {
          NavigationService.navigate(item.route)
        }}
        style={styles.item}>{item.key}</Text>}
      style={styles.list}
    />
  </View>
)

export default ListViewTasteScreen

const styles = StyleSheet.create({
  list: {
    width: 1000
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    margin: 10,

    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 20
  },
});
