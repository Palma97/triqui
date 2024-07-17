import { Image, StyleSheet, View, Text } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
        headerImage={
          <Image
            source={require("@/assets/images/ControlTriqui.png")}
            style={styles.reactLogo}
          />
        }
      >
        <Text style={styles.titleContainer}>Welcome to play!</Text>
        <Text style={styles.textHome}>
          Mi nombre es Nicolás Palma, y quiero mostrarles un poco de mi trabajo,
          hoy les traigo un juego de memoria muy popular con animales, para un
          rato agradable, mil gracias, espero les guste.
        </Text>
        <Image
          style={styles.imageNicolacho}
          source={require("../../assets/images/Nicolacho.jpg")}
        />
        <Text style={styles.titleContainer2}>Ve a la GameZone!</Text>
      </ParallaxScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    fontSize: 30,
    backgroundColor: "white",
    textAlign: "left",
    fontWeight: "bold",
  },
  titleContainer2: {
    fontSize: 30,
    marginTop: 20,
    backgroundColor: "white",
    textAlign: "right",
    fontWeight: "bold",
  },
  textHome: {
    textAlign: "justify",
    fontSize: 18,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    height: "100%",
    width: "100%",
  },
  reactLogo: {
    height: 250,
    width: 290,
    bottom: 0,
    top: 40,
    left: 0,
  },
  imageNicolacho: {
    height: 180,
    width: 180,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
