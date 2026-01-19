import { StatusBar } from "expo-status-bar";
import {
	ScrollView,
	View,
} from "react-native";
import { styles } from "./styles";
import { Eclipse, Home, PlusIcon } from "lucide-react-native";

import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useMemo, useState, useEffect } from "react";
import Header from "./components/header/Header";
import AppBar from "./components/app-bar/AppBar";
import AddExpense from "./components/add-expense/AddExpense";
import OverviewCard from "./components/overview-card/OverviewCard";
import CategoryCard from "./components/category-card/CategoryCard";
import CategoryOverview from "./components/category-overview/CategoryOverview";
import RecentTransactionsOverview from "./components/recent-transactions-overview/RecentTransactionsOverview";

export default function App() {
	const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
	const [expenses, setExpenses] = useState([]);
	const [recentExpenses, setRecentExpenses] = useState([]);

	const totalSpending = useMemo(
		() => expenses.reduce((acc, expense) => acc + expense.amount, 0),
		[expenses],
	);

	const addExpensePressHandler = () => {
		setShowAddExpenseModal(true);
	};

	const createExpenseHandler = (expense) => {
		setExpenses((oldExpenses) => [...oldExpenses, expense]);
	};


	useEffect(() => {
           if (expenses.length > 0) {
			const recentTransactions = Object.values(expenses).sort((a,b) => b.createdAt - a.createdAt).slice(0,5)
			setRecentExpenses(recentTransactions)
		   }
    }, [expenses])

	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.container}>
				<ScrollView>
					<View>
						<View style={{ flexDirection: "column", gap: 20 }}>
							<StatusBar style="auto" />

							{/* Header */}
							<Header modalHandler={addExpensePressHandler} />
							{showAddExpenseModal && (
								<AddExpense
									onClose={() => setShowAddExpenseModal(false)}
									visible={showAddExpenseModal}
									onCreate={createExpenseHandler}
								/>
							)}

							{/* Overview */}
							<OverviewCard total={totalSpending} />

							{/* Category Overview */}
							<CategoryOverview expenses={expenses} total={totalSpending}/>

							{/* Recent Transactions */}
							<RecentTransactionsOverview  recentExpenses={recentExpenses} />
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
			<View>
				{/* AppBar */}
				<AppBar modalHandler={addExpensePressHandler} />
			</View>
		</SafeAreaProvider>
	);
}
