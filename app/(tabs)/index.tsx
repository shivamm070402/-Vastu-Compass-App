import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated
} from 'react-native';

import { Magnetometer } from 'expo-sensors';
import * as Location from 'expo-location';

export default function App() {
  const [heading, setHeading] = useState(0);
  const [location, setLocation] = useState<any>(null);

  const rotateAnim = useRef(new Animated.Value(0)).current;

  // 🧭 Compass
  useEffect(() => {
    const sub = Magnetometer.addListener((data) => {
      let angle = Math.atan2(data.y, data.x) * (180 / Math.PI);
      if (angle < 0) angle += 360;

      const rounded = Math.round(angle);
      setHeading(rounded);

      Animated.timing(rotateAnim, {
        toValue: rounded,
        duration: 150,
        useNativeDriver: true,
      }).start();
    });

    Magnetometer.setUpdateInterval(120);
    return () => sub.remove();
  }, []);

  // 📍 Location
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
    })();
  }, []);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  // 🏠 Vastu Logic
  const getDirectionInfo = (deg: number) => {
    if (deg >= 337.5 || deg < 22.5)
      return { dir: 'N', text: 'Career, Opportunities, Growth 🚀 (Kubera)' };

    if (deg < 67.5)
      return { dir: 'NE', text: 'Wealth, Spirituality 💰 (Ishaan)' };

    if (deg < 112.5)
      return { dir: 'E', text: 'Health, Energy 🌿 (Indra)' };

    if (deg < 157.5)
      return { dir: 'SE', text: 'Fire, Kitchen 🔥 (Agni)' };

    if (deg < 202.5)
      return { dir: 'S', text: 'Fame, Strength ⭐ (Yama)' };

    if (deg < 247.5)
      return { dir: 'SW', text: 'Stability, Property 🏠 (Nairitya)' };

    if (deg < 292.5)
      return { dir: 'W', text: 'Profit, Gains 💼 (Varuna)' };

    return { dir: 'NW', text: 'Support, Networking 🤝 (Vayu)' };
  };

  const info = getDirectionInfo(heading);

  return (
    <View style={styles.container}>

      {/* 🧭 CIRCULAR COMPASS */}
      <View style={styles.card}>

        {/* ✅ FIXED: Relative path */}
        <Animated.Image
          source={require('../../assets/images/vastuapp.png')}
          style={[
            styles.compass,
            { transform: [{ rotate }] }
          ]}
        />

        {/* ✅ FIXED: Relative path */}
        <Animated.Image
          source={require('../../assets/images/needle.png')}
          style={[
            styles.needle,
            { transform: [{ rotate }] }
          ]}
        />

        {/* Center Dot */}
        <View style={styles.centerDot} />

      </View>

      {/* 📊 INFO */}
      <View style={styles.info}>
        <Text style={styles.degree}>{heading}°</Text>
        <Text style={styles.direction}>{info.dir}</Text>
        <Text style={styles.vastu}>{info.text}</Text>

        {location && (
          <>
            <Text style={styles.location}>
              Latitude: {location.coords.latitude.toFixed(5)}
            </Text>
            <Text style={styles.location}>
              Longitude: {location.coords.longitude.toFixed(5)}
            </Text>
          </>
        )}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
  },

  card: {
    width: 340,
    height: 340,
    borderRadius: 170,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  compass: {
    width: 300,
    height: 300,
    borderRadius: 150,
    resizeMode: 'cover',
  },

  needle: {
    position: 'absolute',
    width: 110,
    height: 300,
    resizeMode: 'contain',
  },

  centerDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#000',
    position: 'absolute',
  },

  info: {
    marginTop: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  degree: {
    fontSize: 40,
    fontWeight: 'bold',
  },

  direction: {
    fontSize: 24,
    color: 'green',
    marginTop: 5,
  },

  vastu: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
  },

  location: {
    fontSize: 13,
    color: 'gray',
    marginTop: 5,
  },
});