import { StyleSheet } from "react-native";
import React from "react";
import { Image, ImageSource } from "expo-image";

type Props = {
  imgSource: ImageSource;
  selectedImage: string | null;
};

const ImageViewer = ({ imgSource, selectedImage }: Props) => {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

  return <Image source={imageSource} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 10,
  },
});

export default ImageViewer;
