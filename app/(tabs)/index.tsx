import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { Image } from "expo-image";
import { View, StyleSheet } from "react-native";

const PLACE_HOLDER = require("@/assets/images/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PLACE_HOLDER} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a Photo" />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 10,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
