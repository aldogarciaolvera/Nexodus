import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, TextInput, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { useTheme } from '../../../utils/ThemeContext';
import { ThemeColors } from '../../../utils/theme';
import { FinanceService } from '../../../services/finance.service';
import { Category } from '../../../services/category.service';

interface TransactionModalProps {
  visible: boolean;
  onClose: () => void;
  categories?: Category[];
  onSuccess?: () => void;
}

export const TransactionModal = ({ visible, onClose, categories = [], onSuccess }: TransactionModalProps) => {
  const theme = useTheme();
  const styles = createStyles(theme.colors);
  
  const [amount, setAmount] = useState('');
  const [type, setType] = useState<'Ingreso' | 'Gasto'>('Gasto');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!amount || isNaN(Number(amount))) {
      Alert.alert('Error', 'Please enter a valid amount');
      return;
    }
    if (!selectedCategory) {
      Alert.alert('Error', 'Please select a category');
      return;
    }

    try {
      setLoading(true);
      await FinanceService.create({
        amount: Number(amount),
        transactionType: type,
        categoryId: selectedCategory,
      });
      
      setAmount('');
      setType('Gasto');
      setSelectedCategory(null);
      
      if (onSuccess) {
        onSuccess();
      }
      onClose();
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to create transaction');
    } finally {
      setLoading(false);
    }
  };

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
          
          <View style={styles.typeSelector}>
            <TouchableOpacity 
              style={[styles.typeBtn, type === 'Gasto' && styles.typeBtnActive]} 
              onPress={() => setType('Gasto')}
            >
              <Text style={[styles.typeText, type === 'Gasto' && styles.typeTextActive]}>EXPENSE</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.typeBtn, type === 'Ingreso' && styles.typeBtnActive]} 
              onPress={() => setType('Ingreso')}
            >
              <Text style={[styles.typeText, type === 'Ingreso' && styles.typeTextActive]}>INCOME</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Amount (MXN/USD)</Text>
            <TextInput
              style={styles.input}
              placeholder="0.00"
              placeholderTextColor={theme.colors.slate600}
              keyboardType="decimal-pad"
              value={amount}
              onChangeText={setAmount}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Category</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryScroll}>
              {categories.map(cat => (
                <TouchableOpacity 
                  key={cat.id} 
                  style={[styles.categoryBtn, selectedCategory === cat.id && styles.categoryBtnActive]}
                  onPress={() => setSelectedCategory(cat.id!)}
                >
                  <Text style={[styles.categoryText, selectedCategory === cat.id && styles.categoryTextActive]}>
                    {cat.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <TouchableOpacity style={styles.submitBtn} activeOpacity={0.8} onPress={handleSubmit} disabled={loading}>
            {loading ? (
              <ActivityIndicator color={theme.colors.obsidian} />
            ) : (
              <Text style={styles.submitText}>CONFIRM TRANSACTION</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const createStyles = (colors: ThemeColors) => StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    backgroundColor: colors.surfaceLight,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    minHeight: '40%',
    borderWidth: 1,
    borderColor: colors.borderGlow,
    borderBottomWidth: 0,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: colors.slate700,
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 24,
  },
  title: {
    fontFamily: 'Geist_500Medium',
    fontSize: 20,
    color: colors.text,
    marginBottom: 24,
  },
  typeSelector: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 4,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: colors.borderGlow,
  },
  typeBtn: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  typeBtnActive: {
    backgroundColor: colors.borderGlow,
  },
  typeText: {
    fontFamily: 'JetBrainsMono_500Medium',
    fontSize: 12,
    color: colors.slate400,
  },
  typeTextActive: {
    color: colors.white, // Keep this white or neonCyan depending on preference
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontFamily: 'JetBrainsMono_500Medium',
    fontSize: 12,
    color: colors.slate400,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  input: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.borderGlow,
    borderRadius: 12,
    padding: 16,
    color: colors.text,
    fontFamily: 'JetBrainsMono_400Regular',
    fontSize: 16,
  },
  categoryScroll: {
    gap: 8,
    paddingRight: 20,
  },
  categoryBtn: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.borderGlow,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 9999,
  },
  categoryBtnActive: {
    borderColor: colors.neonCyan,
    backgroundColor: 'rgba(0, 240, 255, 0.1)',
  },
  categoryText: {
    fontFamily: 'JetBrainsMono_400Regular',
    fontSize: 12,
    color: colors.mutedText,
  },
  categoryTextActive: {
    color: colors.neonCyan,
    fontWeight: '600',
  },
  submitBtn: {
    backgroundColor: colors.neonCyan,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 12,
  },
  submitText: {
    fontFamily: 'JetBrainsMono_500Medium',
    fontSize: 14,
    color: colors.surface,
    letterSpacing: 0.5,
  },
});
