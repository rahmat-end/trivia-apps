
import React from 'react'
import { WebView } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';
import { useAppSelector } from '../../Redux/hooks';
import { RootState } from '../../Redux/store';

const MidtransWebView = () => {
    const {snapMidtrans} = useAppSelector((state: RootState) => state.snapMidtrans)
    const url = snapMidtrans
  return (
            <>
            <StatusBar style="dark" />
            <WebView source={{ uri: url }} style={{ flex: 1 }} />
            </>
       
        
       

  )
}

export default MidtransWebView

