import {Dimensions, StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor:'#F8F6F4'
    },
    banner:{
        position:"absolute",
        top: 0,
    },
    header:{
        padding: '5%',
        justifyContent:"center",
        height: '20%',
        width: '100%'
    },
    rewardText:{
        fontSize:40,
        color: "white",
        marginBottom:'2%',
    },
    subrewardText:{
        fontSize:16,
        color:"white"
    },
    notiView:{
        position: "absolute",
        right: '5%',
        top: '45%'
    },
    puan:{
        width: 10,
        height: 10,
        borderRadius:5,
        backgroundColor:'red',
        position: "absolute",
        zIndex:1,
        right: 0,
        top: 1,
    },
    cateView:{
        backgroundColor:'#E5DFDF',
        borderRadius:30,
        paddingHorizontal:20,
        paddingVertical:10,
        marginHorizontal:5,
        alignItems:'center',
        justifyContent:'center'
    },
    scrollTitle:{
        height: '8%',
        paddingVertical:'3%'
    },
    line:{
        width: Dimensions.get("window").width/7,
        height: Dimensions.get("window").width/7,
        backgroundColor:'#E25158',
        borderRadius:Dimensions.get("window").width/14,
        marginTop:-Dimensions.get("window").width/14,
        zIndex:100
    },
    bannerButton:{
        width: Dimensions.get("window").width*95/100,
        height: '100%',
        backgroundColor:'white',
        borderRadius:30,
        marginHorizontal:Dimensions.get("window").width*2.5/100
    },
    verticalContainer:{
        height: '30%',
    },
    verticalItem:{
        width: Dimensions.get("window").width*85/100,
        height: Dimensions.get("window").height*16/100,
        backgroundColor:'#ffffff',
        margin: Dimensions.get("window").width*2.5/100,
        borderRadius:20,
        shadowColor: "#975A6F",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        flexDirection:'row',
        alignItems:'center'
    },
    card:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
    },
    cardImage:{
      width: '100%',
      height: '100%'
    },
    cardImageContainer:{
        width: Dimensions.get("window").height*13/100,
        height: Dimensions.get("window").height*13/100,
        zIndex:1,
        borderRadius:20,
        marginRight:-Dimensions.get("window").height*10/100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    bottomBar:{
        height: '10%',
        backgroundColor:'#ffffff',
        width: '100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    emptyBox:{
        width: Dimensions.get("window").height*12/100,
    },
    box:{
        width: Dimensions.get("window").width*50/100,
        height: Dimensions.get("window").height*12/100,
        justifyContent:"space-around"
    },
    iconContainer:{
        width: Dimensions.get("window").height*5/100,
        height: Dimensions.get("window").height*5/100,
        position: "absolute",
        right: -20
    },
    dateText:{
        color:'rgba(99,69,69,50)',
        fontSize:12
    },
    titleText:{
        color:"#634545",
        fontSize:16
    },
    descText:{
        color:"#9E7878",
        fontSize:12,
        width: '80%',
    },
    bottomButton:{
        width: Dimensions.get("window").width*20/100,
        height: Dimensions.get("window").width*13/100,
        alignItems:'center',
        justifyContent:"space-around"
    },
    bottomText:{
        color:"#D4C9CB",
        fontSize:12
    },
    bottomScrollLine:{
        height: '10%',
        alignItems:"center",
        justifyContent:"space-around",
        flexDirection:'row',
        paddingHorizontal:'30%',
    },
    pLine:{
        width: Dimensions.get("window").width*5/100,
        height: 3,
        backgroundColor:"#E5DFDF",

    }
})

export default styles;