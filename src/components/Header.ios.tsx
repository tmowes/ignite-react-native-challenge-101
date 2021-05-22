import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { theme } from '../styles/theme';

export function Header({ colors }: { colors?: typeof theme.light }) {
  const { input, header } = colors ?? theme.light
  return (
    <SafeAreaView style={{ backgroundColor: header }}>
      <View style={[styles.header, , { backgroundColor: header }]}>
        <Text style={[styles.headerText, { color: input }]}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold', color: input }]}>do</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingBottom: 44,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
  }
});
