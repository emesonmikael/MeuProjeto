import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const LoginPage = ({ navigation }) => {
  const handleLogin = () => {
    // Simulação de login bem-sucedido
    navigation.navigate('Principal'); // Navegar para a página principal
  };

  return (
    <View>
      <Text>Bem-vindo! Faça login para continuar:</Text>
      <TouchableOpacity onPress={handleLogin}>
        <Text style={{ color: 'blue' }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;