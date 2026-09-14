import React, { useMemo } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useTheme } from '../../../utils/ThemeContext';
import { ThemeColors } from '../../../utils/theme';
import { FinanceSummary } from '../../../services/finance.service';

interface CapitalEfficiencyCardProps {
  summary?: FinanceSummary | null;
  loading?: boolean;
}

export const CapitalEfficiencyCard = ({ summary, loading = false }: CapitalEfficiencyCardProps) => {
  const theme = useTheme();
  const styles = createStyles(theme.colors);

  const { savingsRate, runway, creditUtil } = useMemo(() => {
    if (!summary) return { savingsRate: 0, runway: 0, creditUtil: 0 };
    const { totalIncome, totalExpense } = summary;
    
    // Savings Rate
    let rate = 0;
    if (totalIncome > 0) {
      rate = ((totalIncome - totalExpense) / totalIncome) * 100;
    }

    // Runway (Fake calculation based on net balance divided by monthly burn)
    const net = totalIncome - totalExpense;
    let runwayMo = 0;
    if (totalExpense > 0) {
      runwayMo = Math.max(net / totalExpense, 0); // simplistic fake runway
    }

    return {
      savingsRate: Math.max(rate, 0).toFixed(1),
      runway: runwayMo.toFixed(1),
      creditUtil: 4, // Still mocked for now as we don't have credit limit data
    };
  }, [summary]);

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke={theme.colors.neonCyan} strokeWidth={2}>
            <Path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </Svg>
          <Text style={styles.headerText}>CAPITAL EFFICIENCY: {loading ? '--' : savingsRate}%{'\n'}OPTIMAL</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>A+{'\n'}RATING</Text>
        </View>
      </View>

      <View style={styles.metricsContainer}>
        {loading ? (
          <ActivityIndicator color={theme.colors.neonCyan} style={{ alignSelf: 'center', flex: 1, paddingVertical: 10 }} />
        ) : (
          <>
            <View style={styles.metricItem}>
              <Text style={styles.metricLabel}>SAVINGS RATE</Text>
              <Text style={styles.metricValue}>{savingsRate}%</Text>
              <Text style={styles.metricSubText}>+3.1% YoY</Text>
            </View>

            <View style={styles.metricItem}>
              <Text style={styles.metricLabel}>RUNWAY</Text>
              <Text style={styles.metricValue}>{runway} Mo</Text>
              <Text style={styles.metricSubTextLight}>High Yield</Text>
            </View>

            <View style={styles.metricItem}>
              <Text style={styles.metricLabel}>CREDIT UTIL</Text>
              <Text style={styles.metricValue}>{creditUtil}%</Text>
              <Text style={styles.metricSubTextLight}>Prime $15</Text>
            </View>
          </>
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
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerText: {
    fontFamily: 'JetBrainsMono_500Medium',
    fontSize: 10,
    color: colors.slate400,
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
    fontFamily: 'JetBrainsMono_500Medium',
    fontSize: 9,
    color: colors.neonCyan,
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
    fontFamily: 'JetBrainsMono_400Regular',
    fontSize: 9,
    color: colors.slate500,
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  metricValue: {
    fontFamily: 'JetBrainsMono_500Medium',
    fontSize: 20,
    color: colors.text,
    marginBottom: 4,
  },
  metricSubText: {
    fontFamily: 'JetBrainsMono_400Regular',
    fontSize: 10,
    color: colors.neonCyan,
  },
  metricSubTextLight: {
    fontFamily: 'JetBrainsMono_400Regular',
    fontSize: 10,
    color: colors.slate400,
  },
});
