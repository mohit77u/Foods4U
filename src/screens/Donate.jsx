import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, Modal, Pressable, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../assets/style';
const appStyles = require('../assets/style').styles

export default function Donate({navigation}) {
    const [modalVisible, setModalVisible] = useState(true);
    const [time, setTime] = useState('')

    useEffect(() => {
        // set navigation options
        navigation.setOptions({
          headerStyle: { 
            backgroundColor: '#8BC43F'
          }, 
          headerTintColor: '#fff',
        });
    
    }, [navigation])
  return (
    <View style={appStyles.container}>
        <ScrollView>
        <Text style={appStyles.heading}>Donate food details</Text>
        <Text style={appStyles.normalText}>Get in the holiday mood; donate some food.</Text>
        <View style={{marginTop: 30}}>
            <Text style={appStyles.label}>Pickup address</Text>
            <TextInput style={appStyles.textInput}  />
            <Text style={appStyles.label}>City</Text>
            <TextInput style={appStyles.textInput}  />
            <Text style={appStyles.label}>Pincode</Text>
            <TextInput style={appStyles.textInput}  />
            <Text style={appStyles.label}>Preferred date</Text>
            <TextInput style={appStyles.textInput}  />
            <Text style={appStyles.label} onPress={() => setModalVisible(true)}>Select Preferred time {time ? '- ' + time  : ''}</Text>

            {time && (
                <Text style={appStyles.value}>{time}</Text>
            )}

            {/* modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hello World!</Text>
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                    >
                    <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
                </View>
                </View>
            </Modal>

            <Text style={appStyles.label}>Quantity (per person)</Text>
            <TextInput style={appStyles.textInput}  />

            <TouchableOpacity style={styles.centeredButton} onPress={() => navigation.navigate('Donate')}>
                <Text style={appStyles.secondaryButton}>
                    Submit
                </Text>
            </TouchableOpacity >
        </View>
        </ScrollView>
        {/* status bar */}
        <StatusBar style="auto" />
    </View>
  );
}

