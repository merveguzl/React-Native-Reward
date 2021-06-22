import React from 'react'
import { View, Image, FlatList, TouchableOpacity } from 'react-native'
import Banner from '../../json/Banner'
import styles from "../../style/reward";

export default function ScrollBanner({setPage}) {
    return (
        <View style={{width:'100%', height:'30%'}} >
             <FlatList 
                horizontal={true}
                data={Banner}
                numColumns={1}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item})=>(
                    <TouchableOpacity style={styles.bannerButton} onPress={()=>setPage(2)} >
                      <Image 
                        source={item.image}
                        style={{width:'100%', height:'100%'}}
                        resizeMode="contain"
                      />
                    </TouchableOpacity>
                )}
            />
            <View style={styles.bottomScrollLine} >  
                  {
                    Banner.map((item) => (
                      <View style={styles.pLine} />
                    ))
                  }
            </View>
        </View>
    )
}
