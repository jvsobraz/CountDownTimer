import React, { useState } from 'react';
import { View, TextInput, Button, FlatList } from 'react-native';

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
    <View>
      <TextInput
        placeholder="Digite o tempo (segundos)"
        value={timeInput}
        onChangeText={(text) => setTimeInput(text)}
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
          <Button
            title={`Iniciar ${item} segundos`}
            onPress={() => navigation.navigate('Timer', { time: parseInt(item) })}
            color="black"
            style={styles.flatListButton}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  addButton: {
    color: 'white',
  },
  flatListButton: {
    color: 'white',
  },
});

export default HomeScreen;