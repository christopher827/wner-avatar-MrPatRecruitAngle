import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Modal, ImageBackground } from 'react-native';
import Topbar from '../components/expertstopbar';
import Sidebar from '../components/expertssidebar';
import { useNavigation } from '@react-navigation/native';
import OpenModal from '../Experts/Viewbids';
import { BlurView } from 'expo-blur';
import {useFonts} from "expo-font"

  
function MyComponent() {
    const navigation = useNavigation();
    const [isBidHovered, setIsBidHovered] = useState(false);
    const [isOfferHovered, setIsOfferHovered] = useState(false);
    
    const goToOffers= () => {
        navigation.navigate('Offers');
      };

      const goToBids = () => {
        navigation.navigate('Bids');
      };

      

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
          <View style={{ marginLeft: 200}}>
            <View style={styles.header}>
              <TouchableOpacity onPress={goToOffers} 
            underlayColor={isOfferHovered ? 'transparent' : 'transparent'}
            onMouseEnter={() => setIsOfferHovered(true)}
            onMouseLeave={() => setIsOfferHovered(false)}> 
              <View style={styles.item}>
              <Image
  source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/55120fdad0942a072dd9c4983820860f2be5dfe081dd7a9dc2fbf948476d5ae7?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }}
  style={styles.image}
/>
                <Text style={[styles.headertext, isOfferHovered && { color: 'coral' }]}>Offers</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToBids}
            underlayColor={isBidHovered ? 'transparent' : 'transparent'}
            onMouseEnter={() => setIsBidHovered(true)}
            onMouseLeave={() => setIsBidHovered(false)} >
              <View style={styles.item}>
              <Image
  source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/55120fdad0942a072dd9c4983820860f2be5dfe081dd7a9dc2fbf948476d5ae7?apiKey=7b9918e68d9b487793009b3aea5b1a32&' }}
  style={styles.image}
/>
                <Text style={[styles.headertext, isBidHovered && { color: 'coral' }]}>Bids</Text>
              </View>
            </TouchableOpacity>
            </View>

            <ScheduledMeetingsTable />
          </View>
        </ScrollView>
      </View>
    </View>
    </ImageBackground>
  );
}

