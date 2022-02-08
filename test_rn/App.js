import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Header from './src/components/Header';
import ListComponent from './src/components/ListComponent';
import axios from 'axios';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState([]);

  const onFetch = async () => {
    try {
      setError('');
      setLoading(true);
      const result = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );
      setLoading(false);
      result ? setData(result.data) : setError(result.message);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.info}>Click on the Fetch button to get data</Text>
      <TouchableOpacity style={styles.fetchBtn} onPress={onFetch}>
        <Text style={styles.fetchText}>Fetch</Text>
      </TouchableOpacity>
      <View style={styles.text}>
        {loading ? (
          <Text>Loading...</Text>
        ) : error ? (
          <Text style={styles.errText}>{error}</Text>
        ) : data.length ? (
          <ListComponent data={data} />
        ) : (
          <Text>No Data to show</Text>
        )}
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  info: {
    padding: 10,
    alignSelf: 'center',
  },
  fetchBtn: {
    padding: 10,
    alignSelf: 'center',
    backgroundColor: '#0D6EFC',
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  fetchText: {
    color: '#fff',
  },
  errText: {
    color: 'red',
  },
  text: {
    alignSelf: 'center',
    marginTop: 10,
    flex: 1,
  },
});
