import {LineChart} from 'react-native-chart-kit';
import {View, Dimensions} from 'react-native';
import React from 'react';

const ChartWindow = () => {
  return (
    <View style={{flex: 1}}>
      <LineChart
        data={{
          //   labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [50, 63, 55, 100, 53, 69, 53, 40, 50, 55, 80, 53],
            },
          ],
        }}
        width={Dimensions.get('screen').width} // from react-native
        height={200}
        withInnerLines={false}
        withVerticalLines={false}
        withHorizontalLines={false}
        chartConfig={{
          backgroundGradientFrom: '#87CEEB',
          backgroundGradientTo: '#2F4F4F',
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            // borderRadius: 16,
          },
          propsForDots: {
            r: '2',
            // strokeWidth: '1',
            // stroke: '#fff',
          },
        }}
      />
    </View>
  );
};

export default ChartWindow;
