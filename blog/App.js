import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { AppLoading } from "expo";
import { bootstrap } from "./bootstrap";
import { AppNavigation } from "./navigation/AppNavigation";


export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={err => console.log(err)}
      />
    )
  }

  return <AppNavigation/>
}