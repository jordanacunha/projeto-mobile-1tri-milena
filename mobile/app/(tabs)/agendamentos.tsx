import { View, Text, StyleSheet } from 'react-native';

export default function AgendamentosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seus agendamentos:</Text>
      <Text style={styles.text}>
        Você não tem nenhum agendamento marcado.
      </Text>
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
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
  },
});