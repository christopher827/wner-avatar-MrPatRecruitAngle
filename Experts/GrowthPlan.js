import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, TouchableHighlight, Modal, ImageBackground } from 'react-native';
import Topbar from '../components/expertstopbar';
import Sidebar from '../components/expertssidebar';
import ScheduledGrowthPlan from '../components/ScheduledGrowthPlan';
import GrowthPlansReview from '../components/GrowthPlansReview';
import CompletedGrowthPlan from '../components/CompletedGrowthPlan';
import { useNavigation } from '@react-navigation/native';
import OpenModal from '../Experts/Growthplanprofile';
import {useFonts} from "expo-font"

function MyComponent() {
    const navigation = useNavigation();
    const [isInterviewHovered, setIsInterviewHovered] = useState(false);
    const [isGrowthHovered, setIsGrowthHovered] = useState(false);
    const [isAdviceHovered, setIsAdviceHovered] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = {};
  
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
          mins: Math.floor((difference / 1000 / 60) % 60),
        };
      }
  
      return timeLeft;
    };
  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const targetDate = '2024-05-29T00:00:00'; // Change this to your target date and time
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
  
      return () => clearTimeout(timer);
    });
  
    const timerComponents = Object.keys(timeLeft).map((interval) => {
      if (!timeLeft[interval]) {
        return null;
      }
  
      return (
        <Text key={interval}>
          {timeLeft[interval]} {interval}{" "}
        </Text>
      );
    });

    const handleOpenPress = () => {
      setModalVisible(true);
    };
  
    const handleCloseModal = () => {
      setModalVisible(false);
    };
  

    const goToInterview = () => {
        navigation.navigate('Interview');
      };

      const goToGrowth = () => {
        navigation.navigate('Growth Plan');
      };

      const goToAdvice = () => {
        navigation.navigate('Advice');
      };
      
      const goToGrowthprofile = () => {
        navigation.navigate('Growth Plan Profile');
    };
    const [fontsLoaded]=useFonts({
      'Varta-Light':require("../assets/fonts/Varta-Light.ttf"),
      "Varta-Bold":"../assets/fonts/Varta-Bold.ttf",
      "Varta-Medium":"../assets/fonts/Varta-Medium.ttf",
      "Varta-Regular":"./assets/fonts/Varta-Regular.ttf",
      "Varta-SemiBold":"./assets/fonts/Varta-SemiBold.ttf"
    })

  return (
    <ImageBackground
    source={require ('../assets/Background.png') }
  style={{ height: '150%', width: '100%',flex: 1}}
>
    <View style={{ flex: 1 }}>
      <Topbar />
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <Sidebar />
        <ScrollView contentContainerStyle={{ flexGrow: 1, maxHeight: 500 }}>
        <View style={{ marginLeft: 270}}>
          <View style={styles.header}>
          <TouchableHighlight
                                
                                underlayColor={isInterviewHovered ? 'transparent' : 'transparent'}
                                onMouseEnter={() => setIsInterviewHovered(true)}
                                onMouseLeave={() => setIsInterviewHovered(false)}>
                                <View style={styles.item}>
                                <Image
  source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dea8538a41a4085f905f7513c46d36613c28b4ada84630149918f4444ac5ecde?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }}
  style={styles.image}
/>
                                    <Text style={[styles.headertext, isInterviewHovered && { color: 'coral' }]}>Junior Power Platform Developer</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                               
                                underlayColor={isGrowthHovered ? 'transparent' : 'transparent'}
                                onMouseEnter={() => setIsGrowthHovered(true)}
                                onMouseLeave={() => setIsGrowthHovered(false)}>
                                <View style={styles.item}>
                                <Image
  source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dea8538a41a4085f905f7513c46d36613c28b4ada84630149918f4444ac5ecde?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }}
  style={styles.image}
