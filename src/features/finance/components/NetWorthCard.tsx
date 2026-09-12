import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';
import { theme } from '../../../utils/theme';

export const NetWorthCard = () => {
  return (
    <View style={styles.card}>
      {/* Top Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke={theme.colors.neonCyan} strokeWidth={2}>
            <Path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V7l7-4 7 4v14M9 11v6M15 11v6" />
          </Svg>
          <Text style={styles.headerText}>NET WORTH • TOTAL BALANCE</Text>
        </View>
        <View style={styles.badge}>
          <Svg width={10} height={10} viewBox="0 0 24 24" fill="none" stroke={theme.colors.neonCyan} strokeWidth={2}>
            <Path strokeLinecap="round" strokeLinejoin="round" d="M2 12l5-5 5 5 10-10" />
            <Path strokeLinecap="round" strokeLinejoin="round" d="M16 2h6v6" />
          </Svg>
          <Text style={styles.badgeText}>+2.4%</Text>
        </View>
      </View>

      {/* Main Balance */}
      <View style={styles.balanceRow}>
        <Text style={styles.balance}>$128,450.00</Text>
        <Text style={styles.currency}>USD</Text>
      </View>

      {/* 3 Columns */}
      <View style={styles.columns}>
        <View style={styles.column}>
          <Text style={styles.columnLabel}>CASH RESER...</Text>
          <Text style={styles.columnValue}>$34,200</Text>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: '40%', backgroundColor: theme.colors.neonCyan }]} />
          </View>
        </View>
        <View style={styles.column}>
          <Text style={styles.columnLabel}>INVESTMENTS</Text>
          <Text style={styles.columnValue}>$82,400</Text>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: '80%', backgroundColor: theme.colors.neonIce }]} />
          </View>
        </View>
        <View style={styles.column}>
          <Text style={styles.columnLabel}>YIELD VAULT</Text>
          <Text style={styles.columnValue}>$11,850</Text>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: '30%', backgroundColor: '#FFD700' }]} />
          </View>
        </View>
      </View>

      {/* Separator */}
      <View style={styles.separator} />

      {/* Weekly Cap Velocity */}
      <View style={styles.velocitySection}>
        <View style={styles.velocityHeader}>
          <View style={styles.velocityLabelContainer}>
            <View style={styles.statusIndicator} />
            <Text style={styles.velocityLabel}>WEEKLY CAP{'\n'}VELOCITY</Text>
          </View>
          <View style={styles.velocityAmountContainer}>
            <Text style={styles.velocityAmount}>$450.20</Text>
            <Text style={styles.velocityRemaining}>Remaining</Text>
          </View>
        </View>
        
        <View style={styles.largeProgressTrack}>
          <View style={[styles.largeProgressFill, { width: '40%' }]} />
        </View>

        <View style={styles.velocityFooter}>
          <Text style={styles.velocitySubtext}>Spent: $115.50</Text>
          <Text style={styles.velocitySubtext}>Ceiling: $800.00</Text>
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
    marginBottom: 16,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerText: {
    fontFamily: theme.typography.fontMonoMedium,
    fontSize: 10,
    color: theme.colors.slate400,
    letterSpacing: 1,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 240, 255, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: theme.metrics.borderRadiusBadge,
    gap: 4,
  },
  badgeText: {
    fontFamily: theme.typography.fontMonoMedium,
    fontSize: 10,
    color: theme.colors.neonCyan,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 24,
    gap: 8,
  },
  balance: {
    fontFamily: theme.typography.fontFamilyBold,
    fontSize: 32,
    color: theme.colors.white,
  },
  currency: {
    fontFamily: theme.typography.fontMono,
    fontSize: 12,
    color: theme.colors.slate400,
  },
  columns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    gap: 12,
  },
  column: {
    flex: 1,
  },
  columnLabel: {
    fontFamily: theme.typography.fontMono,
    fontSize: 9,
    color: theme.colors.slate400,
    marginBottom: 6,
    letterSpacing: 0.5,
  },
  columnValue: {
    fontFamily: theme.typography.fontMonoMedium,
    fontSize: 13,
    color: theme.colors.white,
    marginBottom: 8,
  },
  progressTrack: {
    height: 4,
    backgroundColor: theme.colors.borderGlow,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 2,
  },
  separator: {
    height: 1,
    backgroundColor: theme.colors.borderGlow,
    marginBottom: 20,
  },
  velocitySection: {},
  velocityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  velocityLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusIndicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: theme.colors.neonCyan,
  },
  velocityLabel: {
    fontFamily: theme.typography.fontMono,
    fontSize: 10,
    color: theme.colors.slate400,
    letterSpacing: 0.5,
  },
  velocityAmountContainer: {
    alignItems: 'flex-end',
  },
  velocityAmount: {
    fontFamily: theme.typography.fontMonoMedium,
    fontSize: 14,
    color: theme.colors.neonCyan,
  },
  velocityRemaining: {
    fontFamily: theme.typography.fontFamily,
    fontSize: 10,
    color: theme.colors.neonCyan,
  },
  largeProgressTrack: {
    height: 6,
    backgroundColor: theme.colors.borderGlow,
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 10,
  },
  largeProgressFill: {
    height: '100%',
    backgroundColor: theme.colors.neonCyan,
    borderRadius: 3,
  },
  velocityFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  velocitySubtext: {
    fontFamily: theme.typography.fontMono,
    fontSize: 10,
    color: theme.colors.slate500,
  }
});
