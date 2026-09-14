import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../../../utils/ThemeContext';
import { ThemeColors } from '../../../utils/theme';

interface FinanceHeaderProps {
  onAddTransaction: () => void;
}

export const FinanceHeader = ({ onAddTransaction }: FinanceHeaderProps) => {
  const theme = useTheme();
  const styles = createStyles(theme.colors);

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

const createStyles = (colors: ThemeColors) => StyleSheet.create({
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
    backgroundColor: colors.neonCyan,
  },
  statusText: {
    fontFamily: 'JetBrainsMono_400Regular',
    fontSize: 10,
    color: colors.slate400,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Geist_700Bold',
    fontSize: 24,
    color: colors.text,
  },
  actionBtn: {
    backgroundColor: colors.neonCyan,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 9999, // theme.metrics.borderRadiusBadge
  },
  actionText: {
    fontFamily: 'JetBrainsMono_500Medium',
    fontSize: 10,
    color: colors.surface, // inverted in dark, inverted in light? Wait, button is cyan. Obsidian background is dark. Let's use #000 or surface.
    letterSpacing: 0.5,
  }
});
