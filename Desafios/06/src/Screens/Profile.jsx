import { Image, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import AddButton from "../Components/AddButton";
import { useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../Services/shopServices";

const Profile = ({navigation}) => {

    const {localId, profileImage} = useSelector(state => state.userReducer.value)
    const estado = useSelector(state => state.userReducer.value)

    console.log("ESTADO TOTAL USERrEDUCER =>")
    console.log(estado);
    

    console.log("localId =>")
    console.log(localId)

    console.log("profileImage =>")
    console.log(profileImage);

    const {data: image} = useGetProfileImageQuery(localId)

    console.log("IMAGE EN PROFILE.JSX =>")
    console.log(image);


    const cameraImage = image?.image

    const launchCamera = async () => {
        navigation.navigate('Image Selector')
    };

    return (
        <View style={styles.container}>
            {profileImage || cameraImage  ? (
                <Image
                    source={{uri: profileImage || cameraImage}}
                    style={styles.image}
                    resizeMode="cover"
                />
            ) : (
                <Image
                    source={require("../Assets/profile.jpg")}
                    style={styles.image}
                    resizeMode="cover"
                />
            )}
            <AddButton onPress={launchCamera} title="Add profile picture" />
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        gap: 15,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
});