import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CardMenu = ({icon, text}) => {
    return (
        <View>
            <TouchableOpacity style={{
                flexDirection: 'row',

                alignItems: 'center',
                padding: 18
            }}>
                <Image
                    source={icon}
                    style={{
                        width: 18,
                        height: 18,
                        marginRight: 15
                    }}
                />

                <Text
                    style={{
                        fontSize: 18,
                        fontFamily: 'Roboto'
                    }}>{text}</Text>
            </TouchableOpacity>
            <View style={styles.divider1}>

            </View>
        </View>
    )
}

export default CardMenu

const styles = StyleSheet.create({
    divider1: {
        height: 1,
        backgroundColor: '#E0E0E0', // hoặc màu khác tùy bạn
                   // khoảng cách với content trên
        marginHorizontal: 16       // padding 2 bên
    }
})