import { Text, View } from 'react-native';

export default function RecentTransactionsOverviewCard({
    description,
    category,
    createdAt,
    amount
}) {

    const imageStorage = {
        'Food & Dining': {
            image: '🍽️'
        },
        'Transportation': {
            image: '🚗'
        },
        'Bills & Utilities': {
            image: '⚡'
        },
        'Shopping': {
            image: '🛍️'
        },
        'Healthcare': {
            image: '🏥'
        },
        'Entertainment': {
            image: '🎬'
        },
        'Other': {
            image: '👜'
        },
    }

    return (
        <View style={compStyles.container}>
            <View style={{flexDirection: 'row', gap:15, padding: 5, marginTop:5, }}>
                <View style={{padding:15, backgroundColor: 'white', borderRadius: 15}}>
                    <Text style={{fontSize:18}}>{imageStorage[category]?.image}</Text>
                </View>
                <View style={{justifyContent:'center'}}>
                    <Text style={{ fontSize: 18 }}>{description}</Text>
                    <View style={compStyles.categoryWrapper}>
                        <Text>{category}</Text>
                    </View>
                </View>
            </View>

            <View>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>- {amount}€</Text>
            </View>

        </View>
    );
};

const compStyles = {
    container : {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20, 
        marginTop: 10, 
        marginBottom: 10, 
        backgroundColor: '#f2f1f5', 
        width: '90%', 
        borderRadius: 10 
    },
    categoryWrapper: {
        backgroundColor:'white', 
        paddingHorizontal: 5,
        paddingVertical: 3, 
        borderRadius: 10, 
        borderWidth: 1, 
        borderColor: '#cccc'
    }
}