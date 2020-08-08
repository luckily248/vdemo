import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import VideoScreen from './screens/VideoScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MainNav = createBottomTabNavigator();
export default function App() {
	return (
		<NavigationContainer>
			<MainNav.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ color, size }) => {
						const icons = {
							Home: 'home',
							Video: 'video',
						};

						return <MaterialCommunityIcons name={icons[route.name]} color={color} size={size} />;
					},
				})}
				tabBarOptions={{
					activeTintColor: 'white',
					inactiveTintColor: 'grey',
					style: {
						backgroundColor: '#232F3A',
					},
				}}
				animationEnabled
			>
				<MainNav.Screen name="Home" component={HomeScreen} />
				<MainNav.Screen name="Video" component={VideoScreen} />
			</MainNav.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
