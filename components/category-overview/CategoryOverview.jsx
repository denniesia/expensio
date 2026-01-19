import { Text, View, StyleSheet } from "react-native";
import { PieChart } from "react-native-gifted-charts";


export default function CategoryOverview({
    expenses
}) {
    const pieData = [
        { title: "Food", value: 1150, color: "#FF4D4F" },
        { title: "Transport", value: 680, color: "#3B82F6"},
        { title: "Bills", value: 520, color:"#22C55E"},
        { title: "Shopping", value: 350, color:  "#FACC15"},
        { title: "Others", value: 147, color: "#9CA3AF"}
    ];



    return (
        <View style={{padding:30, backgroundColor: '#ffff', width: '90%', alignSelf: 'center',borderRadius: 10, gap:20}}> 
            <View>
                <Text style={{fontSize: 20}}>Spending by Category</Text>
            </View>
            <View>
                <View>
                   <PieChart
                    donut
                    
                    radius={100}
                    textSize={20}
                    showTextBackground
                    textBackgroundRadius={26}
                    data={pieData}
                />


                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  legend: {
    marginLeft: 20
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8
  }
});