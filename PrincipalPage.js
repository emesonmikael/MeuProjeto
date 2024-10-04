import React, { useEffect, useState } from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

const PrincipalPage = ({ navigation }) => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const loadChannels = async () => {
      try {
        const filePath = RNFetchBlob.fs.asset('lista.m3u'); // O arquivo .m3u deve estar nos assets do projeto
        const data = await RNFetchBlob.fs.readFile(filePath, 'utf8');
        const lines = data.split('\n');
        const parsedChannels = [];

        for (let i = 0; i < lines.length; i++) {
          if (lines[i].startsWith('#EXTINF')) {
            const logoMatch = lines[i].match(/tvg-logo="(.*?)"/);
            const nameMatch = lines[i].split(',')[1];

            if (logoMatch && nameMatch) {
              const tvgLogo = logoMatch[1];
              const name = nameMatch.trim().replace(/\s/g, '');  // Remove espaços
              const streamUrl = lines[i + 2]?.trim();  // O URL está duas linhas abaixo

              parsedChannels.push({ name, tvgLogo, streamUrl });
            }
          }
        }

        setChannels(parsedChannels);
      } catch (error) {
        Alert.alert('Erro', 'Erro ao carregar o arquivo .m3u');
        console.error('Erro ao carregar o arquivo .m3u', error);
      }
    };

    loadChannels();
  }, []);

  return (
    <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
      {channels.map((channel, index) => (
        <View key={index} style={{ margin: 10, alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate(channel.name)}>
            <Image
              source={{ uri: channel.tvgLogo }}
              style={{ width: 150, height: 150, borderRadius: 10 }}
            />
          </TouchableOpacity>
          <Text>{channel.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default PrincipalPage;