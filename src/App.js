import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, Button, TextInput, Pressable, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import illustration from '../assets/android-icon-foreground.png'
import { Card } from './components/Card';
import { Login } from './screens/Login';

export default function App() {

  const mandaSalve = () => {
    alert('Salve!')
  }

  return (
    <SafeAreaView style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <View>
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
        <Login></Login>
      </View>
    </SafeAreaView>
  );
}
