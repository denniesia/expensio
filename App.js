import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Home, PlusIcon } from 'lucide-react-native';


import { useMemo, useState } from 'react';
import Header from './components/header/Header';
import AppBar from './components/app-bar/AppBar';
import AddExpense from './components/add-expense/AddExpense';
import OverviewCard from './components/overview-card/OverviewCard';


export default function App() {
    const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
    const [expenses, setExpenses] = useState([]);


    const totalSpending = useMemo(() => 
        expenses.reduce((acc, expense) => acc + expense.amount, 0)
    , [expenses])

     
    const addExpensePressHandler = () => {
        setShowAddExpenseModal(true)
    }

    const createExpenseHandler = (expense) => {
        setExpenses(oldExpenses => [...oldExpenses, expense])
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
                    onCreate={createExpenseHandler}
                />
            }

            {/* Overview */}
            <OverviewCard total={totalSpending} />


            {/* Category Overview */}


            {/* Recent Transactions */}

            {/* AppBar */}
            <AppBar/>
        </View>
    );
}


