import React, {useEffect, useState} from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import styles from "../style/reward";
import ScrollTitle from './components/ScrollTitle';
import LinearGradient from 'react-native-linear-gradient';
import ScrollBanner from "./components/ScrollBanner";
import ScrollVertical from './components/ScrollVertical';
import Bottom from './components/Bottom';

export default function Reward({setPage}) {
    let temp = []
    const [activePage, setActivePage] = useState(1);
    const [activeBottom, setActiveBottom] = useState(3);

    useEffect(() => {

        let a = 0;

        while (a < 5) {
            temp = [...temp,""]
            a = a + 1;
        }

    }, [])

    return (
        <View style={styles.container} >
            <View style={{height:'20%', width:'100%', position:"absolute"}} >
                <LinearGradient start={{x: 0, y: 1}} end={{x: 0, y: 0}} colors={['#E25158', '#2A1943']} style={{width:'100%', height:'80%', zIndex:1}}  />
                <View style={{flexDirection:'row', width:'100%', height:'5%' }} >
                    <View  style={[styles.line,{marginLeft:-Dimensions.get("window").width/14}]}  />
                    <View  style={styles.line} /> 
                    <View  style={[styles.line]} />
                    <View  style={[styles.line]} />
                    <View  style={[styles.line]} />
                    <View  style={[styles.line]} />
                    <View  style={[styles.line]} />
                    <View  style={[styles.line]} />
                    <View  style={[styles.line]} />
                </View>
            </View>
            <View style={styles.header} >
                <View style={styles.notiView} >
                    <View 
                        style={styles.puan}
                    />
                    <Image 
                        source={require("../asset/notification.png")}
                    />
                </View>
                <Text style={styles.rewardText} >
                    Reward
                </Text>
                <Text style={styles.subrewardText} >
                    Collect points to redeem special rewards
                </Text>
            </View>
            <ScrollTitle activePage={activePage} />
            <ScrollBanner setPage={setPage} />
            <ScrollVertical />
            <Bottom setActiveBottom={setActiveBottom} activeBottom={activeBottom} />
        </View>
    )
}
