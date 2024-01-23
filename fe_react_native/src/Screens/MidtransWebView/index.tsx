
import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';
import { useAppSelector } from '../../Redux/hooks';
import { RootState } from '../../Redux/store';
import LottieView from 'lottie-react-native';

const MidtransWebView = () => {
    const {snapMidtrans} = useAppSelector((state: RootState) => state.snapMidtrans)
    const url = snapMidtrans
  return (
            <>
            <StatusBar style="dark" />
            {
              snapMidtrans?
              <>
            <WebView source={{ uri: url }} style={{ flex: 1 , marginTop: 10}} />
              </>:
              <View style={styles.container}>
             <LottieView
             autoPlay
             style={{width: 150, height: 150}}
             source={require('../../../assets/Animatiom/loadinganimation.json')}
             />
              </View>
            }
            </>
       
        
       

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default MidtransWebView

