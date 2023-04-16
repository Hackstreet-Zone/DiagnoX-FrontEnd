import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Report from "./src/screens/Report";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ImagePickerr from "./src/screens/ImagePicker";

const Stack = createStackNavigator();

function MyStack() {
  return <Stack.Navigator></Stack.Navigator>;
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ImagePicker" component={ImagePickerr} />
        <Stack.Screen name="Report" component={Report} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <ImagePicker />
//       {/* <Text className="text-red-500">Hello</Text> */}
//       <StatusBar style="light" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
