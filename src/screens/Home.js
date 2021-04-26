import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import styled from "styled-components/native";

import QuickResume from "../components/QuickResume"
import Section from "../components/Section"

export default function Home({ route, navigation }) {
  return (
    <HomeScreen style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', padding: 24 }}>
      <Section title="Olá, Rafael!" >
        <QuickResume onPress={() => { navigation.navigate("Details")}} /> 
      </Section>
      <Section title="Itens Recentes" />
    </HomeScreen>
  );
}

const HomeScreen = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 24px
`