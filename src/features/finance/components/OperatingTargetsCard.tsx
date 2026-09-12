import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { theme } from '../../../utils/theme';

export const OperatingTargetsCard = () => {
  const targets = [
    { label: 'Essentials & Food', sub: '(Groceries, Dining)', value: 420, total: 600, color: theme.colors.neonCyan },
    { label: 'Performance & Fit', sub: '(Supps, Gym, Rec)', value: 180, total: 250, color: theme.colors.neonCyan },
    { label: 'Business & Operati...', sub: '(SaaS, Cloud)', value: 310, total: 500, color: theme.colors.neonCyan },
    { label: 'Discretionary / Lif...', sub: '(Travel, Buy)', value: 115.50, total: 300, color: '#FFD700' },
  ];

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.kicker}>ALLOCATION PILLARS</Text>
          <Text style={styles.title}>Monthly Operating Targets</Text>
        </View>
        <View style={styles.iconBtn}>
          <Svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke={theme.colors.slate400} strokeWidth={2}>
            <Path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </Svg>
        </View>
      </View>

      <View style={styles.list}>
        {targets.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <View style={styles.itemHeader}>
              <View style={styles.itemLabelRow}>
                <View style={[styles.dot, { backgroundColor: item.color }]} />
                <Text style={styles.itemLabel} numberOfLines={1}>{item.label}</Text>
                <Text style={styles.itemSub} numberOfLines={1}>{item.sub}</Text>
              </View>
              <View style={styles.amountContainer}>
                <Text style={styles.amountValue}>${item.value}</Text>
                <Text style={styles.amountTotal}> / ${item.total}</Text>
              </View>
            </View>
            <View style={styles.progressTrack}>
              <View style={[styles.progressFill, { width: `${(item.value / item.total) * 100}%`, backgroundColor: item.color }]} />
            </View>
          </View>
        ))}
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
  iconBtn: {
    padding: 8,
    backgroundColor: theme.colors.borderGlow,
    borderRadius: 8,
  },
  list: {
    gap: 20,
  },
  listItem: {},
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  itemLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingRight: 10,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    marginRight: 8,
  },
  itemLabel: {
    fontFamily: theme.typography.fontFamily,
    fontSize: 13,
    color: theme.colors.white,
    marginRight: 4,
  },
  itemSub: {
    fontFamily: theme.typography.fontMono,
    fontSize: 10,
    color: theme.colors.slate500,
    flexShrink: 1,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  amountValue: {
    fontFamily: theme.typography.fontMonoMedium,
    fontSize: 13,
    color: theme.colors.white,
  },
  amountTotal: {
    fontFamily: theme.typography.fontMono,
    fontSize: 10,
    color: theme.colors.slate400,
  },
  progressTrack: {
    height: 6,
    backgroundColor: theme.colors.borderGlow,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
});
