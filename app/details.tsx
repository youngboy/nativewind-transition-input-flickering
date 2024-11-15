import { Stack, useLocalSearchParams } from 'expo-router';
import { TextInput, View } from 'react-native';

export default function Details() {
  const { name } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{ title: 'Details' }} />
      <View className="flex-1">
        <View className="bg-green-500 flex-1">
        </View>
        <View className="bg-yellow-500 h-20">
          <TextInput className='flex-1' placeholder='Enter something' />
        </View>
      </View>
    </>
  );
}
