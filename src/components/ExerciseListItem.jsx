import { Pressable, StyleSheet, Text } from "react-native";
import { Link } from "expo-router";
export default function ExerciseListItem({ item }) {
    return (
      <Link href={`/${item.name}`} asChild>
        <Pressable style={styles.exerciseContainer}>
          <Text style={styles.exerciseName}>{item.name}</Text>
          <Text style={styles.exerciseSubtitle}>
            <Text style={styles.subValue}>{item.muscle}</Text> | <Text style={styles.subValue}>{item.equipment}</Text>
          </Text>
        </Pressable>
      </Link>
    );
  }

  const styles = StyleSheet.create({

    exerciseName: { fontSize: 20, fontWeight: "500" },
    exerciseSubtitle: { color: "dimgray" },
    exerciseContainer: {
      backgroundColor: "#fff",
      padding: 10,
      borderRadius: 10,
      gap: 5,
    },
    subValue:{
        textTransform: "capitalize"
    }
  });
  