import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BlockRGB from "./components/BlockRGB";
import DetailsScreen from "./components/DetailsScreen";

function HomeScreen({ navigation }) {
  const [colorArray, setColorArray] = useState([]);

  useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => <Button onPress={addColor} title="+" />
    });
  });

  function renderBlockRGB({ item }) {
    let { red, green, blue } = item;
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Details", { ...item });
        }}>
        <BlockRGB red={red} green={green} blue={blue} />
      </TouchableOpacity>
    );
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

  function resetColors() {
    setColorArray([]);
  }

  return (
    <View style={styles.container}>
      {/* <Button onPress={addColor} title="Add colour" /> */}
      <Button onPress={resetColors} title="Reset colours" />

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
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation, route }) => ({
            // Add a placeholder button without the `onPress` to avoid flicker
            headerRight: () => <Button title="+" />
          })}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
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
