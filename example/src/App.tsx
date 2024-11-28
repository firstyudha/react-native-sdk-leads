import { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
// import {AppNavigation as ApNav} from '../../src/index'
import {AppNavigation as ApNav} from '../../src/index'

export default function App() {
  // const [result, setResult] = useState<number | undefined>();

  // useEffect(() => {
  //   multiply(3, 7).then(setResult);
  // }, []);

  return (
    <ApNav />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
