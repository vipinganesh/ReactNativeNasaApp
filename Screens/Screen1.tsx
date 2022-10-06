import axios from "axios";
import * as React from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

const Screen1 = ({ navigation }: any) => {
  const { useState, useRef } = React;
  const [asteroid_id, setasteroid_id] = useState("");
  const [randomasteroid_id, setrandomasteroid_id] = useState("");
  const [minimumValueError, setMinimumValueError] = useState(true);

  const errorRef = useRef(false);

  const handleButtonPress = () => {
    navigation.push("About Astroid", { asteroid_id });
  };

  const handleBtnPress = () => {
    axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY`);
    // navigation.push("About Astroid", { asteroid_id });
  };

  const handleChange = (value: string) => {
    if (value.length < 6) {
      setMinimumValueError(true);
      errorRef.current = true;
    } else {
      setMinimumValueError(false);
      errorRef.current = false;
    }
    setasteroid_id(value);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor="#000"
        autoFocus={true}
        style={styles.input}
        clearButtonMode="always"
        onChangeText={handleChange}
        placeholder="Enter Asteroid Id"
        value={asteroid_id}
      />
      <View style={styles.button}>
        <Button
          disabled={minimumValueError}
          onPress={handleButtonPress}
          title="Submit"
        />
      </View>
      <View style={styles.btn}>
        <Button onPress={handleBtnPress} title="Random Asteroid" />
      </View>
    </View>
  );
};
export default Screen1;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    color: "black",
    backgroundColor: "white",
    height: 50,
    width: 150,
    borderWidth: 1,
    borderRadius: 6,
  },
  button: {
    width: 150,
    height: 60,
    borderRadius: 5,
    marginTop: 20,
  },
  btn: {
    width: 150,
    height: 60,
    borderRadius: 5,
    marginTop: 10,
  },
});
function useLayoutEffect(arg0: () => void) {
  throw new Error("Function not implemented.");
}
