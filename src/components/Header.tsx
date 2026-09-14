import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useTheme } from '../utils/ThemeContext';
import { ThemeColors } from '../utils/theme';

export const Header = () => {
  const theme = useTheme();
  const { isDarkMode, toggleTheme } = theme;
  const styles = createStyles(theme.colors);

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text style={styles.logo}>NEXODUS</Text>
        <View style={{ flexDirection: 'row', gap: 12 }}>
          <TouchableOpacity style={styles.profileButton} onPress={toggleTheme} activeOpacity={0.8}>
            {isDarkMode ? (
              <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={theme.colors.mutedText} strokeWidth={1.5}>
                <Path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </Svg>
            ) : (
              <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={theme.colors.mutedText} strokeWidth={1.5}>
                <Path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </Svg>
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileButton} activeOpacity={0.8}>
            <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={theme.colors.mutedText} strokeWidth={1.5}>
              <Path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.banner}>
        <Text style={styles.welcomeText}>Good morning, Alex!</Text>
        <Text style={styles.dateText}>Tuesday, Sept 10</Text>
      </View>
    </View>
  );
};

const createStyles = (colors: ThemeColors) => StyleSheet.create({
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
    color: colors.text,
    textTransform: 'uppercase',
    opacity: 0.9,
    paddingLeft: 2,
    fontFamily: 'Geist_400Regular',
  },
  profileButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.borderGlow,
    backgroundColor: colors.surface,
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
    color: colors.text,
    fontFamily: 'Geist_500Medium',
    letterSpacing: -0.5,
  },
  dateText: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.mutedText,
    fontFamily: 'Geist_400Regular',
    letterSpacing: 0.5,
  },
});
