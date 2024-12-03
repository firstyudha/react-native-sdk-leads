import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Image,
} from 'react-native';
import postPayment from '../services/PaymentServices';

const logo = require('../assets/logo/logo.png')

export default function LeadPayScreen({ route,navigation }: { route: any; navigation: any }) {
  const { campaign_id, product_price, campaign_name } = route.params.event;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const price = product_price
  

  const handleSubmit = async () => {
    const d = new Date();
    let time = d.getTime();
    const order_id = 'SUL-'+ time

    if (!name || !email || !address || !phoneNumber) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const data = {
      "Payment":{
        "transaction_details": {
            "order_id": order_id,
            "gross_amount": price
        },
        "payment_type": "gopay",
        "customer": name,
        "item_details": [
            {
                "id": campaign_id,
                "price": price,
                "quantity": 1,
                "name": campaign_name
            }
        ]
      },
      "Order": {
        "quick_order_id": order_id,
        "name": name,
        "email": email,
        "phone_number": phoneNumber,
        "address": address,
        "campaign_id": campaign_id,
        "status": "UNPAID"
      }
    }

    try {
      const pay = await postPayment(data)
      const payData = pay.result
      console.log('paydata',payData);
      
      navigation.push("Payment", { event: payData })
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      } else {
        Alert.alert('Error', 'An unexpected error occurred');
      }
    }

  };



  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView >
        <View style={styles.inputContainer}>
          <Image
            source={logo}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter your full name"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="Enter your phone number"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email address"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={setAddress}
            placeholder="Enter your address"
            placeholderTextColor="#999"
            multiline
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  formContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
