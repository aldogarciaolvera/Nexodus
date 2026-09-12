import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path, Rect, Circle } from 'react-native-svg';
import { theme } from '../../../utils/theme';

export const TransactionsCard = () => {
  const transactions = [
    {
      id: 1,
      title: 'Whole Foods Market',
      time: '01:45 PM',
      category: 'Fuel / Diet',
      amount: -84.20,
      icon: (
        <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={theme.colors.slate300} strokeWidth={1.5}>
          <Path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </Svg>
      )
    },
    {
      id: 2,
      title: 'Hypertrophy Lab • Isolate',
      time: '11:20 AM',
      category: 'Health / Gym',
      amount: -48.00,
      icon: (
        <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={theme.colors.slate300} strokeWidth={1.5}>
          <Path strokeLinecap="round" strokeLinejoin="round" d="M3 6h2m14 0h2M3 18h2m14 0h2M6 6h12v12H6z" />
          <Path strokeLinecap="round" strokeLinejoin="round" d="M10 10l4 4m0-4l-4 4" />
        </Svg>
      )
    },
    {
      id: 3,
      title: 'Stripe • Client Retainer...',
      time: '09:00 AM',
      category: 'Income',
      amount: 4250.00,
      isIncome: true,
      icon: (
        <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={theme.colors.neonCyan} strokeWidth={1.5}>
          <Rect x="2" y="6" width="20" height="12" rx="2" />
          <Circle cx="12" cy="12" r="2" />
          <Path d="M6 12h.01M18 12h.01" />
        </Svg>
      )
    },
    {
      id: 4,
      title: 'Equinox Membership',
      time: 'Automated',
      category: 'Recurring',
      amount: -260.00,
      icon: (
        <Svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={theme.colors.slate300} strokeWidth={1.5}>
          <Path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </Svg>
      )
    },
  ];

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.headerText}>RECENT TRANSACTIONS • 4 LOGGED TODAY</Text>
        <TouchableOpacity>
          <Text style={styles.exportText}>EXPORT{'\n'}CSV</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.list}>
        {transactions.map(item => (
          <View key={item.id} style={styles.transactionItem}>
            <View style={styles.iconContainer}>
              {item.icon}
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
              <Text style={styles.subText}>{item.time} • {item.category}</Text>
            </View>
            <View style={styles.amountContainer}>
              <Text style={[
                styles.amount,
                item.isIncome && { color: theme.colors.neonCyan }
              ]}>
                {item.isIncome ? '+' : '-'}${Math.abs(item.amount).toFixed(2)}
              </Text>
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
    marginBottom: 20,
  },
  headerText: {
    fontFamily: theme.typography.fontMono,
    fontSize: 10,
    color: theme.colors.slate400,
    letterSpacing: 1,
    flex: 1,
  },
  exportText: {
    fontFamily: theme.typography.fontMonoMedium,
    fontSize: 9,
    color: theme.colors.neonCyan,
    textAlign: 'right',
  },
  list: {
    gap: 16,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surfaceLight,
    padding: 16,
    borderRadius: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: theme.colors.borderGlow,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  detailsContainer: {
    flex: 1,
    marginRight: 12,
  },
  title: {
    fontFamily: theme.typography.fontFamilyMedium,
    fontSize: 14,
    color: theme.colors.white,
    marginBottom: 4,
  },
  subText: {
    fontFamily: theme.typography.fontMono,
    fontSize: 9,
    color: theme.colors.slate400,
  },
  amountContainer: {
    justifyContent: 'center',
  },
  amount: {
    fontFamily: theme.typography.fontMonoMedium,
    fontSize: 14,
    color: theme.colors.white,
  },
});
