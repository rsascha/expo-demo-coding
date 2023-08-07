import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const events = [
  {
    title: "Fußball",
    location: "Stadion",
    numPlayers: 22,
  },
  {
    title: "Volleyball",
    location: "Halle",
    numPlayers: 12,
  },
];

function MyEvent({ title, location, numPlayers }) {
  return (
    <View style={{ backgroundColor: "lightblue" }}>
      <Text style={{ fontWeight: "bold" }}>{title}</Text>
      <Text>{location}</Text>
      <Text>Anzahl der Spieler: {numPlayers}</Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{events[0].title}</Text>
      <Text>{events[0].location}</Text>
      <Text>{events[0].numPlayers}</Text>
      <Text>{events[1].title}</Text>
      <Text>{events[1].location}</Text>
      <Text>{events[1].numPlayers}</Text>

      <MyEvent title="TestTitle" location="TestLocation" numPlayers={5} />
      <MyEvent title="TestTitle" location="TestLocation" numPlayers={5} />
      <MyEvent title="TestTitle" location="TestLocation" numPlayers={5} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
