import { Stack, Link } from 'expo-router';
import { Text, TextInput, View } from "react-native";
import { useState } from 'react';

export default function Home() {
  const [text, setText] = useState('');
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />

      <View className="flex-1">
        <View className="bg-green-500 flex-1">
          <Text className={`
            absolute top-[200px] left-[230px]
            transition-all  text-white
            ${text ? 'opacity-100' : 'opacity-0'}
          `}>
            Absolute Position Text Appears
          </Text>
          <TextInput className='bg-red-500 h-20' value={text} onChangeText={setText} />
          <Link className='py-4 bg-blue-500 text-white' href="/details">Go to details</Link>
        </View>
      </View>
    </>
  );
}
