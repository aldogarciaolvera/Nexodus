import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { theme } from '../../utils/theme';

export const DietCard = () => {
  return (
    <View style={styles.card}>
      <View>
        <View style={styles.header}>
          <Svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke={theme.colors.neonCyan} strokeWidth={1.8}>
            <Path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </Svg>
          <Text style={styles.headerTitle}>Diet & Macros</Text>
        </View>
        
        <View style={styles.contentRow}>
          <View style={styles.gaugeContainer}>
            <Svg width={64} height={64} viewBox="0 0 60 60" style={{ transform: [{ rotate: '-90deg' }] }}>
              <Circle cx={30} cy={30} r={24} fill="none" stroke="#1f2533" strokeWidth={3.5} />
              <Circle 
                cx={30} cy={30} r={24} fill="none" 
                stroke={theme.colors.neonCyan} 
                strokeWidth={3.5} 
                strokeLinecap="round"
                strokeDasharray={150} 
                strokeDashoffset={45} 
              />
            </Svg>
            <View style={styles.gaugeTextContainer}>
              <Text style={styles.gaugeLabel}>Calories</Text>
              <Text style={styles.gaugeValue}>1800</Text>
              <Text style={styles.gaugeTotal}>/2500</Text>
            </View>
          </View>
          
          <View style={styles.macrosList}>
            <View style={styles.macroItem}>
              <View style={[styles.macroBullet, { backgroundColor: theme.colors.neonCyan }]} />
              <Text style={[styles.macroText, { color: theme.colors.slate200 }]}>P: 150g</Text>
            </View>
            <View style={styles.macroItem}>
              <View style={[styles.macroBullet, { backgroundColor: theme.colors.slate400 }]} />
              <Text style={[styles.macroText, { color: theme.colors.slate300 }]}>C: 220g</Text>
            </View>
            <View style={styles.macroItem}>
              <View style={[styles.macroBullet, { backgroundColor: theme.colors.slate600 }]} />
              <Text style={[styles.macroText, { color: theme.colors.slate400 }]}>F: 65g</Text>
            </View>
          </View>
        </View>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.footerLabel}>Target Reached</Text>
        <Text style={styles.footerValue}>72%</Text>
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
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 4,
    marginTop: 4,
  },
  gaugeContainer: {
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  gaugeTextContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  gaugeLabel: {
    fontSize: 8,
    textTransform: 'uppercase',
    color: theme.colors.mutedText,
    fontFamily: 'JetBrains Mono',
    fontWeight: '500',
  },
  gaugeValue: {
    fontSize: 10,
    fontWeight: 'bold',
    color: theme.colors.white,
    fontFamily: 'JetBrains Mono',
    lineHeight: 12,
  },
  gaugeTotal: {
    fontSize: 7.5,
    color: theme.colors.slate400,
    fontFamily: 'JetBrains Mono',
  },
  macrosList: {
    flexDirection: 'column',
    gap: 4,
    paddingLeft: 4,
  },
  macroItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  macroBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  macroText: {
    fontSize: 11,
    fontWeight: '500',
    fontFamily: 'JetBrains Mono',
  },
  footer: {
    marginTop: 12,
    paddingTop: 4,
    borderTopWidth: 1,
    borderTopColor: 'rgba(34, 40, 54, 0.6)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerLabel: {
    fontSize: 10,
    color: theme.colors.mutedText,
    fontFamily: 'Geist',
  },
  footerValue: {
    fontSize: 10,
    fontWeight: '600',
    color: theme.colors.neonCyan,
    fontFamily: 'JetBrains Mono',
  },
});
