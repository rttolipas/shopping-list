import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

function ListItem({item, deleteListItem}) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>{item.name}</Text>
        <Icon
          name="close"
          size={23}
          color="#F44336"
          onPress={() => deleteListItem(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#f2f2f2',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  // since our app layout is already a flex box,
  // we could set the view here as flex row and space between for the icon
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default ListItem;
