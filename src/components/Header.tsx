import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { theme } from '../utils/theme';

export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text style={styles.logo}>NEXODUS</Text>
        <TouchableOpacity style={styles.profileButton} activeOpacity={0.8}>
          <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={theme.colors.mutedText} strokeWidth={1.5}>
            <Path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </Svg>
        </TouchableOpacity>
      </View>
      <View style={styles.banner}>
        <Text style={styles.welcomeText}>Good morning, Alex!</Text>
        <Text style={styles.dateText}>Tuesday, Sept 10</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 16,
    paddingBottom: 12,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  logo: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 3,
    color: theme.colors.white,
    textTransform: 'uppercase',
    opacity: 0.9,
    paddingLeft: 2,
    fontFamily: 'Geist',
  },
  profileButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: theme.colors.borderGlow,
    backgroundColor: theme.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    flexDirection: 'column',
    gap: 2,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '500',
    color: theme.colors.white,
    fontFamily: 'Geist',
    letterSpacing: -0.5,
  },
  dateText: {
    fontSize: 14,
    fontWeight: '400',
    color: theme.colors.mutedText,
    fontFamily: 'Geist',
    letterSpacing: 0.5,
  },
});
