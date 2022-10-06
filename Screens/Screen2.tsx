import * as React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import axios from "axios";

const Screen2 = ({ route, navigation }: any) => {
  const { asteroid_id } = route.params;
  const { randomasteroid_id } = route.params;
  const { useLayoutEffect, useState } = React;
  const [wrongasteroid_idError, setwrongasteroid_idError] = useState(false);
  const [asteroidDetail, setasteroidDetail] = useState({
    id: "",
    name: "",
    nasa_jpl_url: "",
    is_potentially_hazardous_asteroid: "",
  });

  useLayoutEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/neo/rest/v1/neo/${asteroid_id}?api_key=gPzYwfNjbOqdPAicPTu5FggOFD696MoRfDBa2Xpl`
      )
      .then((response) => {
        setasteroidDetail(response.data);
      })
      .catch((error) => {
        setwrongasteroid_idError(true);
      });
  }, []);
  return (
    <View>
      {wrongasteroid_idError ? (
        <Text style={styles.errorMessage}>
          Asteroid Id is Invalid!.Please Enter a valid Asteroid Id.
        </Text>
      ) : (
        <View>
          <Text style={styles.asteroiddata}>Id:{asteroidDetail?.id}</Text>
          <Text style={styles.asteroiddata}>Name:{asteroidDetail?.name}</Text>
          <Text style={styles.asteroiddata}>
            NASA JPL URL: {asteroidDetail?.nasa_jpl_url}
          </Text>
          <Text style={styles.asteroiddata}>
            Is Potentially Hazardous Asteroid:
            {asteroidDetail?.is_potentially_hazardous_asteroid}false
          </Text>
        </View>
      )}
    </View>
  );
};
export default Screen2;

const styles = StyleSheet.create({
  errorMessage: {
    color: "red",
    fontSize: 20,
    margin: 100,
  },
  asteroiddata: {
    color: "black",
    margin: 20,
    fontSize: 16,
    marginLeft: 40,
  },
});
