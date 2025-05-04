import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from "react-native";
import exercises from "../../assets/data/exercises.json";
import ExerciseListItem from "../../src/components/ExerciseListItem";
import { useQuery } from "@tanstack/react-query";
import { gql, request } from 'graphql-request';

const url = 'https://shagoutang.us-east-a.ibm.stepzen.net/api/wishing-dog/graphql';
const exercisesQuery = gql`
query exercises($muscle: String, $name: String) {
  exercises(muscle: $muscle, name: $name) {
    name
    muscle
  }
}
`;

export default function ExercisesScreen() {

  const { data, isLoading } = useQuery({
    queryKey: ['exercises'],
    queryFn: async () => {
      return request({
        url, document: exercisesQuery, requestHeaders: {
          "Authorization": "apikey shagoutang::local.net+1000::00dc84ac4c87d268ddec0d2d96d46258f55e20633812d5cce13da336da328836"
        }
      });
    },

  })
  if (isLoading) {
    return <ActivityIndicator />
  }

  // if (error)
  //   return <Text>Failed to fecth exercises{error.message}</Text>
  return (
    <View style={styles.container}>
      <FlatList
        data={data?.exercises}
        contentContainerStyle={{ gap: 5 }}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <ExerciseListItem item={item} />}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
});
