import React from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
import styled from "styled-components/native";

export default function Section({children, title}){
	return (
	<Container>
		<SectionTitle accessibilityRole="header">
			{title}
		</SectionTitle>
		<View
			testID="childContainer"
			style={{ width: "100%" }}
		>
			{children}
		</View>
	</Container>
	);
};

const Container = styled.View`
	display: flex;
	margin-bottom: 32px;
	width: 100%
`;

const SectionTitle = styled.Text`
	color: #333333;
	font-size: 24px;
	font-weight: 500;
	margin-bottom: 16px;
`;