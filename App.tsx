import { Video } from "expo-av";
import * as React from "react";
import { Button, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function App() {
  const [videoVisible, setVideoVisible] = React.useState(false);
  return (
    <View style={styles.container}>
      {videoVisible && (
        <Video
          resizeMode="contain"
          source={{
            uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          useNativeControls
        />
      )}
      <View>
        <Button
          title={videoVisible ? "Hide" : "Show"}
          onPress={() => setVideoVisible(!videoVisible)}
        />
      </View>
    </View>
  );
}
