import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Login() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Button
        title="Don’t have an account? Register"
        onPress={() => navigation.navigate("Registration")}
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
