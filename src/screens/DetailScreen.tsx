import { View, Text, StyleSheet, Button, Image, useWindowDimensions  } from "react-native";
import RenderHtml from 'react-native-render-html';

const DetailScreen = ({ route,navigation }: { route: any; navigation: any }) => {
  const { width } = useWindowDimensions();
  const { event } = route.params;
  const source = {
    html : event.campaign_desc ?? ''
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.campaign_name}</Text>
      <Text style={styles.date}>{event.date}</Text>
      <Image source={{ uri: event.product_image }} style={styles.image} />
      <RenderHtml
        contentWidth={width}
        source={source}
      />
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
    marginTop:20,
    marginBottom:20,
  },
  rtxDesc: {
    color: "#333",
    marginTop:20,
    marginBottom:20,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
});

export default DetailScreen;
