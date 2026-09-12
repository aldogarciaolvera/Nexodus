import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../utils/theme';

import { FinanceHeader } from './components/FinanceHeader';
import { NetWorthCard } from './components/NetWorthCard';
import { WeeklyOutflowCard } from './components/WeeklyOutflowCard';
import { OperatingTargetsCard } from './components/OperatingTargetsCard';
import { TransactionsCard } from './components/TransactionsCard';
import { CapitalEfficiencyCard } from './components/CapitalEfficiencyCard';
import { TransactionModal } from './components/TransactionModal';

export const FinanceScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <FinanceHeader onAddTransaction={() => setModalVisible(true)} />
          
          <View style={styles.stack}>
            <NetWorthCard />
            <WeeklyOutflowCard />
            <OperatingTargetsCard />
            <TransactionsCard />
            <CapitalEfficiencyCard />
          </View>
          
          {/* Spacer for bottom nav */}
          <View style={{ height: 100 }} />
        </ScrollView>
      </View>

      <TransactionModal 
        visible={modalVisible} 
        onClose={() => setModalVisible(false)} 
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.obsidian,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.obsidian,
  },
  scrollContent: {
    paddingHorizontal: theme.metrics.marginHorizontal,
    paddingTop: Platform.OS === 'android' ? 24 : 12,
    paddingBottom: 20,
  },
  stack: {
    gap: 14,
  },
});
