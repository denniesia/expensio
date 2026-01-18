import { Home, PlusIcon } from 'lucide-react-native';
import { TouchableOpacity, View } from 'react-native';


export default function AppBar() {
 return (
        <View>
            <TouchableOpacity>
                <Home/>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <PlusIcon/>
            </TouchableOpacity>
        </View>
    );
};