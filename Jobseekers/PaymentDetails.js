import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native';
import appleLogo from '../assets/apple.jpg';

function MyComponent() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.heading}>Payment Details</Text>
             <TouchableOpacity style={styles.saveButton}>
              <View style={styles.buttonContent}>
                <Image source={appleLogo} style={styles.appleIcon} />
                <Text style={styles.saveButtonText}>Pay</Text>
              </View>
            </TouchableOpacity>
          <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginTop: 20, marginLeft: 10, marginRight: 50, marginBottom: 5}} />
           <Text style={{ fontSize: 14, fontWeight: "bold", color: "black", marginBottom: 30, marginLeft: 400 }}>Or</Text>
             <View style={styles.inputField}>
              <Text style={styles.label}>Email</Text>
              <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="titiana@stripe.com" />
            </View>
            </View>
            <View style={styles.inputField}>
              <Text style={styles.label}>Card Number</Text>
              <View style={styles.inputContainer}>
                <Image source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/99072f4d1f4bdf8ccfa58ea7e57daea8a5358539cb0412a86aac38eaa13dd1d7?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }} style={styles.icon} />
                <TextInput style={styles.input} placeholder="1111 2222 3333 4444" />
              </View>
            </View>
            <View style={styles.inputField}>
              <Text style={styles.label}>Expiration Month</Text>
              <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="MM" />
              </View>
            </View>
            <View style={styles.inputField}>
              <Text style={styles.label}>Expiration Year</Text>
              <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="YY" />
              </View>
            </View>
            <View style={styles.inputField}>
              <Text style={styles.label}>Security Code</Text>
              <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="123" />
              </View>
            </View>
            <View style={styles.inputField}>
              <Text style={styles.label}>Name on card</Text>
              <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="" />
            </View>
            </View>
            <View style={styles.inputField}>
              <Text style={styles.label}>Country or region</Text>
              <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="United States" />
            </View>
            </View>
            <View style={styles.inputField}>
              <Text style={styles.label}>Zip</Text>
              <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="00000" />
            </View>
            </View>
          </View>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Pay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginLeft: 250,
    marginRight: 250
  },
  content: {
    paddingHorizontal: 8,
    paddingTop: 20,
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 25,
  },
  inputField: {
    marginBottom: 20,
    outline: 'none'
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#CCC',
    marginTop: 5, 
  },
  icon: {
    width: 24,
    height: 24,
  },
  input: {
    flex: 1,
    marginLeft: 5,
    color: 'black',
  outline: 'none',
  borderColor: 'transparent',
  borderWidth: 0,
  },
  saveButton: {
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'black',
    borderRadius: 5,
  },
  saveButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appleIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
});

export default MyComponent;