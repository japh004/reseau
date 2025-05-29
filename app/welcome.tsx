import { Ionicons } from '@expo/vector-icons';
import { setBehaviorAsync, setVisibilityAsync } from 'expo-navigation-bar';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function Welcome() {
  const router = useRouter();

  const handlePress = () => {
    router.push('/home'); // redirige vers la page Home
  };

  useEffect(() => {
    setBehaviorAsync('inset-swipe'); // Masquer en mode swipe
    setVisibilityAsync('hidden'); // Masquer la barre
  }, []);



  return (
    <>
      <StatusBar hidden={true} />
      {/* Masque la barre d'état */}
      <ImageBackground
      source={require('@/assets/images/car-bg.jpg')} // image de fond de la page d'accueil
      style={styles.container}
    >
      <View style={styles.logoWrapper}>
        {/* Logo au top */}
        <Text style={styles.logo}></Text>
      </View>

      <View style={styles.bottomContent}>
        <Text style={styles.title}>
          Find Your <Text style={styles.highlight}>Perfect</Text> Car Today!
        </Text>
        <Text style={styles.subtitle}>
          Start your journey with the car you've always wanted—explore top deals.
        </Text>

        <TouchableOpacity style={styles.arrowButton} onPress={handlePress}>
          <Ionicons name="arrow-forward" size={24} color="black" />
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  logoWrapper: {
    paddingTop: 60,
    alignItems: 'center',
  },
  logo: {
    fontSize: 30,
    color: '#FFD700',
  },
  bottomContent: {
    paddingHorizontal: 30,
    paddingBottom: 50,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  highlight: {
    color: '#FFD700',
  },
  subtitle: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 10,
  },
  arrowButton: {
    marginTop: 30,
    backgroundColor: '#FFD700',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center', // centre l'icône verticalement
    alignItems: 'center',     // centre l'icône horizontalement
    alignSelf: 'flex-end',
  },
});
