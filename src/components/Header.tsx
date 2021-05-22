import React, { Dispatch, SetStateAction } from 'react';
import { View, Text, StatusBar, StyleSheet, Switch } from 'react-native';
import { theme } from '../styles/theme';


interface HeaderProps {
  themeSelector: [boolean, Dispatch<SetStateAction<boolean>>]
}


export function Header({ themeSelector }: HeaderProps) {
  const [darkTheme, setDarkTheme] = themeSelector

  const colors = darkTheme ? theme.dark : theme.light

  const { input, header, text, button, background } = colors ?? theme.light

  return (
    <View style={[styles.header, { backgroundColor: header }]}>
      <Text style={[styles.headerText, { marginLeft: 'auto', color: input }]}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold', color: input }]}>do</Text>
      <Switch
        trackColor={{ false: background, true: background }}
        thumbColor={darkTheme ? button : button}
        ios_backgroundColor={background}
        onValueChange={setDarkTheme}
        value={darkTheme}
        style={{ marginLeft: 'auto', marginRight: 32 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
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
