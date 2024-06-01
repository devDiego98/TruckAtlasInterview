import React, {useState} from 'react';
import {View, Button, TextInput, Text} from 'react-native';
import {useSelector} from 'react-redux';

export function AddColors() {
  const colors = useSelector((state: any) => state.colors);
  const [color, setColor] = useState<string>('');

  const updateColors = (color: string) => {};

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        style={{
          paddingHorizontal: 8,
          height: 40,
          width: '90%',
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
        }}
        placeholder="Green"
        value={color}
        onChange={(e: any) => {
          setColor(e.nativeEvent.text);
        }}></TextInput>

      <Button
        title={'Submit'}
        onPress={() => {
          updateColors(color);
        }}></Button>

      <Text> My favorite colors:</Text>
      {colors.map((color: string) => (
        <View>
          <Text>{color}</Text>
        </View>
      ))}
    </View>
  );
}
