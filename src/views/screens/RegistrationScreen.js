import React from 'react';
import { SafeAreaView, ScrollView, Text, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegistrationScreen = ({navigation}) => {
    return (
      <SafeAreaView  style ={{backgroundColor: 'white', flex: 1}}>
        <ScrollView
          contentContainerStyle={{
            paddingTop: 50,
            paddingHorizontal: 20,
          }}>
            <Text style={{color: 'black', fontSize: 40, fontWeight: 'bold'}}>
              Register
            </Text>
          
        </ScrollView>

      </SafeAreaView>
    );
}

export default RegistrationScreen;