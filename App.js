// Wir importieren Komponenten aus externen Packages, um sie weiter unten benutzen zu können

import { StyleSheet, Text, View } from "react-native";

// Die Liste unserer Events

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
  {
    title: "Tennis",
    location: "Halle",
    numPlayers: 2,
  },
  {
    title: "Golf",
    location: "Course",
    numPlayers: 4,
  },
];

// Eine Komponente, die dazu dient, ein einzelnes Event zu "rendern"

function MyEvent({ title, location, numPlayers }) {
  return (
    <View
      style={{
        backgroundColor: "lightblue",
        padding: 12,
        margin: 12,
        width: "100%",
        borderRadius: 6,
      }}
    >
      <Text style={{ fontWeight: "bold" }}>{title}</Text>
      <Text>{location}</Text>
      <Text>Anzahl der Spieler: {numPlayers}</Text>
    </View>
  );
}

// Einstiegspunkt der App => wird von React native beim Start aufgerufen

export default function App() {
  return (
    <View style={styles.container}>
      {/* Wir iterieren über unsere Events und erzeugen für jedes einzelne Event eine Instanz der MyEvent Komponente */}
      {events.map((event, index) => {
        console.log("Map Callback aufgerufen mit Event Nr.: " + index);
        return (
          <MyEvent
            title={event.title}
            location={event.location}
            numPlayers={event.numPlayers}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
});
