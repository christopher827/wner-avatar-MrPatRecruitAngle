import React, { useState } from 'react';
import { View, Platform, KeyboardAvoidingView, Text, Image, TouchableOpacity, Alert, Modal, TouchableWithoutFeedback } from 'react-native';
import { GiftedChat, Send, Bubble } from 'react-native-gifted-chat';
import * as DocumentPicker from 'expo-document-picker';
import { Audio } from 'expo-av';
import {useFonts} from "expo-font"

function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [recording, setRecording] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isProfileVisible, setProfileVisible] = useState(false);

  const onSend = (newMessages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
  };

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View style={{ marginRight: 10, marginBottom: 10 }}>
          <Text style={{ color: '#206C00', fontWeight: 'bold', fontSize: 16 }}>Send</Text>
        </View>
      </Send>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: 'white',
          },
          right: {
            backgroundColor: '#3D5C3A',
          },
        }}
      />
    );
  };

  const handleFilePick = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({ type: '*/*' });
      if (result.type === 'success') {
        const { uri: fileUri, name: fileName, type: fileType } = result;
        const message = {
          _id: Math.random().toString(36).substring(7),
          text: '',
          createdAt: new Date(),
          user: {
            _id: 1,
          },
          file: {
            uri: fileUri,
            name: fileName,
            type: fileType,
          },
        };
        onSend([message]); // Ensure the message is sent as an array
      }
    } catch (error) {
      console.error('Error picking file:', error);
    }
  };

  const startRecording = async () => {
    try {
      const { sound, status } = await Audio.Recording.createAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      setRecording(sound);
      setIsRecording(true);
    } catch (error) {
      console.error('Failed to start recording:', error);
    }
  };

  const stopRecording = async () => {
    try {
      await recording.stopAndUnloadAsync();
      setIsRecording(false);
      const { uri } = recording.getURI();
      const message = {
        _id: Math.random().toString(36).substring(7),
        text: '',
        createdAt: new Date(),
        user: {
          _id: 1,
        },
        audio: uri,
      };
      onSend([message]); // Ensure the message is sent as an array
    } catch (error) {
      console.error('Failed to stop recording:', error);
    }
  };

  const toggleProfileModal = () => {
    setProfileVisible(!isProfileVisible);
  };

  const [fontsLoaded]=useFonts({
    'Varta-Light':require("../assets/fonts/Varta-Light.ttf"),
    "Varta-Bold":"../assets/fonts/Varta-Bold.ttf",
    "Varta-Medium":"../assets/fonts/Varta-Medium.ttf",
    "Varta-Regular":"./assets/fonts/Varta-Regular.ttf",
    "Varta-SemiBold":"./assets/fonts/Varta-SemiBold.ttf"
  })

  return (
    <View style={{ flex: 1 }}>
    <Modal visible={isProfileVisible} animationType="slide" transparent>
        <TouchableWithoutFeedback onPress={toggleProfileModal}>
          <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '20%', alignItems: 'center' }}>
              <TouchableOpacity onPress={toggleProfileModal} style={{ position: 'absolute', top: 10, right: 10 }}>
            <Text>✕</Text>
          </TouchableOpacity>
          <View style={{ flex: 1, marginTop: 50, marginLeft: 20, marginRight: 20}}>
     
     <View style={{ flexDirection: "row", marginTop: 4, paddingRight: 2 }}>
       <Text style={{ fontSize: 16, fontWeight: "bold", color: "black",fontFamily:"Varta-Light" }}>
         Nathan Arthur
       </Text>
       <View
         style={{
           width: 2,
           height: 2,
           backgroundColor: "green",
           borderRadius: 1,
           marginLeft: 2,
         }}
       />
     </View>
     <Text style={{ fontSize: 12, color: "#A0AEC0",fontFamily:"Varta-Light" }}>Java Programmer</Text>
     <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginTop: 10 }} />
     <Text style={{ marginTop: 10, fontSize: 12, color: "#206C00",fontFamily:"Varta-Light" }}>
       nathanar47@gmail.com
     </Text>
     <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginTop: 10 }} />
     <Text style={{ marginTop: 10, fontSize: 14, color: "black",fontFamily:"Varta-Light" }}>
       15 year(s) experience
     </Text>
     <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginTop: 10 }} />
     <Text style={{ marginTop: 10, fontSize: 14, color: "#206C00", fontWeight: '600',fontFamily:"Varta-Light"}}>
       Hard Skills
     </Text>
     <Text style={{ marginTop: 10, fontSize: 12, color: "black",fontFamily:"Varta-Light" }}>
       • Responsive Design
     </Text>
     <Text style={{ marginTop: 5, fontSize: 12, color: "black",fontFamily:"Varta-Light" }}>
      • HTML, CSS, JavaScript
     </Text>
     <Text style={{ marginTop: 5, fontSize: 12, color: "black",fontFamily:"Varta-Light" }}>
       • React & Angular
     </Text>
     <Text style={{ marginTop: 5, fontSize: 12, color: "black",fontFamily:"Varta-Light" }}>
       • Python & Node.js
     </Text>
     <Text style={{ marginTop: 5, fontSize: 12, color: "black",fontFamily:"Varta-Light" }}>
       • Web security
     </Text>
     <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginTop: 10 }} />
     <Text style={{ marginTop: 10, fontSize: 14, color: "#206C00", fontWeight: '600',fontFamily:"Varta-Light" }}>
       Soft Skills
     </Text>
     <Text style={{ marginTop: 10, fontSize: 12, color: "black",fontFamily:"Varta-Light" }}>
       • Communication
     </Text>
     <Text style={{ marginTop: 5, fontSize: 12, color: "black",fontFamily:"Varta-Light" }}>
       • Problem-solving & Critical thinking
     </Text>
     <Text style={{ marginTop: 5, fontSize: 12, color: "black",fontFamily:"Varta-Light" }}>
       • Time Management
     </Text>
     <Text style={{ marginTop: 5, fontSize: 12, color: "black",fontFamily:"Varta-Light" }}>
       • Client Management
     </Text>
     <Text style={{ marginTop: 5, fontSize: 12, color: "black",fontFamily:"Varta-Light" }}>
       • Continuous Learning Mindset
     </Text>
     <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginTop: 10 }} />
     <Text style={{ marginTop: 10, fontSize: 14, color: "#A0AEC0",fontFamily:"Varta-Light" }}>
       Received files
     </Text>
     <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 1, marginTop: 10 }}>
       <View style={{ flexDirection: "row", alignItems: "center" }}>
         <Image
           source={{
             uri:
               "https://cdn.builder.io/api/v1/image/assets/TEMP/b79c39e1425278a7e41c51ee38aead4f0c299b3e3b1c3700672a00748cf50159?apiKey=7b9918e68d9b487793009b3aea5b1a32&",
           }}
           style={{ width: 35, height: 35, aspectRatio: 1 }}
         />
         <View style={{ marginLeft: 5 }}>
           <Text style={{ color: "#206C00",fontFamily:"Varta-Light" }}>NathanCV.pdf</Text>
           <Text style={{ color: "#A0AEC0", fontSize: 10,fontFamily:"Varta-Light" }}>293 kb</Text>
         </View>
       </View>
     </View>
   </View>
        </View>
        </View>
        </TouchableWithoutFeedback>
      </Modal>

      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'white', }}>
        <TouchableOpacity onPress={toggleProfileModal}>
          <Image
            source={require('../assets/account.png')}
            style={{ width: 40, height: 40, borderRadius: 20 }}
          />
        </TouchableOpacity>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#3D5C3A',fontFamily:"Varta-Light"}}>Nathan Arthur</Text>
          <Text style={{ fontStyle: 'normal', fontSize: 12, color: '#3D5C3A',fontFamily:"Varta-Light" }}>Java Programming - <Text style={{ fontWeight: '500', fontStyle: 'italic', color: '#3D5C3A' }}>Jobseeker</Text></Text>
        </View>
        <TouchableOpacity style={{ marginLeft: 'auto', marginRight: 10 }} onPress={handleFilePick}>
          <Image
            source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9afdd28554ea94baa9f576588ffd7e85d2ea305e799b46b23fc2336715ed2398?apiKey=7b9918e68d9b487793009b3aea5b1a32' }}
            style={{ width: 25, height: 25, marginTop: 10 }}
          />
        </TouchableOpacity>
        {isRecording ? (
          <TouchableOpacity onPress={stopRecording}>
            <Image
              source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8b6ee6e3efc0882450b47e4387504c352faa72f342dc8adc7741cf3ed2a19f02?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }}
              style={{ width: 25, height: 25, marginTop: 10, marginRight: 10 }}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={startRecording}>
            <Image
              source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7faa777c54d32d03bd2952b24dd7b363b4e5cd731ca521b853a6b213ebf2f277?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }}
              style={{ width: 25, height: 25, marginTop: 10, marginRight: 10 }}
            />
          </TouchableOpacity>
        )}
      </View>

      <View style={{ flex: 1, backgroundColor: '#F5FFFA' }}>
        <GiftedChat
          messages={messages}
          onSend={(newMessages) => onSend(newMessages)}
          user={{ _id: 1 }}
          placeholder="Type a message..."
          renderSend={renderSend}
          renderBubble={renderBubble}
        />
      </View>

      {Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />}
    </View>
  );
}

export default ChatScreen;
