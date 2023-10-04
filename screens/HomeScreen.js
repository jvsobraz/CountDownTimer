import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function HomeScreen({ navigation }) {
  const [timeInput, setTimeInput] = useState('');
  const [timerData, setTimerData] = useState([]);

  const handleAddTimer = () => {
    if (timeInput !== '') {
      setTimerData([...timerData, timeInput]);
      setTimeInput('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Tempo em segundos"
        value={timeInput}
        onChangeText={(text) => setTimeInput(text)}
        style={styles.textInput}
      />
      <Button
        title="Adicionar"
        onPress={handleAddTimer}
        color="red"
        style={styles.addButton}
      />
      <FlatList
        data={timerData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Timer', { time: parseInt(item) })
            }
            color="black"
            style={styles.flatListButton}>
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: 'white'
  },
  textInput: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
    width: '45%',
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  addButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 5,
    marginTop: 10,
  },
  flatListButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 5,
    marginTop: 10,
  },
});

export default HomeScreen;
