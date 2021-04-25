import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import Section from "../components/Section"

export default function Home({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Section title="Home" >
        <Text>Seja bem-vindo ao app sample</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Details") }>
          <Text>Mudar Rota</Text>
        </TouchableOpacity>
      </Section>
    </View>
  );
}