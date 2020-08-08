import * as React from 'react';
import { useRef } from 'react';
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
	Image,
	ImageBackground,
	Animated,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useWindowDimensions } from 'react-native';

export default function HomeScreen({ navigation }) {
	const windowWidth = useWindowDimensions().width;
	const spring = useRef(new Animated.Value(1)).current;
	const shake = () => {
		spring.setValue(0.6);
		Animated.spring(spring, {
			toValue: 1,
			friction: 1,
			useNativeDriver: true,
		}).start();
	};
	let renderItem = ({ item }) => {
		return (
			<TouchableOpacity
				style={styles.itemContainer}
				onPress={() => {
					navigation.navigate('Video', { video: item });
				}}
				onLongPress={() => {
					shake();
				}}
			>
				<Animated.Image
					style={[styles.itemCover, { width: (windowWidth - 80) / 3 }, { transform: [{ scale: spring }] }]}
					source={{
						uri: item.cover,
					}}
				/>
				<Text style={styles.itemText}>{item.name}</Text>
			</TouchableOpacity>
		);
	};
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#232F3A' }}>
			<ImageBackground
				style={{ flex: 1 }}
				source={{
					uri:
						'https://s3-alpha-sig.figma.com/img/4d24/6634/8dbc246774f52f481ea3523c2e8922dd?Expires=1597622400&Signature=B0tLTGecxU48oPMT1DHFXyHMjICXKJsHXzSjvZvrKT9owR9R4H4ZQ-IGV4huN87~XE-ATJeBMyde7LYuwP0~kqwi45aC9sDVVntkuu1Zq233SLp2Ua6IRMLZy1QCEqP4aUgRjRUB6PpB7SxcSS-~lhEVV32KVpwSXp~NVPkbrbxanKPUCKx17YvDY69BQP4qydR6lquf36TU7D4RRRunnalHwgY~buIy0IDwinj09Iu0o88np-wLvNSPWu2HitWvo-dGluy18TqmHIT5tBrG3-ru2XOsORcpkjwJ4KFupwRv84GxTTmA0KWe5KuHai6Iv0zerl~2Xf4AGkJV~TMsnw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
				}}
			>
				<FlatList
					horizontal={false}
					numColumns={3}
					keyExtractor={(item) => item.name}
					style={{ margin: 10, backgroundColor: 'rgba(0, 0, 0, 0.24)' }}
					data={[
						{
							name: 'vimeo',
							url: 'https://player.vimeo.com/video/392590844',
							cover:
								'data:image/png;base64,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',
						},
						{
							name: 'cat',
							url: 'https://www.youtube.com/watch?v=1YUjaoOQLz8',
							cover:
								'https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg',
						},
						{
							name: 'cat',
							url: 'https://www.youtube.com/watch?v=1YUjaoOQLz8',
							cover:
								'https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg',
						},
						{
							name: 'cat',
							url: 'https://www.youtube.com/watch?v=1YUjaoOQLz8',
							cover:
								'https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg',
						},
					]}
					renderItem={renderItem}
				/>
				<Text style={{ textAlign: 'center' }}>Dont long press the video</Text>
			</ImageBackground>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	list: {
		flex: 1,
		justifyContent: 'center',
	},
	itemContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10,
		backgroundColor: '#232F3A',
		borderRadius: 10,
	},
	itemText: { fontSize: 20, color: 'white' },
	itemCover: { height: 80, width: 100 },
});
