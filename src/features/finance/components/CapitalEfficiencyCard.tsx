import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { theme } from '../../../utils/theme';

export const CapitalEfficiencyCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke={theme.colors.neonCyan} strokeWidth={2}>
            <Path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </Svg>
          <Text style={styles.headerText}>CAPITAL EFFICIENCY: 94%{'\n'}OPTIMAL</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>A+{'\n'}RATING</Text>
        </View>
      </View>

      <View style={styles.metricsContainer}>
        <View style={styles.metricItem}>
          <Text style={styles.metricLabel}>SAVINGS RATE</Text>
          <Text style={styles.metricValue}>42%</Text>
          <Text style={styles.metricSubText}>+3.1% YoY</Text>
        </View>

        <View style={styles.metricItem}>
          <Text style={styles.metricLabel}>RUNWAY</Text>
          <Text style={styles.metricValue}>18.4 Mo</Text>
          <Text style={styles.metricSubTextLight}>High Yield</Text>
        </View>

        <View style={styles.metricItem}>
          <Text style={styles.metricLabel}>CREDIT UTIL</Text>
          <Text style={styles.metricValue}>4%</Text>
          <Text style={styles.metricSubTextLight}>Prime $15</Text>
        </View>
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
    alignItems: 'center',
    marginBottom: 24,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerText: {
    fontFamily: theme.typography.fontMonoMedium,
    fontSize: 10,
    color: theme.colors.slate400,
    letterSpacing: 1,
  },
  badge: {
    backgroundColor: 'rgba(0, 240, 255, 0.15)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    alignItems: 'center',
  },
  badgeText: {
    fontFamily: theme.typography.fontMonoBold || theme.typography.fontMonoMedium,
    fontSize: 9,
    color: theme.colors.neonCyan,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  metricsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metricItem: {
    flex: 1,
  },
  metricLabel: {
    fontFamily: theme.typography.fontMono,
    fontSize: 9,
    color: theme.colors.slate500,
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  metricValue: {
    fontFamily: theme.typography.fontMonoMedium,
    fontSize: 20,
    color: theme.colors.white,
    marginBottom: 4,
  },
  metricSubText: {
    fontFamily: theme.typography.fontMono,
    fontSize: 10,
    color: theme.colors.neonCyan,
  },
  metricSubTextLight: {
    fontFamily: theme.typography.fontMono,
    fontSize: 10,
    color: theme.colors.slate400,
  },
});
