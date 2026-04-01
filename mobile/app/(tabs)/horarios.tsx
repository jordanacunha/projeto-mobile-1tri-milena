import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function Horarios() {
  const horarios = ['09:00', '10:30', '13:30', '15:00'];

  function confirmar(horario: string) {
    Alert.alert('Agendamento confirmado!', `Horário: ${horario}`);
  }

  return (
    <View style={styles.container}>
      {horarios.map((hora, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => confirmar(hora)}
        >
          <Text style={styles.buttonText}>{hora}</Text>
        </TouchableOpacity>
      ))}
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