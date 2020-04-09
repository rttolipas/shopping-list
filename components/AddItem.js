import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const AddItem = ({propsAddItem}) => {
  const [text, setText] = useState('');

  const onChange = (textValue) => setText(textValue);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={onChange}
        placeholder="Add Item..."
      />
      <Button
        style={styles.button}
        color="#03DAC5"
        onPress={() => propsAddItem(text)}
        title="Add Item"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
  },
  textInput: {
    padding: 10,
  },
  button: {
    padding: 10,
  },
});

export default AddItem;
