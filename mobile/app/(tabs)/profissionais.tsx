import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

export default function Profissionais() {
  const { tipo } = useLocalSearchParams();

  const profissionais = {
    Dermatologista: [
      'Dra. Ana Paula',
      'Dr. Marcelo Silva',
    ],
    Dentista: [
      'Dr. Roberto',
      'Dra. Fernanda',
    ],
    'Clínico Geral': [
      'Dr. João Pedro',
      'Dra. Camila Souza',
      'Dr. Lucas Martins',
    ],
  };

  const lista =
    profissionais[tipo as keyof typeof profissionais] || [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{tipo}</Text>

      {lista.map((profissional, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() =>
            router.push({
              pathname: '/(tabs)/horarios',
              params: { profissional },
            })
          }
        >
          <Text style={styles.text}>{profissional}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
  },
});