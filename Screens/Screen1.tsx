import axios from "axios";
import * as React from "react";
import { View, TextInput, StyleSheet, Button, Alert } from "react-native";

const Screen1 = ({ navigation }: any) => {
  const { useState, useRef } = React;
  const [asteroid_id, setasteroid_id] = useState("");
  const [randomasteroid_id, setrandomasteroid_id] = useState("");
  const [minimumValueError, setMinimumValueError] = useState(true);
  const [loading, setLoading] = useState<boolean>(false);

  const errorRef = useRef(false);

  // const handleButtonPress = () => {
  //   navigation.push("About Astroid", { asteroid_id });
  // };

  // const handleBtnPress = (asteroid_id: any) => {
  //   axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY`);
  //   navigation.push("About Astroid", { asteroid_id });
  // };

  const handleBtnPress = () => {
    setLoading(true);
    axios
      .get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY`)
      .then((response) => {
        const randomNumber = Math.floor(
          Math.random() * response.data.near_earth_objects.length
        );
        navigation.navigate("About Astroid", {
          asteroid_id: response.data.near_earth_objects[randomNumber].id,
        });
      })
      .catch(() => {
        Alert.alert("Error", "Something Went wrong", [
          {
            text: "ok",
          },
        ]);
      })
      .finally(() => setLoading(false));
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
          // onPress={handleButtonPress}
          title="Submit"
          onPress={() => {
            navigation.navigate("About Astroid", { asteroid_id });
          }}
        />
      </View>
      <View style={styles.btn}>
        {/* <Button onPress={handleBtnPress} title="Random Asteroid" /> */}
        <Button
          disabled={loading}
          title="Random Asteroid"
          onPress={() => {
            handleBtnPress();
          }}
        />
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
