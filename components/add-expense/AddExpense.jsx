import { Button, Modal, View, Text, TouchableOpacity, TextInput, ScrollView, Pressable, Keyboard } from "react-native";
import { ArrowLeft} from 'lucide-react-native'
import { styles } from "../../styles";
import uuid from 'react-native-uuid'
import { Dropdown } from 'react-native-element-dropdown';
import { useState, useEffect } from "react";
import CategoryCard from "../category-card/CategoryCard";


export default function AddExpense({
    visible,
    onClose,
    onCreate
}) {
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState('');
    const [notes, setNotes] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState(null);
    const [payment, setPayment] = useState(null);
    const [paymentData, setPaymentData] = useState(
        [
            {
                label: 'Cash', value: 'cash'
            },
            {
                label: 'CreditCard', value: 'creditCard'
            },
        ]
    );

    const [categories, setCategories] = useState([
        { id: 1, label: "Food & Dining", emoji: "🍽️" },
        { id: 2, label: "Transportation", emoji: "🚗" },
        { id: 3, label: "Bills & Utilities", emoji: "⚡" },
        { id: 4, label: "Shopping", emoji: "🛍️" },
        { id: 5, label: "Healthcare", emoji: "🏥" },
        { id: 6, label: "Entertainment", emoji: "🎬" },

    ]);

    useEffect(() => {
        if (paymentData.length > 0) {
            setPayment(paymentData[0].value)
        }
    }, [paymentData])

    useEffect(() => {
        if (categories.length > 0) {
            setCategory(categories[0].label)
        }
    }, [categories])

    const addExpensePressHandler = () => {
        const newExpense = {    
            id: uuid.v4(),
            amount: Number(amount),
            description,
            category,
            payment,
            date,
            notes,
            createdAt: new Date(),
        };

        onCreate(newExpense);
        onClose();
        console.log(newExpense)
        Keyboard.dismiss();
    }

    return (
        <Modal
            visible={visible}
            onRequestClose={onClose}
            animationType="slide"
        >
            <ScrollView>
                <View style={styles.modal}>

                    {/* Header */}
                    <View
                        style={{
                            flexDirection: 'row',
                            gap: 20,
                            alignSelf: 'left',
                            paddingHorizontal: 15,
                            marginBottom: 20
                        }}>
                        <TouchableOpacity style={{ backgroundColor: '#F3F4F6', padding: 8, borderRadius: 20 }}>
                            <ArrowLeft size={29} onPress={onClose} />
                        </TouchableOpacity>

                        <Text style={[styles.heading, { alignSelf: 'center' }]}>Add Expense</Text>
                    </View>

                    {/* Amount Info */}
                    <View style={[compStyles.section,]} >

                        <Text style={{ fontSize: 24 }}>
                            Amount <Text style={compStyles.required}>*</Text>
                        </Text>

                        <View
                            style={[
                                compStyles.inputContainer,
                            ]}
                        >
                            <Text style={compStyles.prefix}>€</Text>

                            <TextInput
                                value={amount}
                                onChangeText={setAmount}
                                keyboardType="number-pad"
                                style={styles.input}
                                autoFocus

                            />

                        </View>

                    </View>

                    {/* Description Info */}
                    <View style={[compStyles.section,]} >
                        <Text style={{ fontSize: 24 }}>
                            Description <Text style={compStyles.required}>*</Text>
                        </Text>

                        <View
                            style={[
                                compStyles.inputContainer,
                            ]}
                        >
                            <TextInput
                                value={description}
                                onChangeText={setDescription}
                                placeholder="Whole Foods Marker"
                                keyboardType="default"
                                style={styles.input}
                            // onFocus={() => setFocused(true)}
                            // onBlur={() => setFocused(false)}
                            />

                        </View>
                    </View>


                    {/* Category Info */}
                    <View style={[compStyles.section,]} >
                        <Text style={{ fontSize: 24 }}>
                            Category <Text style={compStyles.required}>*</Text>
                        </Text>

                        <CategoryCard
                            categories={categories}
                            value={category}
                            onChange={setCategory}
                        />
                    </View>


                    {/* Date & Payment Info */}
                    <View style={{ flexDirection: 'row', gap: 10 }}>


                        <View style={[compStyles.halfSection,]} >
                            <Text style={{ fontSize: 24 }}>
                                Date
                            </Text>

                            <View
                                style={[
                                    compStyles.inputContainer,
                                ]}
                            >
                                <TextInput
                                    value={date}
                                    onChangeText={setDate}
                                    placeholder="YYYY-MM-DD"
                                    keyboardType="default"

                                    style={styles.input}
                                />
                            </View>
                        </View>

                        <View style={[compStyles.halfSection,]} >
                            <Text style={{ fontSize: 24 }}>
                                Payment
                            </Text>

                            <View
                                style={[
                                    compStyles.inputContainer,
                                ]}
                            >
                                <Pressable hitSlop={20}>

                                    <Dropdown
                                        placeholder="Select payment"
                                        value={payment}
                                        onChange={item => { setPayment(item.value) }}
                                        data={paymentData}

                                        mode="modal"
                                        labelField='label'
                                        valueField='value'
                                        style={[styles.dropdown, { width: 250 }]}
                                        maxHeight={100}
                                    >

                                    </Dropdown>
                                </Pressable>
                            </View>
                        </View>

                    </View>

                    {/* Notes Info */}
                    <View style={[compStyles.section,]} >
                        <Text style={{ fontSize: 24 }}>
                            Notes (Optional)
                        </Text>

                        <View
                            style={[
                                compStyles.inputContainer,
                            ]}
                        >
                            <TextInput
                                value={notes}
                                onChangeText={setNotes}
                                placeholder="Weekly grocery shopping..."
                                keyboardType="default"
                                style={styles.input}
                            />
                        </View>
                    </View>

                    <View style={compStyles.btn}>
                        <Button
                            color='white'
                            title="Add Expense"
                            onPress={addExpensePressHandler}

                        />
                    </View>

                </View>
            </ScrollView>
        </Modal>
    );
};

const compStyles = {
    section: {
        backgroundColor: 'white',
        width: '90%',
        gap: 10,
        alignItems: 'flex-right',
        borderWidth: 1,
        borderColor: '#cccc',

        borderRadius: 16,
        padding: 16,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 10,

        marginBottom: 20
    },
    halfSection: {
        backgroundColor: 'white',
        width: '45%',
        gap: 10,
        alignItems: 'flex-right',
        borderWidth: 1,
        borderColor: '#cccc',

        borderRadius: 16,
        padding: 16,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 10,

        marginBottom: 20
    },
    required: {
        color: 'red',
    },

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#E5E7EB',
        borderRadius: 14,
        paddingHorizontal: 14,
        height: 60,
    },

    focusedBorder: {
        borderColor: '#4F46E5', // blue outline
    },
    prefix: {
        fontSize: 22,
        color: '#9CA3AF',
        marginRight: 6,
    },
    input: {
        flex: 1,
        fontSize: 36,
        fontWeight: '700',
        color: '#000',
    },
    btn: {
        width: '90%',
        backgroundColor: '#4F39F6',
        padding: 10,
        borderRadius: 20,
        marginBottom: 60,

    },
    dropdown: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    dropdownList: {
        width: 200,
        borderColor: '#007AFF',
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#fff',
        maxHeight: 200, // scrollable if too many items
    },
}