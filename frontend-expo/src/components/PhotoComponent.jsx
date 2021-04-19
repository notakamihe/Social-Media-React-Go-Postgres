import React, {useState} from 'react'
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";
import { navigate, normalize } from '../utils/utils';
import AutoHeightImage from "react-native-auto-height-image";
import { Avatar } from 'react-native-elements';
import { decode } from 'html-entities';
import Popover from 'react-native-popover-view/dist/Popover';

const PhotoComponent = (props) => {
    const widthPercentage = props.widthPercentage || 0.8
    const [visible, setVisible] = useState(false)

    return (
        <TouchableOpacity
            style={{marginVertical: normalize(16), alignItems: "center"}} 
            onPress={() => navigate(props.navigation, "PhotoDetail")}
        >
            <AutoHeightImage 
                source={require("./../../assets/images/defaultpfp.png")}
                width={Dimensions.get("window").width * widthPercentage}
                style={{
                    borderRadius: 15,
                    borderWidth: 2,
                    borderColor: "#000"
                }}
            />
            <Text 
                style={{fontWeight: "bold", marginTop: 8}} 
                numberOfLines={1}
            >
                This is the title of my amazing video
            </Text>
            <View style={{flexDirection: "row", marginTop: 4}}>
                <Avatar size={20} rounded source={require("./../../assets/images/defaultpfp.png")} />
                <Text style={{marginLeft: 16}}>johndoeisgreat {decode("&#183")} 2d</Text>
            </View>
            <View 
                style={{
                    flexDirection: "row", 
                    alignItems: "center", 
                    justifyContent: "center",
                }}
            >
                <View style={{flexDirection: "row", alignItems: "center", marginHorizontal: 6}}>
                    <Ionicons name="eye-outline" size={18} color="#000"/>
                    <Text style={{marginLeft: normalize(4), fontWeight: "bold", color: "#000"}}>700K</Text>
                </View>
                <View style={{flexDirection: "row", alignItems: "center", marginHorizontal: 6}}>
                    <Ionicons name="heart-outline" size={18} color="#000"/>
                    <Text style={{marginLeft: normalize(4), fontWeight: "bold", color: "#000"}}>50K</Text>
                </View>
                <View style={{flexDirection: "row", alignItems: "center", marginHorizontal: 6}}>
                    <Ionicons name="chatbox-outline" size={18} color="#000"/>
                    <Text style={{marginLeft: normalize(4), fontWeight: "bold", color: "#000"}}>8K</Text>
                </View>
                {
                    props.showOptions ?
                
                    <Popover
                        from={(
                            <TouchableOpacity 
                                style={{flexDirection: "row", alignItems: "center", marginHorizontal: 6, padding: normalize(8)}}
                                onPress={() => setVisible(true)}
                            >
                                <Ionicons name="ellipsis-horizontal-outline" size={18} color="#000"/>
                            </TouchableOpacity>
                        )}
                        popoverStyle={{
                            paddingHorizontal: normalize(16),
                            paddingVertical: normalize(8)
                        }}
                        verticalOffset={normalize(-15)}
                        arrowStyle={{
                            backgroundColor: "#0000"
                        }}
                        isVisible={visible}
                        onRequestClose={() => setVisible(false)}
                    >
                        
                        <TouchableOpacity 
                            style={{marginVertical: normalize(8)}} 
                            onPress={() => { 
                                if (props.navigation) {
                                    navigate(props.navigation, "EditPhoto") 
                                    setVisible(false)
                                }
                            }}
                        >
                            <Text>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={{marginVertical: normalize(8)}}
                        >
                            <Text>Delete</Text>
                        </TouchableOpacity>
                    </Popover> : null
                }
            </View>
        </TouchableOpacity>
    )
}

export default PhotoComponent
