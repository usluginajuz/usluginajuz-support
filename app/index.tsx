import Header from "@/components/Header/Header";
import Logo from "@/components/Header/Logo";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <>
      <Header>
          <Logo />
      </Header>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#e7e4e1",
        }}
      >
        <Text>Strona pomocnicza witryny Usługi Na Już</Text>
      </View>
    </>
  );
}
