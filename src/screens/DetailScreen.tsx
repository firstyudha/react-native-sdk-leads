import { View, Text, StyleSheet, Image, useWindowDimensions, TouchableOpacity,Alert  } from "react-native";
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
        <View style={styles.pengajuanContainer}>
          <TouchableOpacity
            style={[styles.pengajuanButton, { marginRight: 10 }]}
            onPress={() => navigation.push("Lead", { event: event })}
          >
            <Text style={styles.pengajuanButtonText}>Ajukan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.pengajuanButton}
            onPress={() => navigation.push("LeadPay", { event: event })}
          >
            <Text style={styles.pengajuanButtonText}>Beli Sekarang</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  pengajuanContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pengajuanButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    flex: 1,
  },
  pengajuanButtonText: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: '600',
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
    fontSize: 14,
    color: '#666',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
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
