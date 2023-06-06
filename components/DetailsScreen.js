import { View, Text } from "react-native";

export default function DetailsScreen({ route }) {
  return (
    <Text>
      Hello! This is the thing you sent:
      {route.params.red}, {route.params.green}, {route.params.blue},
    </Text>
  );
}