const ScheduledMeetingsTable = () => {
  const [modalVisible, setModalVisible] = useState(false);

    const handleOpenPress = () => {
      setModalVisible(true);
    };
  
    const handleCloseModal = () => {
      setModalVisible(false);
    };
    const [fontsLoaded]=useFonts({
      'Varta-Light':require("../assets/fonts/Varta-Light.ttf"),
      "Varta-Bold":"../assets/fonts/Varta-Bold.ttf",
      "Varta-Medium":"../assets/fonts/Varta-Medium.ttf",
      "Varta-Regular":"./assets/fonts/Varta-Regular.ttf",
      "Varta-SemiBold":"./assets/fonts/Varta-SemiBold.ttf"
    })
  
  return (

    
    <View style={styles.greenBox}>
      <BlurView intensity={100} style={styles.blurBackground}>
    <Text style={styles.title}>Offers</Text>
    
    <View style={styles.table}>
    <View style={styles.row}>
        <View style={styles.cell}>
        <Text style={{fontWeight: '600', fontSize: 14,fontFamily:"Varta-Light"}}>Name</Text>
        </View>
        <View style={styles.cell}>
        <Text style={{fontWeight: '600', fontSize: 14,fontFamily:"Varta-Light"}}>Number of Candidates</Text>
        </View>
        <View style={styles.cell}>
        <Text style={{fontWeight: '600', fontSize: 14,fontFamily:"Varta-Light"}}>Field</Text>
        </View>
        <View style={styles.cell}>
        <Text style={{fontWeight: '600', fontSize: 14,fontFamily:"Varta-Light"}}>Start Date</Text>
        </View>
        <View style={styles.cell}>
          <Text style={{color: "white", fontSize: 14,fontFamily:"Varta-Light"}}> </Text>
        </View>
        <View style={styles.cell}>
          <Text style={{color: "white", fontSize: 14,fontFamily:"Varta-Light"}}> </Text>
        </View>
      </View>
        <View style={styles.row}>
          <View style={styles.cell2}>
          <View style={{flexDirection: 'row'}}>
          <Image source={require('../assets/asml.png')} style={styles.userimage} />
            <Text style={styles.cellText}>ASML</Text>
          </View>
          </View>
          <View style={styles.cell2}>
            <Text style={styles.cellText}>3 Candidates</Text>
          </View>
          <View style={styles.cell2}>
            <Text style={styles.cellText}>SAP FI</Text>
          </View>
          <View style={styles.cell2}>
            <Text style={styles.cellText}>July 2024</Text>
          </View>
          <TouchableOpacity style={styles.cell2}>
          <Text style={styles.open}>Download NDA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell2} onPress={handleOpenPress}>
          <Text style={{color: "#206C00", fontSize: 14,fontFamily:"Varta-Light"}}>Bid</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <View style={styles.cell}>
          <View style={{flexDirection: 'row'}}>
          <Image source={require('../assets/tmc.png')} style={styles.userimage} />
            <Text style={styles.cellText}>TMC</Text>
          </View>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>3 Candidates</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>Power Platform</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>August 2024</Text>
          </View>
          <TouchableOpacity style={styles.cell}>
          <Text style={styles.open}>Download NDA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell} onPress={handleOpenPress}>
          <Text style={{color: "#206C00", fontSize: 14}}>Bid</Text>
          </TouchableOpacity>
        </View>
         <View style={styles.row}>
          <View style={styles.cell2}>
          <View style={{flexDirection: 'row'}}>
          <Image source={require('../assets/rvl.png')} style={styles.userimage} />
            <Text style={styles.cellText}>RVL</Text>
          </View>
          </View>
          <View style={styles.cell2}>
            <Text style={styles.cellText}>3 Candidates</Text>
          </View>
          <View style={styles.cell2}>
            <Text style={styles.cellText}>SAP FI</Text>
          </View>
          <View style={styles.cell2}>
            <Text style={styles.cellText}>July 2024</Text>
          </View>
          <TouchableOpacity style={styles.cell2}>
          <Text style={styles.open}>Download NDA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell2} onPress={handleOpenPress}>
          <Text style={{color: "#206C00", fontSize: 14}}>Bid</Text>
          </TouchableOpacity>
        </View>
         <View style={styles.row}>
          <View style={styles.cell}>
          <View style={{flexDirection: 'row'}}>
          <Image source={require('../assets/mtn.png')} style={styles.userimage} />
            <Text style={styles.cellText}>MTN</Text>
          </View>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>3 Candidates</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>Power Platform</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>August 2024</Text>
          </View>
          <TouchableOpacity style={styles.cell}>
          <Text style={styles.open}>Download NDA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell} onPress={handleOpenPress}>
          <Text style={{color: "#206C00", fontSize: 14,fontFamily:"Varta-Light"}}>Bid</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <View style={styles.cell2}>
          <View style={{flexDirection: 'row'}}>
          <Image source={require('../assets/dangote.jpeg')} style={styles.userimage} />
            <Text style={styles.cellText}>DANGOTE</Text>
          </View>
          </View>
          <View style={styles.cell2}>
            <Text style={styles.cellText}>3 Candidates</Text>
          </View>
          <View style={styles.cell2}>
            <Text style={styles.cellText}>SAP FI</Text>
          </View>
          <View style={styles.cell2}>
            <Text style={styles.cellText}>July 2024</Text>
          </View>
          <TouchableOpacity style={styles.cell2}>
          <Text style={styles.open}>Download NDA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell2} onPress={handleOpenPress}>
          <Text style={{color: "#206C00", fontSize: 14,fontFamily:"Varta-Light"}}>Bid</Text>
          </TouchableOpacity>
        </View>
         <View style={styles.row}>
          <View style={styles.cell}>
          <View style={{flexDirection: 'row'}}>
          <Image source={require('../assets/awl.png')} style={styles.userimage} />
            <Text style={styles.cellText}>AWL</Text>
          </View>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>3 Candidates</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>Power Platform</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>August 2024</Text>
          </View>
          <TouchableOpacity style={styles.cell}>
          <Text style={styles.open}>Download NDA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell} onPress={handleOpenPress}>
          <Text style={{color: "#206C00", fontSize: 14,fontFamily:"Varta-Light"}}>Bid</Text>
          </TouchableOpacity>
        </View>
 <View style={styles.row}>
          <View style={styles.cell2}>
          <View style={{flexDirection: 'row'}}>
          <Image source={require('../assets/tesla.jpeg')} style={styles.userimage} />
            <Text style={styles.cellText}>TESLA</Text>
          </View>
          </View>
          <View style={styles.cell2}>
            <Text style={styles.cellText}>3 Candidates</Text>
          </View>
          <View style={styles.cell2}>
            <Text style={styles.cellText}>SAP FI</Text>
          </View>
          <View style={styles.cell2}>
            <Text style={styles.cellText}>July 2024</Text>
          </View>
          <TouchableOpacity style={styles.cell2}>
          <Text style={styles.open}>Download NDA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell2} onPress={handleOpenPress}>
          <Text style={{color: "#206C00", fontSize: 14,fontFamily:"Varta-Light"}}>Bid</Text>
          </TouchableOpacity>
        </View>
