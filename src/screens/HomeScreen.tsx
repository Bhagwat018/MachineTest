import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logoutSuccess } from '../redux/AuthSlice';
import { LogOutIcon, PlusIcon } from '../components/Icons';
import { addToCart } from '../redux/CartSlice';

const HomeScreen = () => {
    const navigation = useNavigation<any>();
    const dispatch = useDispatch()
    const { products } = useSelector((state: any) => state.products);

    const handleLogOut = async () => {
        await AsyncStorage.setItem("isLogin", "false")
        dispatch(logoutSuccess())
    }

    const handleAddToCart = (item: any) => {
        dispatch(addToCart(item));
        navigation.navigate('CartDetail', { product: item });
    }
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.heading}>Product Details</Text>
                <TouchableOpacity onPress={handleLogOut} >
                    <LogOutIcon />
                </TouchableOpacity>

            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ gap: 16 }}
                numColumns={2}
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.cart}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text style={styles.name}>{item.name}</Text>
                        <View style={styles.priceContainer}>
                            <Text style={styles.price}>Price: ${item.price}</Text>
                            <TouchableOpacity onPress={() => handleAddToCart(item)}>
                                <PlusIcon />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    cart: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        marginVertical: 10,
        width: '48%',
        marginHorizontal: 4
    },
    image: {
        height: 100,
        width: 100
    },
    heading: {
        alignSelf: 'flex-start',
        fontSize: 24,
        fontWeight: 'bold',
        padding: 16
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 8
    },
    price: {
        fontSize: 16,
        color: 'green'
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'purple',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 160,
        paddingRight: 20
    },
})