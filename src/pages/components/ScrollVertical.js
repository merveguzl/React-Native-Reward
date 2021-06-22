import React from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import miniBanner from '../../json/miniBanner'
import styles from '../../style/reward'

export default function ScrollVertical() {
    return (
        <View style={styles.verticalContainer} >
            <FlatList 
                data={miniBanner}
                renderItem={({item})=>(
                    <View style={styles.card} >
                        <View style={styles.cardImageContainer} >
                            <Image 
                                style={styles.cardImage}
                                source={item.image}
                            />
                        </View>
                        <View style={styles.verticalItem} >
                            <View style={styles.emptyBox} />
                            <View style={styles.box} >
                                <View style={styles.iconContainer} >
                                    <Image 
                                        style={styles.cardImage}
                                        source={item.icon}
                                    />
                                </View>
                                <Text style={styles.dateText} >{item.date}</Text>
                                <Text style={styles.titleText} >{item.title}</Text>
                                <Text style={styles.descText} >{item.description}</Text>
                            </View>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}
