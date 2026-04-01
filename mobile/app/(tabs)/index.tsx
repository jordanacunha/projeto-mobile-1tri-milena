import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seja bem vindo(a)!</Text>
      <Text style={styles.subtitle}>O que você deseja hoje?</Text>

      <TouchableOpacity
  style={styles.button}
  onPress={() => router.push('/(tabs)/especialidades')}
>
  <Text style={styles.buttonText}>Fazer um agendamento</Text>
</TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/(tabs)/agendamentos')}
      >
        <Text style={styles.buttonText}>Ver meus agendamentos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 50,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#3B28CC',
    padding: 18,
    borderRadius: 12,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});