import { Image, StyleSheet, Platform, Text, View, SafeAreaView, StatusBar, PermissionsAndroid} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import LineChart from '@/components/Lin';
import Icon from 'react-native-vector-icons/FontAwesome';


import Svg, { Path } from "react-native-svg";
import * as d3 from "d3-shape";
import "../../global.css"
import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';



export default function HomeScreen() {

  let [perms, setPerms] = useState<boolean>(false);

  useEffect( () => {

    const requestCameraPermission = async () => {
    };

    requestCameraPermission();
  }, [])

  return (
    <>
      <StatusBar/>
      <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
        <SafeAreaProvider>
          <View className='mt-5  bg-white h-screen'>
            <View>
              <Text>Emerdant
                { perms ? "✅" : "❌" }
              </Text>
              <Icon name="rocket" size={30} color="#900" />
            </View>
          </View>
        </SafeAreaProvider>
      </SafeAreaView>
    </>

    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    //   headerImage={
    //     <Image
    //       source={require('@/assets/images/partial-react-logo.png')}
    //       style={styles.reactLogo}
    //     />
    //   }>
    //   <ThemedView style={styles.titleContainer}>
    //     <Text className='text-4xl text-red-600'>XD 🚀</Text>
    //     <ThemedText type="title">Welcome!</ThemedText>
    //     <HelloWave />
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 1: Try it</ThemedText>
    //     <ThemedText>
    //       Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
    //       Press{' '}
    //       <ThemedText type="defaultSemiBold">
    //         {Platform.select({
    //           ios: 'cmd + d',
    //           android: 'cmd + m',
    //           web: 'F12'
    //         })}
    //       </ThemedText>{' '}
    //       to open developer tools.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 2: Explore</ThemedText>
    //     <ThemedText>
    //       Tap the Explore tab to learn more about what's included in this starter app.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
    //     <ThemedText>
    //       When you're ready, run{' '}
    //       <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
    //       <ThemedText type="defaultSemiBold">app-example</ThemedText>.
    //     </ThemedText>
    //   </ThemedView>
    // </ParallaxScrollView>
  );
}



// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });
