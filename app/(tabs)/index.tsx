import { Image, StyleSheet, Platform, View, Text, SafeAreaView, Button, useColorScheme } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { DropDown } from "@/components/DropDown";
import { Picker } from "@react-native-picker/picker";
import {useEffect, useState} from "react";
import {ApiResponse} from "@/components/ApiResponse";
import {IconSymbol} from "@/components/ui/IconSymbol";

export default function HomeScreen() {
    const [apiData, setApiData] = useState<any>(null); // State to store the API response
    const [message, setMessage] = useState<string>(''); // State to store the message

    const handleApiResponse = (data: any, msg: string) => {
        setApiData(data);
        setMessage(msg);
    };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D48' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Select Zone </ThemedText>
      </ThemedView>
      <DropDown onApiResponse={handleApiResponse}/>
      <ApiResponse myData={apiData}/>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 18,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  container: {
      flex: 1,
      alignItems: 'center'
  },
    whiteText:{
      color: '#FFFFFF'
    },
    darkText:{
      color: '#000000'
    }
});
