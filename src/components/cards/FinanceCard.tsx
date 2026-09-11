import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { theme } from '../../utils/theme';

export const FinanceCard = () => {
  return (
    <View style={styles.card}>
      <View>
        <View style={styles.header}>
          <Svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke={theme.colors.neonCyan} strokeWidth={1.8}>
            <Path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </Svg>
          <Text style={styles.headerTitle} numberOfLines={1}>Finance Summary</Text>
        </View>
        
        <Text style={styles.spentText}>
          Spent: <Text style={styles.spentValue}>$115.50</Text>
        </Text>
        
        <View style={styles.chartRow}>
          <View style={styles.barsContainer}>
            <View style={styles.barColumn}>
              <View style={[styles.bar, styles.barActive]}>
                <View style={styles.barGlow} />
              </View>
              <Text style={styles.barLabel}>Mon</Text>
            </View>
            <View style={styles.barColumn}>
              <View style={[styles.bar, styles.barInactive]} />
              <Text style={styles.barLabel}>Tue</Text>
            </View>
          </View>
          
          <View style={styles.remainingContainer}>
            <Text style={styles.remainingValue}>$450.20</Text>
            <Text style={styles.remainingLabel}>(Remaining)</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.footerLabel}>Weekly Cap</Text>
        <Text style={styles.footerValue}>$800</Text>
      </View>
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
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 0.5,
    color: theme.colors.mutedText,
    textTransform: 'uppercase',
    fontFamily: 'JetBrains Mono',
    flex: 1,
  },
  spentText: {
    fontSize: 12,
    fontWeight: '600',
    color: theme.colors.white,
    letterSpacing: -0.5,
    marginBottom: 8,
    fontFamily: 'Geist',
  },
  spentValue: {
    color: theme.colors.slate200,
  },
  chartRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 8,
    marginTop: 4,
  },
  barsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
    paddingBottom: 2,
  },
  barColumn: {
    alignItems: 'center',
  },
  bar: {
    width: 16,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  barActive: {
    height: 44,
    backgroundColor: 'rgba(0, 240, 255, 0.25)',
    borderColor: 'rgba(0, 240, 255, 0.5)',
    borderWidth: 1,
    borderBottomWidth: 0,
    overflow: 'hidden',
  },
  barGlow: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: 'rgba(0, 240, 255, 0.2)',
  },
  barInactive: {
    height: 28,
    backgroundColor: theme.colors.surfaceLight,
    borderColor: theme.colors.slate600,
    borderWidth: 1,
    borderBottomWidth: 0,
  },
  barLabel: {
    fontSize: 8.5,
    color: theme.colors.slate400,
    fontWeight: '500',
    marginTop: 4,
    fontFamily: 'Geist',
  },
  remainingContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  remainingValue: {
    fontSize: 12,
    fontWeight: 'bold',
    color: theme.colors.neonCyan,
    letterSpacing: -0.5,
    fontFamily: 'JetBrains Mono',
  },
  remainingLabel: {
    fontSize: 8.5,
    color: theme.colors.mutedText,
    letterSpacing: 0.5,
    fontFamily: 'Geist',
  },
  footer: {
    marginTop: 12,
    paddingTop: 4,
    borderTopWidth: 1,
    borderTopColor: 'rgba(34, 40, 54, 0.6)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerLabel: {
    fontSize: 10,
    color: theme.colors.mutedText,
    fontFamily: 'Geist',
  },
  footerValue: {
    fontSize: 10,
    fontWeight: '500',
    color: theme.colors.slate300,
    fontFamily: 'JetBrains Mono',
  },
});
