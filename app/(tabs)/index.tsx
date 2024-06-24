import { SafeAreaView } from "react-native"

import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"

export default function HomeScreen() {
  return (
    <SafeAreaView className={"flex-grow"}>
      <ThemedView className={"flex-grow"}>
        <ThemedText>Hello</ThemedText>
      </ThemedView>
    </SafeAreaView>
  )
}
