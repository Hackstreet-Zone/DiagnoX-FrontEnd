import { ActivityIndicator } from "react-native";
import { StyleSheet, View, Pressable, Text } from "react-native";
// import "../input.css";

export default function Loading({ }) {
    
  return (
    <View
      style={styles.boxmain}
      className="justify-center items-center flex absolute bg-black/30 h-full z-10 w-full"
    >
      <View
        style={styles.box}
        className="relative w-auto mx-auto bg-white z-10 px-5 py-4 rounded-md self-center place-self-center"
      >
        <ActivityIndicator color="#07D070" size="large" />
        <Text className="text-lg pt-2 text-[#07D070] ">analyzing...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boxmain: {
    // zIndex: 1,
    // position: "absolute",
    // flex: 1,
    // // flexGrow:1,
    // height: "100%",
  },
  box: {
    // flex: 1,
    // flexGrow: 1,
    // height: 200,
    // width: 200,
    // backgroundColor: "black",
    // borderRadius: 13,
    // opacity: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    // color: "white",
  },
});
