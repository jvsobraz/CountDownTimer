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
          // Você pode adicionar ações aqui quando o timer for concluído.
          // Por exemplo, navegar de volta para a tela inicial.
        }}
      />
    </View>
  );
}

export default TimerScreen;
