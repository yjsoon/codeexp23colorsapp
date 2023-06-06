import { View, Text, StyleSheet } from "react-native";

export default function DetailsScreen({ route }) {
  const { red, green, blue } = route.params;
  const darkMode = red + green + blue < 300 ? true : false;

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
