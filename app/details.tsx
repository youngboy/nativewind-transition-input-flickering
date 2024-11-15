import { Stack, useLocalSearchParams } from 'expo-router';
import { Text, TextInput, View } from 'react-native';

export default function Details() {
  const { name } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{ title: 'Details' }} />
      <View className="flex-1">
        <View className="bg-green-500 flex-1">
        </View>
        <Text>
        👇 try input something in the input field below,
          noticed the input is flickering
        </Text>
        <View className="bg-yellow-500 h-20">
          <TextInput className='flex-1' placeholder='Enter something' />
        </View>
      </View>
    </>
  );
}
