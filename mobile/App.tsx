import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import { useFonts } from '@expo-google-fonts/archivo';

import AppStack from './src/routes/AppStack';

export default function App() {
  let [fontsLoaded] = useFonts({
  });

  if (!fontsLoaded){
    return <AppLoading />;
  } else{
    return (
      <>
        <AppStack />
        <StatusBar style="light" />
      </>
    );
  }
};
