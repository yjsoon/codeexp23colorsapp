import { View, Text, StyleSheet } from "react-native";
import { useEffect } from "react";

export default function DetailsScreen({ route }) {
  const { red, green, blue } = route.params;
  const darkMode = red + green + blue < 300 ? true : false;

  // runs line 10 when showing up, and line 12 when leaving
  useEffect(() => {
    console.log("HIII ITS YO FRIEND DETAILSSSS");
    return () => {
      console.log("BYYEEEEEEE");
    };
  });

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }
      ]}>
      <Text style={{ color: darkMode ? "white" : "black" }}>Red: {red}</Text>
      <Text style={{ color: darkMode ? "white" : "black" }}>
        Green: {green}
      </Text>
      <Text style={{ color: darkMode ? "white" : "black" }}>Blue: {blue}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
