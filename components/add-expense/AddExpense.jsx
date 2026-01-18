import { Button, Modal, View, Text, TouchableOpacity, TextInput } from "react-native";
import { ArrowLeft } from 'lucide-react-native'
import { styles } from "../../styles";


export default function AddExpense({
    visible,
    onClose
}) {
    return (
        <Modal 
            visible={visible}
            onRequestClose={onClose}
            animationType="slide"
        >
            <View style={styles.modal}>
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
                <View style={[compStyles.section,]} >
                    <Text style={{fontSize:24}}>
                        Amount <Text style={compStyles.required}>*</Text>
                    </Text>

                    <View
                        style={[
                            compStyles.inputContainer, 
                        ]}
                    >
                        <Text style={compStyles.prefix}>€</Text>

                        <TextInput
                            // value={value}
                            // onChangeText={setValue}
                            keyboardType="decimal-pad"
                            // style={styles.input}
                            // onFocus={() => setFocused(true)}
                            // onBlur={() => setFocused(false)}
                        />
                    </View>
                 </View>
            </View>
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
        fontSize: 28,
        fontWeight: '700',
        color: '#000',
    },
}