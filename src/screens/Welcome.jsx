import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
const appStyles = require('../assets/style').styles

export default function Welcome({navigation}) {
  return (
    <View style={appStyles.cenetredContainer}>
       <Image style={appStyles.logo} source={{ uri: 'https://res.cloudinary.com/db7uzqtf7/image/upload/v1672911380/Food4U/logo_lptwmo.png'}} />
        <Text style={appStyles.logoTitle}>Foods4U</Text>
        <Text style={appStyles.title}>Want to donate food?</Text>
        {/* started button */}
        <TouchableOpacity onPress={() => navigation.navigate('Donate')}>
            <Text style={appStyles.primaryButton}>
                Donate Now
            </Text>
        </TouchableOpacity >
        <View style={appStyles.bottomWelcome}>
          <Image style={appStyles.bottomWelcomImage} source={{ uri: 'https://res.cloudinary.com/db7uzqtf7/image/upload/v1672919747/Food4U/donate-food-3_ucofzo.jpg'}} />
          <Text style={appStyles.text}>Let it snow, don't let hunger grow...</Text>
        </View>

        {/* status bar */}
        <StatusBar style="auto" />
    </View>
  );
}

