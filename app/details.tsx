// app/details.tsx
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Details() {
  const { name, brand, price, image } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.logo}></Text>
        <Text style={styles.star}>⭐</Text>
      </View>

      {/* Image */}
      <Image source={image} style={styles.carImage} />

      {/* Car Details */}
      <View style={styles.details}>
        <Text style={styles.brand}>{brand}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.location}>📍 Oakland, California, USA</Text>

        <View style={styles.specs}>
          <View style={styles.specBox}>
            <Text style={styles.specTitle}>Max Speed</Text>
            <Text style={styles.specValue}>310km/h</Text>
          </View>
          <View style={styles.specBox}>
            <Text style={styles.specTitle}>Engine</Text>
            <Text style={styles.specValue}>V12 6.5°</Text>
          </View>
          <View style={styles.specBox}>
            <Text style={styles.specTitle}>Ability</Text>
            <Text style={styles.specValue}>4 Seats</Text>
          </View>
        </View>

        <View style={styles.bottom}>
          <Text style={styles.price}>{price} / 1 Day</Text>
          <TouchableOpacity style={styles.bookNow}>
            <Text style={{ color: '#000', fontWeight: 'bold' }}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  header: {
    marginTop: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backArrow: { color: '#fff', fontSize: 24 },
  logo: { fontSize: 24, color: '#FFD700' },
  star: { fontSize: 20, color: '#FFD700' },

  carImage: { width: '100%', height: 220, marginTop: 10 },

  details: {
    flex: 1,
    padding: 20,
    backgroundColor: '#111',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  brand: { color: '#FFD700', fontSize: 14 },
  name: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  location: { color: '#999', marginVertical: 5 },

  specs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  specBox: {
    backgroundColor: '#222',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  specTitle: { color: '#aaa', fontSize: 12 },
  specValue: { color: '#fff', fontSize: 16, fontWeight: 'bold' },

  bottom: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: { color: '#fff', fontSize: 20 },
  bookNow: {
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
});
