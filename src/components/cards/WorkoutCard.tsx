import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { theme } from '../../utils/theme';

export const WorkoutCard = () => {
  return (
    <View style={styles.card}>
      <View>
        <View style={styles.header}>
          <Svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke={theme.colors.neonCyan} strokeWidth={1.8}>
            <Path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9v6m3-8.25v10.5m0-10.5h1.5a1.5 1.5 0 011.5 1.5v7.5a1.5 1.5 0 01-1.5 1.5h-1.5m10.5-10.5v10.5m0-10.5h-1.5a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h1.5m3-8.25v6" />
          </Svg>
          <Text style={styles.headerTitle} numberOfLines={1}>Workout Routine</Text>
        </View>
        
        <Text style={styles.subtitle}>Today: Legs & Core</Text>
        
        <View style={styles.contentRow}>
          <View style={styles.exerciseList}>
            <View style={styles.exerciseItem}>
              <View style={styles.bullet} />
              <Text style={styles.exerciseText}>Squats</Text>
            </View>
            <View style={styles.exerciseItem}>
              <View style={styles.bullet} />
              <Text style={styles.exerciseText}>Lunges</Text>
            </View>
            <View style={styles.exerciseItem}>
              <View style={styles.bullet} />
              <Text style={styles.exerciseText}>Plank</Text>
            </View>
          </View>
          
          <View style={styles.gaugeContainer}>
            <Svg width={48} height={48} viewBox="0 0 44 44" style={{ transform: [{ rotate: '-90deg' }] }}>
              <Circle cx={22} cy={22} r={17} fill="none" stroke="#1f2533" strokeWidth={3} />
              <Circle 
                cx={22} cy={22} r={17} fill="none" 
                stroke={theme.colors.neonCyan} 
                strokeWidth={3} 
                strokeLinecap="round"
                strokeDasharray={106} 
                strokeDashoffset={36} 
              />
            </Svg>
          </View>
        </View>
      </View>
      
      <TouchableOpacity style={styles.footerToggle} activeOpacity={0.7}>
        <Text style={styles.statusLabel}>Status</Text>
        <View style={styles.statusBadge}>
          <Text style={styles.statusBadgeText}>Done? [ ]</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surface,
    borderColor: theme.colors.borderGlow,
    borderWidth: 1,
    borderRadius: theme.metrics.borderRadiusCard,
    padding: 14,
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 10.5,
    fontWeight: '600',
    letterSpacing: 0.5,
    color: theme.colors.mutedText,
    textTransform: 'uppercase',
    fontFamily: 'JetBrains Mono',
    flex: 1,
  },
  subtitle: {
    fontSize: 13,
    fontWeight: '600',
    color: theme.colors.white,
    letterSpacing: -0.5,
    marginBottom: 8,
    fontFamily: 'Geist',
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  exerciseList: {
    gap: 4,
  },
  exerciseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  bullet: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: theme.colors.slate500,
  },
  exerciseText: {
    fontSize: 12,
    color: theme.colors.slate300,
    fontFamily: 'Geist',
  },
  gaugeContainer: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerToggle: {
    marginTop: 16,
    paddingTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statusLabel: {
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    color: theme.colors.mutedText,
    fontFamily: 'JetBrains Mono',
  },
  statusBadge: {
    backgroundColor: theme.colors.surfaceLight,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: theme.colors.borderGlow,
  },
  statusBadgeText: {
    fontSize: 12,
    color: theme.colors.slate200,
    fontFamily: 'JetBrains Mono',
  },
});
