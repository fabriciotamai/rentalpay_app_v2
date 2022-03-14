import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {render} from '@testing-library/react-native';

export function Profile() {
  return (
    <View>
      <Text>Perfil</Text>

      <TextInput placeholder="Nome" autoCorrect={false} />
      <TextInput placeholder="RentalPay" autoCorrect={false} />

      <Button title="Salvar" onPress={() => {}} />
    </View>
  );
}
