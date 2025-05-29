// app/home.tsx
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const cars = [
  {
    id: '1',
    name: 'Revuelto',
    brand: 'Lamborghini',
    price: '$1200',
    image: require('@/assets/images/revuelto.jpg'),
  },
  {
    id: '2',
    name: '488 Spider',
    brand: 'Ferrari',
    price: '$1300',
    image: require('@/assets/images/488spider.jpg'),
  },
  {
    id: '3',
    name: '911 Turbo S',
    brand: 'Porsche',
    price: '$1500',
    image: require('@/assets/images/911turbo.jpeg'),
  },
  {
    id: '4',
    name: 'Chiron',
    brand: 'Bugatti',
    price: '$3000',
    image: require('@/assets/images/chiron.jpeg'),
  },
  {
    id: '5',
    name: 'R8 V10',
    brand: 'Audi',
    price: '$1800',
    image: require('@/assets/images/r8v10.jpeg'),
  },
];

export default function Home() {
  const router = useRouter();

  const handleCarPress = (car: any) => {
    router.push({
      pathname: '/details',
      params: {
        name: car.name,
        brand: car.brand,
        price: car.price,
        image: car.image,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What do you want to Ride Today?</Text>
      <FlatList
        data={cars}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <ImageBackground source={item.image} style={styles.image} imageStyle={{ borderRadius: 10 }}>
              <View style={styles.overlay}>
                <Text style={styles.brand}>{item.brand}</Text>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>Rent Price: {item.price}</Text>
              </View>
              <TouchableOpacity style={styles.arrowContainer} onPress={() => handleCarPress(item)}>
                <View style={styles.circle}>
                  <AntDesign name="arrowright" size={24} color="#000" />
                </View>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20 },
  title: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  card: { marginBottom: 20 },
  image: { width: '100%', height: 200, justifyContent: 'space-between', position: 'relative', },
  overlay: { padding: 10 },
  brand: { color: '#fff', fontSize: 14 },
  name: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  price: { color: '#fff', fontSize: 14, marginTop: 5, position: 'absolute', bottom: -120, left: 10, },
  arrowContainer: {
    alignItems: 'flex-end',
    padding: 10,
  },
  circle: {
    width: 40,
    height: 40,
    backgroundColor: '#ff0',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
