import * as React from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

export default function VideoScreen({ route, navigation }) {
	const video = route.params && route.params.video;
	if (video) {
		console.log('url' + video.url);
		return (
			<View style={{ flex: 1, backgroundColor: '#232F3A' }}>
				<WebView
					style={{ marginTop: Platform.OS == 'ios' ? 20 : 0 }}
					javaScriptEnabled={true}
					domStorageEnabled={true}
					source={{ uri: video.url }}
				/>
			</View>
		);
	} else {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#232F3A' }}>
				<Text style={{ fontSize: 20 }}>Select a video to play in home page</Text>
			</View>
		);
	}
}
