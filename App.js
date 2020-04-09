import React, {useState} from 'react';
import {FlatList, View, StyleSheet, Alert} from 'react-native';

import {nanoid} from 'nanoid/non-secure';

import Header from './components/Header';
import AddItem from './components/AddItem';
import ListItem from './components/ListItem';

const App = () => {
  // useState must be inside the function
  const [items, setItems] = useState([
    {id: nanoid(), name: 'Social'},
    {id: nanoid(), name: 'Chart'},
    {id: nanoid(), name: 'Watchlist'},
  ]);

  const deleteItem = (id) => {
    setItems((previosItem) => {
      return previosItem.filter((item) => item.id !== id);
    });
  };

  const addItem = (name) => {
    if (!name) {
      Alert.alert('Error', 'Please enter an item first.', {
        text: 'OK',
      });
    } else {
      setItems((previosItem) => {
        return [{id: nanoid(), name}, ...previosItem];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem propsAddItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteListItem={deleteItem} />
        )}
      />
    </View>
  );
};

// declare style here
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});

export default App;
