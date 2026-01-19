import { View, Text, StyleSheet } from "react-native";

export default function CategoryOverviewCard({ data }) {
    return (
        <View>
            {data.map((item) => (
                <View key={item.title} style={styles.row}>
                    {/* Left */}
                    <View style={styles.left}>
                        <View
                            style={[styles.dot, { backgroundColor: item.color }]}
                        />
                        <Text style={styles.label}>{item.title}</Text>
                    </View>

                    {/* Right */}
                    <View style={styles.right}>
                        <Text style={styles.amount}>${item.value}</Text>
                        <Text style={styles.percent}>
                            {isNaN(item.percent) ? '0%' : `${item.percent}%`}
                        </Text>
                    </View>
                </View>
            ))}
        </View>
    );
}
const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12
    },
    left: {
        flexDirection: "row",
        alignItems: "center",
    },
    dot: {
        height: 12,
        width: 12,
        borderRadius: 4,
        marginRight: 10
    },
    label: {
        fontSize: 16,
        color: "black", 
        maxWidth: 80,
        flexWrap: 'wrap',
    },
    right: {
        alignItems: "flex-end"
    },
    amount: {
        fontSize: 16,
        fontWeight: "600"
    },
    percent: {
        fontSize: 12,
        color: "#6B7280",
        marginTop: 2
    }
});