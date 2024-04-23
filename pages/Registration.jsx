import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Registration() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Register Screen</Text>
      <Button
        title="Registration"
        onPress={() => console.log("Registration button pressed")}
      />
      <Button
        title="Already have an account? Login"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
