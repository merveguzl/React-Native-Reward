import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from '../style/detail'

export default function Detail({setPage}) {
    return (
        <View style={styles.container} >
            <View style={styles.imageContainer} >
                <Image 
                    source={require("../asset/detailBanner.png")}
                    style={styles.bannerImage}
                />
                <Image 
                    source={require("../asset/bannerFlow.png")}
                    style={[styles.bannerImage, styles.flow]}
                />
            </View>
            <View style={styles.card} >
                <View style={styles.mc} >
                    <Image 
                        source={require("../asset/mcImage.png")}
                    />
                </View>
                <View style={styles.headerTextContainer} >
                    <Text style={styles.headertext} >
                        Samurai Pork Burger 89.- THB
                    </Text>
                    <Text style={styles.subText} >
                        Valid from Today - 31 Dec 2019 2,500 points
                    </Text>
                </View>
                <View style={styles.line} />
                <View style={styles.subTextTextContainer} >
                    <Text style={styles.headertext} >
                        Highlight
                    </Text>
                    <Text style={styles.alltext} >
                        Use 2,500 points to redeem to buy Samurai Pork Burger 89 baht from 249 baht, and get FREE French Fries at McDonald's all branches
                    </Text>
                </View>
                <View style={styles.line} />
                <View style={[styles.subTextTextContainer,styles.row]} >
                    <Image 
                        source={require("../asset/home.png")}
                    />
                    <Text style={styles.adres} >
                        97/11 Big C Rajdamri Building, Office Room 1, 
                        5th Floor, Rajdamri Road, Lumpini, Pathumwan,
                        Bangkok 10330 THAILAND
                    </Text>
                </View>
                <View style={styles.line} />
                <View style={[styles.subTextTextContainer,styles.row]} >
                    <Image 
                        source={require("../asset/phone.png")}
                    />
                    <View style={{width:'80%'}} >
                        <Text style={[styles.adres]}>
                            McDelivery 1711 (Food Order)
                        </Text>
                        <Text style={[styles.adres]}>
                            +66 (0) 2696 4900 (RSC)
                        </Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={()=>setPage(1)} >
                <Text style={styles.redeem} >
                    REDEEM
                </Text>
            </TouchableOpacity>
        </View>
    )
}
