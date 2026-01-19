import { Text, View } from 'react-native';
import { styles } from '../../styles';
import RecentTransactionsOverviewCard from '../recent-transactions-overview-card/RecentTransactionsOverviewCard';


export default function RecentTransactionsOverview({
    recentExpenses
}) {

   



    return (
            <View style={[styles.wrapper, {marginBottom: 90}]}>
                <View style={{paddingHorizontal: 30, paddingTop: 20}}>
                    <Text style={{ fontSize: 20 }}>
                        Recent Transactions
                    </Text>
                </View>
                <View style={{alignItems:'center'}}>
                    {recentExpenses.map(expense => (
                        <RecentTransactionsOverviewCard key={expense.id} {...expense} />
                    ))}

                </View>
            </View>
        );
};