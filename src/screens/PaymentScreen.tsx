import { Alert } from 'react-native';
import MidtransPayment from '../components/MidtrandsPayment';

const PaymentScreen = ({ route,navigation }: { route: any; navigation: any }) => {
  const {redirect_url} = route.params.event
  
  const handleSuccess = () => {
    navigation.navigate("SDK")
  };

  const handleFailure = (url:any) => {
    Alert.alert('Payment Failed', `Redirected URL: ${url}`);
    navigation.navigate("SDK")
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
