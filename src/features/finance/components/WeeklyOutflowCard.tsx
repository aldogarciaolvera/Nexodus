import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../../utils/theme';

export const WeeklyOutflowCard = () => {
  const days = [
    { label: 'M', value: 65, active: false },
    { label: 'T', value: 51, active: true },
    { label: 'W', value: 0, active: false },
    { label: 'T', value: 0, active: false },
    { label: 'F', value: 0, active: false },
    { label: 'S', value: 0, active: false },
    { label: 'S', value: 0, active: false },
  ];

  const maxVal = 100;

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.kicker}>BURN TELEMETRY</Text>
          <Text style={styles.title}>Weekly Outflow</Text>
        </View>
        <View style={styles.pill}>
          <Text style={styles.pillText}>RUN-RATE: $57.75/D</Text>
        </View>
      </View>

      <View style={styles.chartContainer}>
        {days.map((day, index) => {
          const heightPercent = day.value > 0 ? (day.value / maxVal) * 100 : 4; // minimum height
          
          return (
            <View key={index} style={styles.barCol}>
              {day.value > 0 && (
                <Text style={[styles.barValue, day.active && { color: theme.colors.neonCyan }]}>
                  ${day.value}
                </Text>
              )}
              <View style={[styles.barTrack, { height: 60 }]}>
                {day.value > 0 ? (
                  <View style={[
                    styles.barFill, 
                    { height: `${heightPercent}%` },
                    day.active ? { backgroundColor: theme.colors.neonCyan } : {}
                  ]} />
                ) : (
                  <View style={styles.barEmpty}>
                    <Text style={styles.dash}>--</Text>
                  </View>
                )}
              </View>
              <Text style={[styles.dayLabel, day.active && { color: theme.colors.neonCyan }]}>
                {day.label}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.metrics.borderRadiusCard,
    borderWidth: 1,
    borderColor: theme.colors.borderGlow,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  kicker: {
    fontFamily: theme.typography.fontMono,
    fontSize: 9,
    color: theme.colors.slate400,
    letterSpacing: 1,
    marginBottom: 4,
  },
  title: {
    fontFamily: theme.typography.fontFamilyMedium,
    fontSize: 16,
    color: theme.colors.white,
  },
  pill: {
    backgroundColor: theme.colors.borderGlow,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: theme.metrics.borderRadiusBadge,
  },
  pillText: {
    fontFamily: theme.typography.fontMono,
    fontSize: 10,
    color: theme.colors.slate400,
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 100,
  },
  barCol: {
    alignItems: 'center',
    width: 30,
  },
  barValue: {
    fontFamily: theme.typography.fontMono,
    fontSize: 9,
    color: theme.colors.slate500,
    marginBottom: 4,
  },
  barTrack: {
    width: '100%',
    justifyContent: 'flex-end',
    marginBottom: 8,
  },
  barFill: {
    width: '100%',
    backgroundColor: theme.colors.slate600,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  barEmpty: {
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 4,
  },
  dash: {
    color: theme.colors.slate600,
    fontSize: 10,
  },
  dayLabel: {
    fontFamily: theme.typography.fontMonoMedium,
    fontSize: 10,
    color: theme.colors.slate500,
  },
});
