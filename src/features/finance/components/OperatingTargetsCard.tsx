import React, { useMemo } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useTheme } from '../../../utils/ThemeContext';
import { ThemeColors } from '../../../utils/theme';
import { FinanceTransaction } from '../../../services/finance.service';
import { Category } from '../../../services/category.service';

interface OperatingTargetsCardProps {
  transactions?: FinanceTransaction[];
  categories?: Category[];
  loading?: boolean;
}

export const OperatingTargetsCard = ({ transactions = [], categories = [], loading = false }: OperatingTargetsCardProps) => {
  const theme = useTheme();
  const styles = createStyles(theme.colors);

  const targets = useMemo(() => {
    return categories.map((cat, index) => {
      // Sum all 'Gasto' transactions for this category in the current month
      const now = new Date();
      const currentMonth = now.getMonth();
      const currentYear = now.getFullYear();

      const spent = transactions
        .filter(t => {
          if (t.transactionType !== 'Gasto' || t.categoryId !== cat.id || !t.transactionDate) return false;
          const tDate = new Date(t.transactionDate);
          return tDate.getMonth() === currentMonth && tDate.getFullYear() === currentYear;
        })
        .reduce((sum, t) => sum + t.amount, 0);

      // Colors to cycle through
      const colors = [theme.colors.neonCyan, '#FFD700', '#FF3366', '#00E676'];
      
      return {
        id: cat.id,
        label: cat.name,
        sub: cat.description || '',
        value: spent,
        total: 500, // Hardcoded to 500 per user request for now
        color: colors[index % colors.length],
      };
    }).sort((a, b) => b.value - a.value); // Sort by highest spend
  }, [transactions, categories, theme.colors]);

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
        {loading ? (
          <ActivityIndicator color={theme.colors.neonCyan} style={{ alignSelf: 'center', marginVertical: 20 }} />
        ) : targets.length === 0 ? (
          <Text style={{ color: theme.colors.slate400, fontFamily: 'JetBrainsMono_400Regular', textAlign: 'center' }}>No targets found</Text>
        ) : (
          targets.map((item, index) => {
            const fillPercent = Math.min((item.value / item.total) * 100, 100);
            return (
              <View key={item.id || index} style={styles.listItem}>
                <View style={styles.itemHeader}>
                  <View style={styles.itemLabelRow}>
                    <View style={[styles.dot, { backgroundColor: item.color }]} />
                    <Text style={styles.itemLabel} numberOfLines={1}>{item.label}</Text>
                    {item.sub ? <Text style={styles.itemSub} numberOfLines={1}>{item.sub}</Text> : null}
                  </View>
                  <View style={styles.amountContainer}>
                    <Text style={styles.amountValue}>${item.value.toFixed(2)}</Text>
                    <Text style={styles.amountTotal}> / ${item.total}</Text>
                  </View>
                </View>
                <View style={styles.progressTrack}>
                  <View style={[styles.progressFill, { width: `${fillPercent}%`, backgroundColor: item.color }]} />
                </View>
              </View>
            );
          })
        )}
      </View>
    </View>
  );
};

const createStyles = (colors: ThemeColors) => StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.borderGlow,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  kicker: {
    fontFamily: 'JetBrainsMono_400Regular',
    fontSize: 9,
    color: colors.slate400,
    letterSpacing: 1,
    marginBottom: 4,
  },
  title: {
    fontFamily: 'Geist_500Medium',
    fontSize: 16,
    color: colors.text,
  },
  iconBtn: {
    padding: 8,
    backgroundColor: colors.borderGlow,
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
    fontFamily: 'Geist_400Regular',
    fontSize: 13,
    color: colors.text,
    marginRight: 4,
  },
  itemSub: {
    fontFamily: 'JetBrainsMono_400Regular',
    fontSize: 10,
    color: colors.slate500,
    flexShrink: 1,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  amountValue: {
    fontFamily: 'JetBrainsMono_500Medium',
    fontSize: 13,
    color: colors.text,
  },
  amountTotal: {
    fontFamily: 'JetBrainsMono_400Regular',
    fontSize: 10,
    color: colors.slate400,
  },
  progressTrack: {
    height: 6,
    backgroundColor: colors.borderGlow,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
});
