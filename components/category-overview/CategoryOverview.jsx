import { Text, View, StyleSheet } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import { useMemo, } from "react";
import CategoryOverviewCard from "../category-overview-card/CategoryOverviewCard";
import { styles } from "../../styles";

export default function CategoryOverview({
    expenses,
    total
}) {

    const foodExpenses = expenses.filter(item => item.category === 'Food & Dining');
    const totalFoodExpenses = useMemo(
        () => foodExpenses.reduce((acc, expense) => acc + expense.amount, 0),
        [expenses],
    );

    const transportExpenses = expenses.filter(item => item.category === 'Transportation');
    const totalTransportExpenses = useMemo(
        () => transportExpenses.reduce((acc, expense) => acc + expense.amount, 0),
        [expenses],
    );

    const billsExpenses = expenses.filter(item => item.category === 'Bill & Utilities');
    const totalBillsExpenses = useMemo(
        () => billsExpenses.reduce((acc, expense) => acc + expense.amount, 0),
        [expenses],
    );

    const shoppingExpenses = expenses.filter(item => item.category === 'Shopping');
    const totalShoppingExpenses = useMemo(
        () => shoppingExpenses.reduce((acc, expense) => acc + expense.amount, 0),
        [expenses],
    );

    const otherExpenses = expenses.filter(item => item.category === 'Healthcare' || item.category === 'Entertainment');
    const totalOtherExpenses = useMemo(
        () => otherExpenses.reduce((acc, expense) => acc + expense.amount, 0),
        [expenses],
    );

    const pieData = [
        {
            title: "Food & Dining",
            value: totalFoodExpenses,
            color: "#FF4D4F",
            percent: (totalFoodExpenses / total * 100).toFixed(2) 
        },
        {
            title: "Transport",
            value: totalTransportExpenses,
            color: "#3B82F6",
            percent: (totalTransportExpenses / total * 100).toFixed(2) 

        },
        {
            title: "Bills",
            value: totalBillsExpenses,
            color: "#22C55E",
            percent: (totalBillsExpenses / total * 100).toFixed(2)
        },
        {
            title: "Shopping",
            value: totalShoppingExpenses,
            color: "#FACC15",
            percent: (totalShoppingExpenses / total * 100).toFixed(2)
        },
        {
            title: "Others",
            value: totalOtherExpenses,
            color: "#9CA3AF",
            percent: (totalOtherExpenses / total * 100).toFixed(2) || 0
        }

    ];

    return (
        <View style={styles.wrapper}>
            <View style={{paddingHorizontal: 30, paddingTop: 20}}>
                <Text style={{ fontSize: 20 }}>Spending by Category</Text>
            </View>
            <View style={{ flexDirection: 'row', gap: 10, alignItems:'center', padding: 5, justifyContent: 'center'}}>
                <View>
                    <PieChart
                        donut
                        radius={80}
                        textSize={20}
                        textBackgroundRadius={26}
                        data={pieData}
                    />
                </View>
                <View
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        marginTop: 20,
                    }}>
                        <CategoryOverviewCard data={pieData}/>

                </View>
            </View>
        </View>
    );
};