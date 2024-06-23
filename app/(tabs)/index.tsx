import { SafeAreaView } from "react-native"

import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={{ flex: 1 }}>
        <ThemedText>Hello</ThemedText>
      </ThemedView>
    </SafeAreaView>
  )
}
