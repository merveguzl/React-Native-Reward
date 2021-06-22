import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from '../../style/reward'

export default function Bottom({activeBottom, setActiveBottom}) {

    const data = [
        {
            id:1,
            title:"Usage",
            image:require("../../asset/usage.png")
        },
        {
            id:2,
            title:"Package",
            image:require("../../asset/package.png")
        },
        {
            id:3,
            title:"Reward",
            image:require("../../asset/reward.png")
        },
        {
            id:4,
            title:"Account",
            image:require("../../asset/account.png")
        },
    ]

    return (
        <View style={styles.bottomBar} >
            {
                data.map((item)=>(
                    <TouchableOpacity key={item.id} style={styles.bottomButton} >
                        <Image 
                            source={item.image}
                        />
                        <Text style={[styles.bottomText,{color: activeBottom === item.id ? "#E25158" : "#D4C9CB"}]} >
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}
