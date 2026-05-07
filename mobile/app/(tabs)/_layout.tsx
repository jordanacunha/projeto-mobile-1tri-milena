import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="agendamentos"
        options={{
          title: 'Agendamentos',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="clipboard" size={24} color="black" />
          ),
        }}
      />

    <Tabs.Screen
        name="dias"
        options={{
          title: 'Dias Disponíveis',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />

       <Tabs.Screen
        name="horarios"
        options={{
          title: 'Horários',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="dashboard" size={24} color="black" />
          ),
        }}
      />


      <Tabs.Screen
        name="especialidades"
        options={{
          title: 'Consultas',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="solution" size={24} color="black" />
          ),
        }}
      />
      
      <Tabs.Screen
        name="profissionais"
        options={{
          title: 'Profissionais',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="user-doctor" size={24} color="black" />
          ),
        }}
      />

    </Tabs>
  );
}