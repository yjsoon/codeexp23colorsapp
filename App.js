import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BlockRGB from "./components/BlockRGB";

function HomeScreen() {
  const [colorArray, setColorArray] = useState([
    { red: 255, green: 127, blue: 0, id: "0" },
    { red: 0, green: 127, blue: 255, id: "1" },
    { red: 255, green: 0, blue: 255, id: "2" },
    { red: 0, green: 0, blue: 100, id: "3" }
  ]);

  function renderBlockRGB({ item }) {
    return <BlockRGB red={item.red} green={item.green} blue={item.blue} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={colorArray}
        renderItem={renderBlockRGB}
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    alignItems: "center"
  },
  list: {
    width: "100%"
  }
});
