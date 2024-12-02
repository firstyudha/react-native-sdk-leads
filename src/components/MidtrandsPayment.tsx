import { View, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import WebView from 'react-native-webview';

const MidtransPayment = ({ redirectUrl, onSuccess, onFailure }:{ redirectUrl:any, onSuccess:any, onFailure:any }) => {
  const [loading, setLoading] = useState(true);

  const handleNavigationStateChange = (navState:any) => {
    const { url } = navState;

    // Check if the URL contains success or failure parameters
    if (url.includes('status_code=200')) {
      // Handle success
      onSuccess(url);
    } else if (url.includes('status_code=404')) {
      // Handle failure
      onFailure(url);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {loading && <ActivityIndicator size="large" color="#0000ff" style={{ position: 'absolute', top: '50%', left: '50%' }} />}
      <WebView
        source={{ uri: redirectUrl }}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        onNavigationStateChange={handleNavigationStateChange}
      />
    </View>
  );
};

export default MidtransPayment;
