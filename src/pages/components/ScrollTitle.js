import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import categories from '../../json/categories'
import styles from "../../style/reward";

export default function ScrollTitle({activePage}) {
    return (
        <View style={styles.scrollTitle} >
            <FlatList 
                horizontal={true}
                data={categories}
                showsHorizontalScrollIndicator={false}
                renderItem={({item})=>(
                    <TouchableOpacity style={[styles.cateView, activePage == item.id && {backgroundColor:'#E25158'}]} >
                        <Text style={{color: activePage == item.id ? "#ffffff" : "#655E5C" }} >
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
