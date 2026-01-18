import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Home, PlusIcon } from 'lucide-react-native';


import { useState } from 'react';
import Header from './components/header/Header';


export default function App() {
     const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
    
        const addExpensePressHandler = () => {
            setShowAddExpenseModal(true)
        }


    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            {/* Header */}
            <Header />

            {/* Overview */}

            {/* Category Overview */}


            {/* Recent Transactions */}

            {/* AppBar */}
        </View>
    );
}


