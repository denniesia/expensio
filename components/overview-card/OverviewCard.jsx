import { Text, View } from "react-native";
import { Euro } from 'lucide-react-native'
import { styles } from "../../styles";
import { Bar } from 'react-native-progress';


export default function OverviewCard() {
    return (
            <View style={{padding:30, backgroundColor: '#4630DE', width: '90%', alignSelf: 'center',borderRadius: 10,}}>
                <View style={compStyles.container}>
                    <View>
                        <Text style={{fontSize: 14, color:'white'}}>
                            Total Spent This Month
                        </Text>
                        <Text style={{fontSize: 26, fontWeight: 'bold', color:'white'}}>
                            €2,654
                        </Text>
                    </View>
                    <View 
                        style={{
                            marginRight: 10, 
                            padding: 10, 
                            backgroundColor:'#6041DC',
                            borderRadius: 20
                        }}
                    >
                        <Euro size={34} color={'white'}/>
                    </View>
                    
                </View>
                <View style={{marginTop: 30}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{color:'white'}}>
                            Budget: €3,500
                        </Text>
                        <Text style={{color:'white'}}>
                            Remaining: €635
                        </Text>
                    </View>
                    <View>
                        <Bar
                            progress={0.4}
                            width={300}
                            height={14}
                            style={{ marginTop: 10, alignSelf:'center' }}
                            color='#030213'
                            unfilledColor='#864BE1'
                            borderColor='#030213'
                            borderRadius={10}
                        />    
                    </View>
                    <View style={{marginTop: 10}}> 
                        <Text  style={{color:'white'}}>
                            81.3% used
                        </Text>
                        
                    </View>
                </View>
            </View>
        );
};

const compStyles = {
   container: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center'
   }
}