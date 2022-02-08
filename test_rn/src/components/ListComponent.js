import React from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

function ListComponent({data = []}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View style={styles.card}>
              <Text style={styles.txt_pri}>{item.name}</Text>
              <Text>@{item.username}</Text>
            </View>
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

export default ListComponent;

const styles = StyleSheet.create({
  container: {
    width: width - 20,
  },
  card: {
    padding: 10,
    elevation: 4,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 5,
  },
  txt_pri: {
    fontWeight: 'bold',
  },
});
