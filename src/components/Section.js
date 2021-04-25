import React from 'react';
import {
	View,
	Text,
	useColorScheme,
	StyleSheet
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}) => {
	const isDarkMode = useColorScheme() === 'dark';
	return (
	<View style={{ color: isDarkMode ? Colors.dark : Colors.light }}>
	  <View style={styles.sectionContainer}>
		<Text
		  accessibilityRole="header"
		  style={[
			styles.sectionTitle,
			{
			  color: isDarkMode ? Colors.white : Colors.black,
			},
		  ]}>
		  {title}
		</Text>
		<Text
			testID="description"
			style={[
				styles.sectionDescription,
				{
				color: isDarkMode ? Colors.light : Colors.dark,
				},
			]}>
		  {children}
		</Text>
	  </View>
	</View>
	);
};

const styles = StyleSheet.create({
	sectionContainer: {
		flex: 1,
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
	},
	highlight: {
		fontWeight: '700',
	},
  });

export { Section };