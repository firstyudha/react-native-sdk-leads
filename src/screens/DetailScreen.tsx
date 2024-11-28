import { View, Text, StyleSheet, Button, Image } from "react-native";

const DetailScreen = ({ route,navigation }: { route: any; navigation: any }) => {
  const { event } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.date}>{event.date}</Text>
      <Image source={{ uri: event.image }} style={styles.image} />
      <Text style={styles.description}>{event.description}</Text>
      <Button
        onPress={() => navigation.push("Lead", { event: event })}
        title="Ambil Promonya Sekarang"
        color="#841584"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  date: {
    fontSize: 18,
    color: "#666",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#333",
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
});

export default DetailScreen;
