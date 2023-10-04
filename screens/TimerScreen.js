import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

function TimerScreen({ route }) {
  const { time } = route.params;

  return (
    <View style = {styles.container}>
      <CountdownCircleTimer
    isPlaying
    duration={time}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[7, 5, 2, 0]}
  >
    {({ remainingTime }) => <Text>{remainingTime}</Text>}
  </CountdownCircleTimer>
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
});

export default TimerScreen;
