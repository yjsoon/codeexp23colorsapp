import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
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
    let { red, green, blue } = item;
    return <BlockRGB red={red} green={green} blue={blue} />;
  }

  function addColor() {
    // generate three random colours
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    // put them into an object
    const colorObject = {
      red,
      green,
      blue,
      id: colorArray.length.toString()
    };
    // append it to the colorArray
    const newArray = [colorObject, ...colorArray];
    setColorArray(newArray);
  }

  return (
    <View style={styles.container}>
      <Button onPress={addColor} title="Add colour" />
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
