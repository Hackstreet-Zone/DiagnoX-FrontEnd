import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

import Button from "../components/Button";
import ImageViewer from "../components/ImageViewer";
import Loading from "../components/Loading";
import { useNavigation } from "@react-navigation/native";

const PlaceholderImage = require("../../assets/images/background-image.png");

export default function ImagePickerr({ navigation: { navigate } }) {
  const navigation = useNavigation();
  const [loadings, setLoadings] = useState(false);
  const [data, setData] = useState("false");
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };
  async function api_content() {
    const response = await fetch(
      // Make this YOUR URL
      "https://api.publicapis.org/entries",
      {}
    );
    const json = await response.json();
    return json;
  }

  const pressed = async () => {
    setLoadings(true);
    await api_content().then((days) => {
      // console.log(days);
      setData(days);
      setLoadings(false);
      navigation.navigate("Report");
    });

    // navigation.navigate({ name: "Report" });
  };

  return (
    <View className="flex bg-[#EFFEF9] items-center flex-1">
      <Text className=" text-3xl font-bold text-[#212121] text-left pt-20 w-full pl-6">
        DiagnoX
      </Text>
      <Text className=" text-md text-[#212121] opacity-70 text-left pt-2 w-full pl-6">
        Please select a X-ray to analyze.
      </Text>
      {/* <Loading /> */}
      {loadings === true ? <Loading /> : null}

      {/* {this.state.yourVariable === 'news' && <Text>{data}<Text/>} */}

      <View className="flex-1 pt-[38px]">
        <ImageViewer
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>
      <View style={styles.footerContainer}>
        <Button
          theme="primary"
          label="Choose a X-ray"
          onPress={pickImageAsync}
        />
        <Button label="Use this Picture" onPress={pressed} style />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
