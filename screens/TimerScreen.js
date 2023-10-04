import React from 'react';
import { View } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

function TimerScreen({ route }) {
  const { time } = route.params;

  return (
    <View>
      <CountdownCircleTimer
        isPlaying
        duration={time}
        size={200}
        strokeWidth={10}
        onComplete={() => {
        }}
      />
    </View>
  );
}

export default TimerScreen;
