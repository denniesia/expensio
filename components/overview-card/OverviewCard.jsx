import { Text, View } from "react-native";
import { Euro } from 'lucide-react-native'
import { Bar } from 'react-native-progress';


export default function OverviewCard({
    total
}) {
    return (
            <View style={{padding:30, backgroundColor: '#4630DE', width: '90%', alignSelf: 'center',borderRadius: 10,}}>
                <View style={compStyles.container}>
                    <View>
                        <Text style={{fontSize: 14, color:'white'}}>
                            Total Spent This Month
                        </Text>
                        <Text style={{fontSize: 26, fontWeight: 'bold', color:'white'}}>
                            €{total}
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
                            Remaining: €{3500 - total}
                        </Text>
                    </View>
                    <View>
                        <Bar
                            progress={Math.min(total/3500,1)}
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
                           {(total/3500*100).toFixed(2)} %
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