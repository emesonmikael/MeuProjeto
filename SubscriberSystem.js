import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, ActivityIndicator } from 'react-native';

const SubscriberSystem = () => {
  const [subscriberInfo, setSubscriberInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const checkSubscriber = () => {
    setIsLoading(true);
    setTimeout(() => {
      // Simulação de verificação de assinante
      const info = {
        plan: 'Premium',
        isTrial: false,
      };
      setSubscriberInfo(info);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text>Informações da Conta</Text>

      <TouchableOpacity onPress={checkSubscriber}>
        <Text style={{ color: 'blue' }}>Verificar Assinatura</Text>
      </TouchableOpacity>

      {isLoading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        subscriberInfo && (
          <View>
            <Text>Plano: {subscriberInfo.plan}</Text>
            <Text>Status: {subscriberInfo.isTrial ? 'Período de Teste' : 'Assinante'}</Text>
          </View>
        )
      )}
    </ScrollView>
  );
};

export default SubscriberSystem;