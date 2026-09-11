import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { theme } from '../utils/theme';

export const BottomNav = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.tabItem} activeOpacity={0.7}>
          <View style={styles.iconContainer}>
            <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={theme.colors.neonCyan} strokeWidth={1.8}>
              <Path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </Svg>
            {/* Soft glow effect for active tab */}
            <View style={styles.iconGlow} />
          </View>
          <Text style={[styles.tabLabel, styles.tabLabelActive]}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabItem} activeOpacity={0.7}>
          <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" color={theme.colors.mutedText} strokeWidth={1.6}>
            <Path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </Svg>
          <Text style={styles.tabLabel}>Tasks</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabItem} activeOpacity={0.7}>
          <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" color={theme.colors.mutedText} strokeWidth={1.6}>
            <Path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9v6m3-8.25v10.5m0-10.5h1.5a1.5 1.5 0 011.5 1.5v7.5a1.5 1.5 0 01-1.5 1.5h-1.5m10.5-10.5v10.5m0-10.5h-1.5a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h1.5m3-8.25v6" />
          </Svg>
          <Text style={styles.tabLabel}>Gym</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabItem} activeOpacity={0.7}>
          <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" color={theme.colors.mutedText} strokeWidth={1.6}>
            <Path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </Svg>
          <Text style={styles.tabLabel}>Meals</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabItem} activeOpacity={0.7}>
          <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" color={theme.colors.mutedText} strokeWidth={1.6}>
            <Path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
          </Svg>
          <Text style={styles.tabLabel}>Money</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingBottom: 24, // Account for safe area roughly
    paddingTop: 10,
    backgroundColor: 'rgba(16, 19, 26, 0.9)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(34, 40, 54, 0.8)',
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
    paddingHorizontal: 8,
    gap: 4,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  iconGlow: {
    position: 'absolute',
    width: 24,
    height: 24,
    backgroundColor: 'rgba(0, 240, 255, 0.2)',
    borderRadius: 12,
    zIndex: -1,
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: '500',
    color: theme.colors.mutedText,
    letterSpacing: 0.5,
    fontFamily: 'Geist',
  },
  tabLabelActive: {
    fontWeight: '600',
    color: theme.colors.neonCyan,
  },
});