/>
                                    <Text style={[styles.headertext, isGrowthHovered && { color: 'coral' }]}>Junior SAP FI</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableOpacity >
                <Image source={require('../assets/ellipsis-down.png')} style={{width: 15, height: 15, marginLeft: 60, marginTop: 10}} />
            </TouchableOpacity>
                            
                        </View>
                        <TouchableOpacity onPress={handleOpenPress}>
    <View style={{ position: 'absolute', right: 80, top: -45, paddingHorizontal: 8, paddingVertical: 8, borderRadius: 5, backgroundColor: 'coral', width: 100, alignItems: 'center',}}>
                    <Text style={{ fontSize: 13, color: "white", alignText: 'center', fontWeight: '600',fontFamily:"Varta-Light" }}>Create Profile</Text>
                  </View>
     </TouchableOpacity>
                        <TouchableOpacity onPress={handleOpenPress}>
    <View style={{ justifyContent: "flex-start", paddingHorizontal: 10, paddingVertical: 10, borderRadius: 5, borderColor: "#f7fff4", backgroundColor: 'rgba(211,249,216,0.3)', width: 150, alignItems: 'center', marginTop: 20, marginLeft: 50, borderWidth: 1 }}>
                    <Text style={{ fontSize: 13, color: "#f7fff4", alignText: 'center', fontWeight: 'bold',fontFamily:"Varta-Light" }}>Edit Profile</Text>
                  </View>
     </TouchableOpacity>

     <View style={styles.container}>
      <View style={styles.box}>
         <Text style = {{fontSize: 12, color: 'grey',fontFamily:"Varta-Light" }}>Pending Growth Plan Reviews</Text>
         <View style={{flexDirection: 'row'}}>
         <Image source={require('../assets/icons8-choice.gif')} style={styles.boximage}  />
           <Text style = {{fontSize: 24, fontWeight: 'bold', color: 'brown', marginTop: 5,fontFamily:"Varta-Light" }}>5</Text>
           </View>
           <Text style = {{fontSize: 14, fontWeight: '500', marginTop: 10,fontFamily:"Varta-Light" }}>Candidates are waiting for your review</Text>
      </View>
      <View style={styles.box}>
        <Text style = {{fontSize: 12, color: 'grey' ,fontFamily:"Varta-Light"}}>Plans Reveiwed</Text>
        <View style={{flexDirection: 'row'}}>
         <Image source={require('../assets/icons8-done.gif')} style={styles.boximage}  />
           <Text style = {{fontSize: 24, fontWeight: 'bold', marginTop: 5, color: '#4CAF50',fontFamily:"Varta-Light"}}>30</Text>
      </View>
      <Text style = {{fontSize: 14, fontWeight: '500', marginTop: 10,fontFamily:"Varta-Light" }}>You have reveiwed 6 plan(s) this week</Text>
      </View>
      <View style={styles.box2}>
        <Text style = {{fontSize: 12, color: 'grey',fontFamily:"Varta-Light" }}>Next growth Plan Session in</Text>
        <View style={{flexDirection: 'row'}}>
         <Image source={require('../assets/icons8-delivery-time.gif')} style={styles.boximage2}  />
           <Text style = {{fontSize: 24, fontWeight: 'bold', marginTop: 5, color: 'darkgreen',fontFamily:"Varta-Light" }}>{timerComponents}</Text>
           </View>
           <Text style = {{fontSize: 14, fontWeight: '500', marginTop: 10,fontFamily:"Varta-Light" }}>You have a new session in {timerComponents}!</Text>
      </View>
    </View>

 <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
          <View style={styles.modalContent}>
          <OpenModal onClose={() => handleCloseModal()} />
          </View>
      </Modal>

<ScheduledGrowthPlan />
<GrowthPlansReview />
<CompletedGrowthPlan />
</View>
          
          
        </ScrollView>
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  header: {
    marginLeft: -60,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#f7fff4',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headertext: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: '500',
    marginTop: 5,
    color: '#666'
  },
  image: {
    width: 21,
    height: 21,
    marginRight: 5,
    marginTop: 5,
    marginLeft: 100
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 40, marginRight: 50, marginTop: 50
  },
  box: {
    backgroundColor: '#f7fff4',
    padding: 20,
    borderRadius: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '22%',
    height: 150,
    borderWidth: 2, borderColor: 'rgba(225,225,212,0.3)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  box2: {
    backgroundColor: '#f7fff4',
    padding: 20,
    borderRadius: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '44%',
    height: 150,
    borderWidth: 2, borderColor: 'rgba(225,225,212,0.3)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  boximage: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: 150,
    borderRadius: 25
  },
  boximage2: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: 350,
    marginTop:5, 
    borderRadius: 25
  },
});

export default MyComponent;
