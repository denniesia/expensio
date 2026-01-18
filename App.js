import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Home, PlusIcon } from 'lucide-react-native';


import { useState } from 'react';
import Header from './components/header/Header';
import AppBar from './components/app-bar/AppBar';
import AddExpense from './components/add-expense/AddExpense';


export default function App() {
     const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
     const [expenses, setExpenses] = useState([]);
    
    const addExpensePressHandler = () => {
        setShowAddExpenseModal(true)
    }


    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            {/* Header */}
            <Header modalHandler={addExpensePressHandler} />
            {
                showAddExpenseModal 
                    && 
                <AddExpense 
                    onClose={() => setShowAddExpenseModal(false)} 
                    visible={showAddExpenseModal}
                />}

            {/* Overview */}

            {/* Category Overview */}


            {/* Recent Transactions */}

            {/* AppBar */}
            <AppBar/>
        </View>
    );
}


