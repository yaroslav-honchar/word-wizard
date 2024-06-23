import { ThemedView } from "@/components/ThemedView"
import { ThemedText } from "@/components/ThemedText"
import { SafeAreaView } from "react-native"

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={{ flex: 1 }}>
        <ThemedText>Hello</ThemedText>
      </ThemedView>
    </SafeAreaView>
  )
}
