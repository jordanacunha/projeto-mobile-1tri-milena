import { View, Text, TouchableOpacity } from "react-native"
import { useRouter, useLocalSearchParams } from "expo-router"
import { useEffect, useState } from "react"

const API = "http://localhost:3000"

export default function DiasDisponiveis() {
  const router = useRouter()

  const params = useLocalSearchParams()

  const id = Array.isArray(params.id)
    ? params.id[0]
    : params.id

  const [doctor, setDoctor] = useState<any>(null)

  useEffect(() => {
    if (!id) return

    fetch(`${API}/doctors/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Doctor:", data)
        setDoctor(data)
      })
      .catch((err) => console.log("Erro:", err))
  }, [id])

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
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20
        }}
      >
        Dias disponíveis
      </Text>

      {doctor.dias && doctor.dias.length > 0 ? (
        doctor.dias.map((dia: string) => (
          <TouchableOpacity
            key={dia}
            onPress={() =>
              router.push({
                pathname: "/horarios",
                params: {
                  id,
                  dia
                }
              })
            }
            style={{
              backgroundColor: "#ddd",
              padding: 15,
              marginBottom: 10,
              borderRadius: 10
            }}
          >
            <Text>{dia}</Text>
          </TouchableOpacity>
        ))
      ) : (
        <Text>Nenhum dia disponível</Text>
      )}
    </View>
  )
}