import {Dimensions, StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container:{
        width: '100%',
        flex:1,
        backgroundColor:"#F8F6F4"
    },
    bannerImage:{
        width: '100%',
        height: '100%',
    },
    imageContainer:{
        height: '27%',
        width: '100%',
    },
    flow:{
        position: "absolute",
    },
    card:{
        width: '90%',
        marginLeft:'5%',
        backgroundColor:'#ffffff',
        height: '55%',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        shadowColor: "#975A6F",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    mc:{
        width: '100%',
        alignItems:'center',
        marginTop:-40
    },
    headerTextContainer:{
        alignItems:'center',
        height: '12%',
        marginTop:'5%',
        justifyContent:'space-around',
    },
    headertext:{
        color: "#634545",
        fontSize:16
    },
    subText:{
        color:'rgba(99,69,69,50)',
        fontSize:12,
        width: '60%',
        textAlign:"center"
    },
    line:{
        width: '86%',
        height: 1,
        marginLeft:'7%',
        backgroundColor:"#E5DFDF",
        marginVertical:'5%'
    },
    subTextTextContainer:{
        width:'86%',
        marginLeft:'7%',
        height: '15%',
        justifyContent:'space-between',
    },
    alltext:{
        color:"#9E7878",
        fontSize:12,
    },
    row:{
        flexDirection:'row',
        alignItems:'center'
    },
    adres:{
        color:"#9E7878",
        fontSize:12,
        width: '80%',
    },
    button:{
        width: '90%',
        marginLeft:'5%',
        backgroundColor:'#E25158',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        marginTop:'10%',
        paddingVertical:'5%'
    },
    redeem:{
        color:"white",
        fontSize:14,
        fontWeight:"600"
    }
})

export default styles