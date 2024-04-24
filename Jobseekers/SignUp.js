import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// SignUpButton component
const SignUpButton = ({ icon, text }) => (
  <TouchableOpacity style={styles.buttonContainer}>
    <Image source={{ uri: icon }} style={styles.buttonIcon} />
    <Text>{text}</Text>
  </TouchableOpacity>
);

// FormInput component
const FormInput = ({ placeholder, onChangeText }) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#999"
      onChangeText={onChangeText} // Pass onChangeText prop to handle text changes
    />
  </View>
);

// MyComponent
const MyComponent = () => {
  const navigation = useNavigation();

  const [isChecked, setIsChecked] = useState(false); // State for the checkbox
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle sign up button press
  const handleSignUp = () => {
    // You can access collected data in firstName, lastName, email, and password variables
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
    // Perform sign up logic here

    // Navigate to VerifyEmail screen
    navigation.navigate('VerifyEmail');
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.formContainer}>
            <Text style={styles.title}>Create a new account</Text>
            <SignUpButton
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/dc5261e33bdee74cda06397e01a2033a956e661a701aab68af14e75f301b54a5?apiKey=7b9918e68d9b487793009b3aea5b1a32&"
              text="Sign up with Google"
            />
            <SignUpButton
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/44c39c6507947c98c1b395fecfccacfdba1edd07847eab25a4f629858fa22afa?apiKey=7b9918e68d9b487793009b3aea5b1a32&"
              text="Sign up with LinkedIn"
            />
            <View style={styles.divider}>
              <Text>or</Text>
            </View>
            <FormInput placeholder="First name" onChangeText={setFirstName} />
            <FormInput placeholder="Last name" onChangeText={setLastName} />
            <FormInput placeholder="Email" onChangeText={setEmail} />
            <FormInput placeholder="Password" onChangeText={setPassword} />
            <View style={styles.checkboxContainer}>
              <TouchableOpacity style={styles.checkbox} onPress={() => setIsChecked(!isChecked)}> {/* Toggle the state */}
                {isChecked ? (
                  <Image source={require('../assets/checked.jpg')} style={styles.checkedIcon} />
                ) : (
                  <Image source={require('../assets/unchecked.jpg')} style={styles.checkedIcon} />
                )}
              </TouchableOpacity>
              <Text style={{ color: 'black', fontSize: 14, marginLeft: 10 }}>I agree to the Terms of Service & Privacy Policy</Text>
            </View>
            <TouchableOpacity style={styles.submitButton} onPress={handleSignUp}>
              <Text style={styles.submitButtonText}>Sign up</Text>
            </TouchableOpacity>
          </View>
          <Image source={require('../assets/createaccount.png')} style={styles.image} resizeMode="cover" />
        </View>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: 'white', 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20,
  },
  container: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1, 
  },
  formContainer: {
    backgroundColor: '#fffff',
    height: 580,
    borderRadius: 0,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flex: 1,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  divider: {
    alignItems: 'center',
    marginVertical: 10,
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 12,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  checkbox: {
    width: 24,
    height: 24,
    marginRight: 15,
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 3,
  },
  checkedIcon: {
    width: 100,
    height: 100,
    marginTop: -38,
    marginLeft: -20
  },
  submitButton: {
    backgroundColor: 'coral',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    resizeMode: 'contain',
    width: 350,
    height: 580, 
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
});

export default MyComponent;