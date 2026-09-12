import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { theme } from '../../../utils/theme';

interface FinanceHeaderProps {
  onAddTransaction: () => void;
}

export const FinanceHeader = ({ onAddTransaction }: FinanceHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.statusIndicator} />
        <Text style={styles.statusText}>TUESDAY, SEPT 10 • CAPITAL & CASHFLOW</Text>
      </View>
      <View style={styles.bottomRow}>
        <Text style={styles.title}>Finance & Wealth</Text>
        <TouchableOpacity style={styles.actionBtn} activeOpacity={0.8} onPress={onAddTransaction}>
          <Text style={styles.actionText}>+ TRANSACTION</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    gap: 8,
  },
  statusIndicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: theme.colors.neonCyan,
  },
  statusText: {
    fontFamily: theme.typography.fontMono,
    fontSize: 10,
    color: theme.colors.slate400,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: theme.typography.fontFamilyBold,
    fontSize: 24,
    color: theme.colors.white,
  },
  actionBtn: {
    backgroundColor: theme.colors.neonCyan,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: theme.metrics.borderRadiusBadge,
  },
  actionText: {
    fontFamily: theme.typography.fontMonoMedium,
    fontSize: 10,
    color: theme.colors.obsidian,
    letterSpacing: 0.5,
  }
});
