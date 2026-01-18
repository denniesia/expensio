import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../styles';
import { useState } from 'react';
import { Home, PlusIcon } from 'lucide-react-native';

export default function Header() {
    const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);

    const addExpensePressHandler = () => {
        setShowAddExpenseModal(true)
    }


    return (
        <View style={styles.section}>
            <View >
                <Text style={styles.heading}>Hello! 👋 </Text>
                <Text style={styles.text}>Track your expenses wisely!</Text>
            </View>
            <View>
                <TouchableOpacity onPress={addExpensePressHandler}>
                    <View style={{ backgroundColor: '#4F39F6', padding: 5, borderRadius: 10 }}>
                        <PlusIcon size={32} color={'white'} />
                    </View>
                </TouchableOpacity>

            </View>

        </View>
    );
};