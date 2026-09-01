import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, Button, TextInput, Pressable, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import illustration from '../assets/android-icon-foreground.png'
import { Card } from './components/Card';
import { Login } from './screens/Login';
import { SignUp } from './screens/sign-up';
import Home from './components/Home';

export default function App() {

  const mandaSalve = () => {
    alert('Salve!')
  }

  return (
    <SafeAreaView>
      <View>
        {/* <Login></Login> */}
        {/* <SignUp></SignUp> */}
        <Home></Home>
      </View>
    </SafeAreaView>
  );
}

{/* <Pressable onPress={() => {alert('você clicou no meu botão')}}>
  <Text>texto do meu botão</Text>
  </Pressable>
  
  <Pressable onPress={{ mandaSalve }}>
  <Text>Manda Salve</Text>
  </Pressable>
  
  <Pressable onPress={() => {alert('WOW!')}}>
  <Text>UAU?</Text>
  </Pressable>
  
  <TouchableOpacity onPress={ mandaSalve }>
  <Text>Salve dnv</Text>
  </TouchableOpacity>
  
  <TouchableOpacity onPress={() => {alert('Apertado')} }>
  <Text>Aperta</Text>
  </TouchableOpacity>
  
  <TouchableOpacity onPress={() => {} }>
  <Text>clique aqui</Text>
  </TouchableOpacity> */}