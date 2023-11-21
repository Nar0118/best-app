import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleCopy = (text) => {
    // React Native doesn't have navigator.clipboard.writeText
    // You can use Clipboard module from 'react-native-clipboard'
    // Install it using: npm install react-native-clipboard
    // Import it: import Clipboard from 'react-native-clipboard';
    // Use it: Clipboard.setString(text);
    // Note: Ensure to link the library after installing: react-native link react-native-clipboard
    // For iOS, you might need to run pod install in the ios directory.
  };

  const onSubmit = async () => {
    // Implement your contact API logic here

    try {
      // Assume contact API is an async function that sends the data
      // const res = await contact(values);
      // Open a notification with the response message
      // openNotification({
      //   descriptions: "",
      //   messages: res?.message,
      // });
    } catch (err) {
      // Handle error
      // openNotification({
      //   descriptions: "Product error",
      //   messages: "Something went wrong",
      // });
      Alert.alert("Product error", "Something went wrong");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View>
          <Text>{"Header Contact"}</Text>
          <View>
            <TextInput
              placeholder='First name'
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
            />
            <TextInput
              placeholder='Last name'
              value={lastName}
              onChangeText={(text) => setLastName(text)}
            />
          </View>
          <TextInput
            placeholder='Email'
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            placeholder='Message'
            value={message}
            onChangeText={(text) => setMessage(text)}
            multiline
          />
          <Button title='Submit' onPress={onSubmit} />
        </View>
      </View>
    </View>
  );
}

export default Contact;
