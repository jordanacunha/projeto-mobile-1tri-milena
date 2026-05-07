import { useLocalSearchParams, useRouter } from "expo-router"
import { View, Text, TouchableOpacity, Alert } from "react-native"
import { useEffect, useState } from "react"

const API = "http://localhost:3000"

export default function Horarios() {
  const { id, dia } = useLocalSearchParams()

  const [doctor, setDoctor] = useState<any>(null)

  const router = useRouter()

  useEffect(() => {
    if (!id) return

    fetch(`${API}/doctors/${id}`)
      .then((res) => res.json())
      .then((data) => setDoctor(data))
      .catch((err) => console.log("Erro doctor:", err))
  }, [id])

  const agendar = async (horario: string) => {
    try {
      const response = await fetch(`${API}/appointments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          doctorId: id,
          doctorNome: doctor.nome,
          especialidade: doctor.especialidade,
          dia,
          horario,
          paciente: "Paciente Teste"
        })
      })

      const data = await response.json()

      if (!response.ok) {
        Alert.alert("Erro", data.erro)
        return
      }

      Alert.alert(
        "Sucesso",
        `Consulta agendada no dia ${dia} às ${horario}`
      )

      router.push("/agendamentos")
    } catch (error) {
      console.log(error)
      Alert.alert("Erro", "Não foi possível agendar")
    }
  }

  if (!doctor) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>Carregando...</Text>
      </View>
    )
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>
        {doctor.nome}
      </Text>

      <Text style={{ marginBottom: 5, color: "gray" }}>
        {doctor.especialidade}
      </Text>

      <Text style={{ marginBottom: 20 }}>
        Dia selecionado: {dia}
      </Text>

      {doctor.horarios.map((h: string) => (
        <TouchableOpacity
          key={h}
          onPress={() => agendar(h)}
          style={{
            backgroundColor: "#eee6e6",
            padding: 15,
            borderRadius: 10,
            marginBottom: 10
          }}
        >
          <Text style={{ fontSize: 16 }}>{h}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}