<View style={styles.row}>
          <View style={styles.cell}>
          <View style={{flexDirection: 'row'}}>
          <Image source={require('../assets/tmc.png')} style={styles.userimage} />
            <Text style={styles.cellText}>TMC</Text>
          </View>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>3 Candidates</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>Power Platform</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>August 2024</Text>
          </View>
          <TouchableOpacity style={styles.cell}>
          <Text style={styles.open}>Download NDA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell} onPress={handleOpenPress}>
          <Text style={{color: "#206C00", fontSize: 14}}>Bid</Text>
          </TouchableOpacity>
        </View>
<View style={styles.row}>
          <View style={styles.cell2}>
          <View style={{flexDirection: 'row'}}>
          <Image source={require('../assets/rvl.png')} style={styles.userimage} />
            <Text style={styles.cellText}>RVL</Text>
          </View>
          </View>
          <View style={styles.cell2}>
            <Text style={styles.cellText}>3 Candidates</Text>
          </View>
          <View style={styles.cell2}>
            <Text style={styles.cellText}>SAP FI</Text>
          </View>
          <View style={styles.cell2}>
            <Text style={styles.cellText}>July 2024</Text>
          </View>
          <TouchableOpacity style={styles.cell2}>
          <Text style={styles.open}>Download NDA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell2} onPress={handleOpenPress}>
          <Text style={{color: "#206C00", fontSize: 14}}>Bid</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
<View style={styles.cell}>
<View style={{flexDirection: 'row'}}>
          <Image source={require('../assets/awl.png')} style={styles.userimage} />
            <Text style={styles.cellText}>TMC</Text>
          </View>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>3 Candidates</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>Power Platform</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.cellText}>August 2024</Text>
          </View>
          <TouchableOpacity style={styles.cell}>
          <Text style={styles.open}>Download NDA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell} onPress={handleOpenPress}>
          <Text style={{color: "#206C00", fontSize: 14}}>Bid</Text>
          </TouchableOpacity>
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

      </View>
      </BlurView>
    </View>
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
    marginLeft: -40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#f7fff4',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  blurBackground: {
    flex: 1, 
    borderRadius: 20, 
  },
  headertext: {
    marginLeft: 5,
    marginTop: 3,
    fontSize: 14,
    fontWeight: '500',
    color: '#666'
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 5,
    marginLeft: 100
  },
  title: {
    marginTop: 20,
    marginLeft: 50,
    color: "black",
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'flex-start',
    fontFamily:"Varta-Light"
  },
  table: {
    marginRight: 200,
    marginTop: 20,
    marginBottom: 20,
    alignContent: 'center',
    justifyContent: 'space-around',
    marginLeft: 50, marginRight: 50
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(225,225,212,0.3)',
  },
  cell: {
    flex: 1,
   backgroundColor: 'white',
    padding: 10,
    alignItems: 'flex-start',
  },
  cell2: {
    flex: 1,
   backgroundColor: 'none',
    padding: 10,
    alignItems: 'flex-start',
  },
  cellText: {
    textAlign: 'flex-start',
  },
  
  greenBox: {
    flex: 1,
   width: "95%",
    height:250,
    marginBottom: 20,
    marginLeft: 50, 
    backgroundColor: 'rgba(225,225,212,0.3)',
    marginTop: 50, 
    borderRadius: 20,
    borderColor: 'rgba(255,255,255,0.5)',
    borderWidth: 1,
  },
  cellText: {
    textAlign: 'center',
    fontFamily:"Varta-Light"
  },
  userimage: {
    width: 30,
    height: 30,
    marginRight: 10,
    marginTop: -5,
    borderRadius: 25
  },
  open: {
    color: "black",
     fontSize: 14,
      borderColor: "#63EC55", 
      borderWidth: 2, 
      padding: 5, 
      paddingHorizontal: 15, 
      borderRadius: 5,fontFamily:"Varta-Light"
},
});

export default MyComponent;
