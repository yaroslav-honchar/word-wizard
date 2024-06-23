import { SafeAreaView } from "react-native"

import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"

export default function HomeScreen() {
  return (
    <SafeAreaView className={"flex-grow"}>
      <ThemedView className={"flex-grow"}>
        <ThemedText className={"bg-blue-600"}>Hello</ThemedText>
      </ThemedView>
    </SafeAreaView>
  )
}
