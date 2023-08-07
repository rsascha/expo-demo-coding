// Wir importieren Komponenten aus externen Packages, um sie weiter unten benutzen zu können

import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";

// Die Liste unserer Events => Array mit Objekten

const events = [
  {
    id: "1",
    title: "Fußball",
    location: "Stadion",
    numPlayers: 22,
  },
  {
    id: "2",
    title: "Volleyball",
    location: "Halle",
    numPlayers: 12,
  },
  {
    id: "3",
    title: "Tennis",
    location: "Halle",
    numPlayers: 2,
  },
  {
    id: "4",
    title: "Golf",
    location: "Course",
    numPlayers: 4,
  },
];

// Eine Komponente, die dazu dient, ein einzelnes Event zu "rendern"

function MyEvent({ title, location, numPlayers, backgroundColor }) {
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        padding: 12,
        margin: 12,
        width: "100%",
        borderRadius: 6,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>{title}</Text>
      <Text>{location}</Text>
      <Text>Anzahl der Spieler: {numPlayers}</Text>
    </View>
  );
}

// Einstiegspunkt der App => wird von React native beim Start aufgerufen

export default function App() {
  const [counter, setCounter] = useState(0);

  const maxNumPlayers = 10;

  console.log("---------");

  return (
    <View style={styles.container}>
      <Text>{counter}</Text>
      <Button
        onPress={() => {
          setCounter(counter + 1);
        }}
        title="Increase Counter"
      />

      {/* Wir iterieren über unsere Events und erzeugen für jedes einzelne Event eine Instanz der MyEvent Komponente */}
      {events.map((event, index) => {
        console.log("Map Callback aufgerufen mit Event Nr.: " + index);
        console.log(event);

        let activeColor = "";

        console.log(event.numPlayers < maxNumPlayers);

        if (event.numPlayers < maxNumPlayers) {
          activeColor = "lightblue";
        } else {
          activeColor = "orange";
        }
        return (
          <MyEvent
            key={event.id}
            title={event.title}
            location={event.location}
            numPlayers={event.numPlayers}
            backgroundColor={activeColor}
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
