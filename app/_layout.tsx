import { Stack } from 'expo-router';
import { View } from 'react-native';

export default function RootLayout() {
  return (
    <Stack>
        <Stack.Screen name="login" />
        <Stack.Screen name="signup" />
    </Stack>
  );
}
