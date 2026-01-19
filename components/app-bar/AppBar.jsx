import { Home, PlusIcon } from 'lucide-react-native';
import { TouchableOpacity, View, Text } from 'react-native';
import { styles } from '../../styles';


export default function AppBar({
    modalHandler
}) {
 return (
        <View style={[styles.endSection, compStyles.appBar]}>
            <View style={{marginBottom:10, alignItems: 'center'}}>
                <TouchableOpacity style={{marginBottom:5}}>
                    <Home size={32}/>
                </TouchableOpacity>
                <Text>Home</Text>
            </View>
            
            <View style={{marginBottom:10, alignItems: 'center'}}>
                <TouchableOpacity style={{marginBottom:5}} onPress={modalHandler}>
                    <PlusIcon size={32}/>
                </TouchableOpacity>
                <Text>Add</Text>
            </View>

        </View>
    );
};

const compStyles = {
    appBar: {
        position: 'absolute',
        bottom: 0,       
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 12,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#ddd',
        paddingVertical: 20
    }
}