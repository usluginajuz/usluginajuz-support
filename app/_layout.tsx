import { ThemeProvider } from "@/context/ThemeProvider";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}/>
    </ThemeProvider>
  );
}
