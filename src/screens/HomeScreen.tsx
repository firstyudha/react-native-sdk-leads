// @ts-nocheck
import { useEffect, useState } from "react";
import { 
  View, 
  FlatList, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Image,
  ActivityIndicator,
  Alert,
  RefreshControl
 } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getEventsThunk } from "../redux/slices/EventSlice";

const HomeScreen = ({ navigation }:{navigation:any}) => {
  // const events = [
  //   {
  //     id: "1",
  //     title: "BAF Festival Perlengkapan Rumah Tangga",
  //     date: "2024/11/19",
  //     image: "https://baf-mobile-prod.oss-ap-southeast-5.aliyuncs.com/bannerweb%2F1732267646071.jpeg?Expires=1732893178&OSSAccessKeyId=LTAI5tFAFQkoFApg3bDqxLsA&Signature=T0fUqXTHKCxijcK7qbJphn6qqFQ%3D", // Ganti dengan URL gambar,
  //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio libero consequatur reprehenderit expedita obcaecati ea voluptatibus, porro nam velit dolore! Natus necessitatibus laudantium molestias velit optio nobis hic alias consequatur."
  //   },
  //   {
  //     id: "2",
  //     title: "BAF Festival Motor Baru Yamaha",
  //     date: "2024/11/18",
  //     image: "https://via.placeholder.com/150", // Ganti dengan URL gambar
  //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio libero consequatur reprehenderit expedita obcaecati ea voluptatibus, porro nam velit dolore! Natus necessitatibus laudantium molestias velit optio nobis hic alias consequatur."
  //   },
  //   {
  //     id: "3",
  //     title: "BAF Expo Batulicin",
  //     date: "2024/11/18",
  //     image: "https://baf-mobile-prod.oss-ap-southeast-5.aliyuncs.com/bannerweb%2F1731997994755.jpeg?Expires=1732656241&OSSAccessKeyId=LTAI5tFAFQkoFApg3bDqxLsA&Signature=GPM%2FoPiYZUHI3FLEz6Fa4kCmwK0%3D", // Ganti dengan URL gambar
  //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio libero consequatur reprehenderit expedita obcaecati ea voluptatibus, porro nam velit dolore! Natus necessitatibus laudantium molestias velit optio nobis hic alias consequatur."
  //   },
  //   {
  //     id: "4",
  //     title: "BAF Festival Motor Baru Yamaha",
  //     date: "2024/11/18",
  //     image: "https://via.placeholder.com/150", // Ganti dengan URL gambar
  //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio libero consequatur reprehenderit expedita obcaecati ea voluptatibus, porro nam velit dolore! Natus necessitatibus laudantium molestias velit optio nobis hic alias consequatur."
  //   },
  //   {
  //     id: "5",
  //     title: "BAF Expo Batulicin",
  //     date: "2024/11/18",
  //     image: "https://via.placeholder.com/150", // Ganti dengan URL gambar
  //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio libero consequatur reprehenderit expedita obcaecati ea voluptatibus, porro nam velit dolore! Natus necessitatibus laudantium molestias velit optio nobis hic alias consequatur."
  //   },
    
  // ];



  const eventsStore = useSelector(state => state.event)
  const {error,loading,events} = eventsStore

  const dispatch = useDispatch()

  const fetchCampaign = async () => {
    try {
      await dispatch(getEventsThunk())
    } catch (error) {
      Alert.alert('Fetch data failed');
    } finally {
    }
  }

  useEffect(()=>{
    fetchCampaign()
  },[])


  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  if(error){
    return(
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Something went wrong</Text>
      </View>
    )
  }
const renderEvent = ({ item }:{item:any}) => (
<TouchableOpacity
    style={styles.card}
    onPress={() => navigation.navigate("Detail", { event: item })}
>
    <Image 
      source={{ uri: item.product_image }} 
      style={styles.image} 
    />
    <Text style={styles.title}>{item.campaign_name}</Text>
    <Text style={styles.date}>{item.date}</Text>
</TouchableOpacity>
);

return (
<View style={styles.card}>
  <FlatList
      data={events}
      renderItem={renderEvent}
      keyExtractor={(item) => item.campaign_id.toString()}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={fetchCampaign} />
      }
    />
</View>
);
}

const styles = StyleSheet.create({
loadingContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f5f5f5',
},
loadingText: {
  marginTop: 10,
  fontSize: 16,
  color: '#333',
},
card: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    fontSize: 14,
    color: "#666",
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
});

export default HomeScreen
