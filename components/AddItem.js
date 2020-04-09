import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

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
        iconRight
        type="outline"
        titleStyle={styles.buttonText}
        icon={<Icon name="add" size={23} color="#03DAC5" />}
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
  buttonText: {
    color: '#03DAC5',
  },
});

export default AddItem;
