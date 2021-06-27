import React from 'react';
import { TextInput } from 'react-native';
import { WU } from 'src/constants/Layout';

export default function SearchInputComponent({ placeholder, value, onChange, onSubmit }) {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
      onSubmitEditing={onSubmit}
      returnKeyType="search"
      style={{
        backgroundColor: 'white',
        marginHorizontal: WU * 10,
        borderRadius: 15,
        paddingHorizontal: WU * 20,
        paddingVertical: WU * 10,
        marginBottom: WU * 50,
      }}
      autoCapitalize="none"
      autoCompleteType="off"
    />
  );
}
