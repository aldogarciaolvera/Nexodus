import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, TextInput } from 'react-native';
import { theme } from '../../../utils/theme';

interface TransactionModalProps {
  visible: boolean;
  onClose: () => void;
}

export const TransactionModal = ({ visible, onClose }: TransactionModalProps) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={onClose} />
        <View style={styles.content}>
          <View style={styles.handle} />
          <Text style={styles.title}>Log Transaction</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Amount (USD)</Text>
            <TextInput
              style={styles.input}
              placeholder="$0.00"
              placeholderTextColor={theme.colors.slate600}
              keyboardType="decimal-pad"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Merchant / Description</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. Whole Foods"
              placeholderTextColor={theme.colors.slate600}
            />
          </View>

          <TouchableOpacity style={styles.submitBtn} activeOpacity={0.8} onPress={onClose}>
            <Text style={styles.submitText}>CONFIRM TRANSACTION</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    backgroundColor: theme.colors.surfaceLight,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    minHeight: '40%',
    borderWidth: 1,
    borderColor: theme.colors.borderGlow,
    borderBottomWidth: 0,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: theme.colors.slate700,
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 24,
  },
  title: {
    fontFamily: theme.typography.fontFamilyMedium,
    fontSize: 20,
    color: theme.colors.white,
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontFamily: theme.typography.fontMonoMedium,
    fontSize: 12,
    color: theme.colors.slate400,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  input: {
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.borderGlow,
    borderRadius: 12,
    padding: 16,
    color: theme.colors.white,
    fontFamily: theme.typography.fontMono,
    fontSize: 16,
  },
  submitBtn: {
    backgroundColor: theme.colors.neonCyan,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 12,
  },
  submitText: {
    fontFamily: theme.typography.fontMonoBold || theme.typography.fontMonoMedium,
    fontSize: 14,
    color: theme.colors.obsidian,
    letterSpacing: 0.5,
  },
});
