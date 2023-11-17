import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../../../Colors';

const AddCartBtn = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Add to cart</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    backgroundColor: 'transparent', // unset is not directly supported, using transparent instead
    color: Colors.black,
    borderWidth: 1,
    borderColor: Colors.black,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: Colors.black,
    textAlign: 'center'
  },
});

export default AddCartBtn;
