import { Alert } from 'react-native';
import MidtransPayment from '../components/MidtrandsPayment';

const PaymentScreen = ({ route,navigation }: { route: any; navigation: any }) => {
  const {redirect_url} = route.params.event
  
  const handleSuccess = (url:any) => {
    Alert.alert('Payment Success', `Redirected URL: ${url}`);
    navigation.navigate("SDK")
  };

  const handleFailure = (url:any) => {
    Alert.alert('Payment Failed', `Redirected URL: ${url}`);
  };

  return (
    <MidtransPayment
      redirectUrl={redirect_url}
      onSuccess={handleSuccess}
      onFailure={handleFailure}
    />
  );
};

export default PaymentScreen;
