import React from 'react'
import { View, Text, Dimensions, Image } from 'react-native'
import { Avatar } from "react-native-elements";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from "react-native-vector-icons/Ionicons";
import { normalize } from '../../utils/utils';
import VideoComponent from '../../components/VideoComponent';
import PhotoComponent from '../../components/PhotoComponent';
import StatementComponent from '../../components/StatementComponent';
import PollComponent from '../../components/PollComponent';
import { flag } from "country-emoji";

const HomeScreen = (props) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView style={{paddingHorizontal: 16}}>
                <View style={{alignItems: "center", paddingVertical: normalize(48), paddingBottom: normalize(96)}}>
                    <View style={{marginTop: 16, flexDirection: "row"}}>
                        <Avatar 
                            source={require("./../../../assets/images/defaultpfp.png")} 
                            size={70} 
                            rounded 
                            containerStyle={{borderColor: "#000", borderWidth: 2}} 
                        />
                        <View style={{marginLeft: 16}}>
                            <View style={{flexDirection: "row"}}>
                                <View style={{flexDirection: "row", alignItems: "center", marginRight: 8}}>
                                    <Ionicons name="people-outline" size={18} />
                                    <Text style={{marginLeft: normalize(4), fontWeight: "bold"}}>146K</Text>
                                </View>
                                <View style={{flexDirection: "row", alignItems: "center", marginRight: 8}}>
                                    <Ionicons name="arrow-forward-outline" size={18} />
                                    <Text style={{marginLeft: normalize(4), fontWeight: "bold"}}>132K</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: "row", alignItems: "center"}}>
                                <Ionicons name="calendar-outline" size={18} color="#0005" />
                                <Text style={{marginLeft: normalize(4), fontWeight: "bold", color: "#0005"}}>Mar 29, 2017</Text>
                            </View>
                            <View style={{flexDirection: "row", alignItems: "center"}}>
                                <Ionicons name="eye-outline" size={18} color="#000"/>
                                <Text style={{marginLeft: normalize(4), fontWeight: "bold", color: "#000"}}>3M</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={{marginTop: 16, fontSize: 20}}>johndoeisgreat</Text>
                    <Text>{flag("US")}</Text>
                    <TouchableOpacity 
                        style={{marginTop: 16 }}
                        onPress={() => props.navigation.dangerouslyGetParent().navigate("Description")}
                    >
                        <Text numberOfLines={8} style={{color: "#0008", fontWeight: "bold", textAlign: "center"}}>
                            Amet a nec senectus suspendisse a elit proin nec a condimentum fusce pulvinar a et 
                            tristique curabitur ullamcorper sem iaculis enim taciti praesent elementum sapien posuere 
                            bibendum faucibus sagittis. Id facilisis dapibus vulputate condimentum parturient nulla 
                            sociosqu odio dui ad a a pharetra eu augue molestie sodales euismod condimentum dignissim 
                            himenaeos adipiscing a sem adipiscing. A porta parturient id parturient nunc ad 
                            suspendisse faucibus odio facilisi vitae turpis dis justo quis primis a dictum bibendum 
                            nascetur a at a vestibulum maecenas volutpat ut gravida. Parturient vestibulum elit 
                            congue penatibus quis lectus himenaeos torquent justo a ac suspendisse commodo pulvinar 
                            inceptos a a maecenas a blandit amet quam sagittis dis. 
                        </Text>
                    </TouchableOpacity>
                    <Text 
                        style={{
                            marginVertical: normalize(32), 
                            fontWeight: "bold", 
                            fontSize: normalize(20)
                        }}
                    >
                        Favorites
                    </Text>
                    <View style={{alignItems: "center"}}>
                        <VideoComponent navigation={props.navigation.dangerouslyGetParent()} />
                        <PhotoComponent navigation={props.navigation.dangerouslyGetParent()}/>
                        <StatementComponent navigation={props.navigation.dangerouslyGetParent()}/>
                        <PollComponent navigation={props.navigation.dangerouslyGetParent()}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen