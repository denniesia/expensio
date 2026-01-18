import React, { useState } from "react";
import {
    View,
    Text,
    Pressable,
    Image,
    StyleSheet,
} from "react-native";


export default function CategoryCard({
    categories,
    value,
    onChange
}) {

    return (
        <View style={styles.container}>
            {categories.map(item => {
                const selected = value === item.label;

                return (
                    <Pressable
                        key={item.id}
                        onPress={() => onChange(item.label)}
                        style={[
                            styles.card,
                            selected && styles.active,
                        ]}
                    >
                        <View style={{flexDirection:'row', gap:5, alignItems:'center'}}>
                            <Text style={{fontSize:26}}>{item.emoji}</Text>
                            <Text style={styles.text}>{item.label}</Text>
                        </View>
                        
                    </Pressable>
                );
            })}
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 12,
        marginTop: 12,
    },

    card: {
        width: "48%",
        padding: 14,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: "#E5E7EB",
        backgroundColor: "#FFFFFF",
    },

    active: {
        borderColor: "#6366F1",
        backgroundColor: "#EEF2FF",
    },

    text: {
        fontSize: 14,
        flexWrap: 'wrap',
        fontWeight: "500",
    },
});