import { Home, PlusIcon } from 'lucide-react-native';
import { TouchableOpacity, View, Text } from 'react-native';
import { styles } from '../../styles';


export default function AppBar() {
 return (
        <View style={styles.endSection}>
            <View style={{marginBottom:10, alignItems: 'center'}}>
                <TouchableOpacity style={{marginBottom:5}}>
                    <Home size={32}/>
                </TouchableOpacity>
                <Text>Home</Text>
            </View>
            
            <View style={{marginBottom:10, alignItems: 'center'}}>
                <TouchableOpacity style={{marginBottom:5}}>
                    <PlusIcon size={32}/>
                </TouchableOpacity>
                <Text>Add</Text>
            </View>
            
        
        </View>
    );
};