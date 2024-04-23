import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import Header from "../components/Header";
import HomeImage from "../images/home.png";

export default function Home() {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.background}>
            <Header />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>
                Take good <Text style={styles.titleSpan}>care</Text>
                <Text style={styles.title}> of your small pets</Text>
              </Text>
            </View>
            <Text style={styles.subtitle}>
              Choosing a pet for your home is a choice that is meant to enrich
              your life with immeasurable joy and tenderness.
            </Text>
          </View>
          <View style={styles.homeImageContainer}>
            <Image source={HomeImage} style={styles.homeImage} />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    overflowY: "auto",
    zIndex: -10,
  },
  background: {
    paddingTop: 18,
    paddingBottom: 50,
    paddingRight: 20,
    paddingLeft: 20,

    backgroundColor: "#F6B83D",
    borderRadius: 30,
  },
  titleContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 24,
  },
  title: {
    fontFamily: "Manrope",
    fontSize: 50,
    fontWeight: "bold",
    lineHeight: 48,
    letterSpacing: -0.48,
    textAlign: "left",
    color: "rgb(255, 255, 255)",
  },
  titleSpan: {
    fontFamily: "Manrope",
    fontSize: 50,
    fontWeight: "bold",
    lineHeight: 48,
    letterSpacing: -1.5,
    textAlign: "left",
    color: "rgba(255, 255, 255, 0.4)",
  },
  subtitle: {
    fontFamily: "Manrope",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 18,
    textAlign: "left",
    color: "rgb(255, 255, 255)",
  },
  homeImageContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    zIndex: -10,
  },
  homeImage: {
    borderRadius: 30,

    objectFit: "cover",
    width: "100%",
  },
});
