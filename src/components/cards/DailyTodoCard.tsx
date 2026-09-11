import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { theme } from '../../utils/theme';

export const DailyTodoCard = () => {
  return (
    <View style={styles.card}>
      <View>
        <View style={styles.header}>
          <Svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke={theme.colors.neonCyan} strokeWidth={1.8}>
            <Path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </Svg>
          <Text style={styles.headerTitle}>Daily To-Do</Text>
        </View>
        
        <Text style={styles.taskCount}>5 Tasks</Text>
        
        <View style={styles.taskList}>
          <View style={styles.taskItem}>
            <View style={[styles.bullet, { backgroundColor: theme.colors.neonCyan }]} />
            <Text style={styles.taskText} numberOfLines={1}>Call Client (10 AM)</Text>
          </View>
          <View style={styles.taskItem}>
            <View style={[styles.bullet, { backgroundColor: theme.colors.neonCyan }]} />
            <Text style={styles.taskText} numberOfLines={1}>Buy Groceries</Text>
          </View>
          <View style={styles.taskItem}>
            <View style={[styles.bullet, { backgroundColor: theme.colors.slate500 }]} />
            <Text style={[styles.taskText, { color: theme.colors.slate400 }]} numberOfLines={1}>Project Review (2 PM)</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.footer}>
        <View style={styles.progressTrack}>
          <View style={styles.progressFill} />
        </View>
        <View style={styles.countContainer}>
          <Text style={styles.countText}>3/5</Text>
        </View>
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
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.5,
    color: theme.colors.mutedText,
    textTransform: 'uppercase',
    fontFamily: 'JetBrains Mono',
  },
  taskCount: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.white,
    letterSpacing: -0.5,
    marginBottom: 10,
    fontFamily: 'JetBrains Mono',
  },
  taskList: {
    gap: 6,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 6,
  },
  taskText: {
    fontSize: 12,
    color: theme.colors.slate300,
    fontFamily: 'Geist',
    flex: 1,
  },
  footer: {
    marginTop: 16,
    paddingTop: 4,
  },
  progressTrack: {
    width: '100%',
    backgroundColor: '#1e2330',
    borderRadius: 3,
    height: 6,
    overflow: 'hidden',
    marginBottom: 6,
  },
  progressFill: {
    backgroundColor: theme.colors.neonCyan,
    height: '100%',
    borderRadius: 3,
    width: '60%',
    shadowColor: theme.colors.neonCyan,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.45,
    shadowRadius: 8,
    elevation: 3,
  },
  countContainer: {
    alignItems: 'flex-end',
  },
  countText: {
    fontSize: 11,
    fontWeight: '500',
    color: theme.colors.mutedText,
    letterSpacing: 0.5,
    fontFamily: 'JetBrains Mono',
  },
});
