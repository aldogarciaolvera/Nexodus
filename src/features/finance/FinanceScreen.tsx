import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../utils/ThemeContext';
import { ThemeColors } from '../../utils/theme';
import { useFocusEffect } from '@react-navigation/native';
import { FinanceService, FinanceSummary, FinanceTransaction } from '../../services/finance.service';
import { CategoryService, Category } from '../../services/category.service';

import { FinanceHeader } from './components/FinanceHeader';
import { NetWorthCard } from './components/NetWorthCard';
import { WeeklyOutflowCard } from './components/WeeklyOutflowCard';
import { OperatingTargetsCard } from './components/OperatingTargetsCard';
import { TransactionsCard } from './components/TransactionsCard';
import { CapitalEfficiencyCard } from './components/CapitalEfficiencyCard';
import { TransactionModal } from './components/TransactionModal';

export const FinanceScreen = () => {
  const theme = useTheme();
  const styles = createStyles(theme.colors);
  
  const [modalVisible, setModalVisible] = useState(false);
  const [summary, setSummary] = useState<FinanceSummary | null>(null);
  const [transactions, setTransactions] = useState<FinanceTransaction[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [sumData, txData, catData] = await Promise.all([
        FinanceService.getSummary(),
        FinanceService.getAll(),
        CategoryService.getAll(),
      ]);
      setSummary(sumData);
      setTransactions(txData);
      setCategories(catData);
    } catch (err) {
      console.error('Failed to fetch finance data', err);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <FinanceHeader onAddTransaction={() => setModalVisible(true)} />
          
          <View style={styles.stack}>
            <NetWorthCard summary={summary} loading={loading} />
            <WeeklyOutflowCard transactions={transactions} loading={loading} />
            <OperatingTargetsCard transactions={transactions} categories={categories} loading={loading} />
            <TransactionsCard transactions={transactions} categories={categories} loading={loading} />
            <CapitalEfficiencyCard summary={summary} loading={loading} />
          </View>
          
          {/* Spacer for bottom nav */}
          <View style={{ height: 100 }} />
        </ScrollView>
      </View>

      <TransactionModal 
        visible={modalVisible} 
        onClose={() => setModalVisible(false)}
        categories={categories}
        onSuccess={fetchData}
      />
    </SafeAreaView>
  );
};

const createStyles = (colors: ThemeColors) => StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.obsidian,
  },
  container: {
    flex: 1,
    backgroundColor: colors.obsidian,
  },
  scrollContent: {
    paddingHorizontal: 20, // marginHorizontal
    paddingTop: Platform.OS === 'android' ? 24 : 12,
    paddingBottom: 20,
  },
  stack: {
    gap: 14,
  },
});
