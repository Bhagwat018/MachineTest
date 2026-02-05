import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/CartSlice'
import { PlusIcon, MinusIcon } from '../components/Icons'

const CardScreen = () => {
    const dispatch = useDispatch()
    const { cartItems } = useSelector((state: any) => state.cart)

    const renderVariant = (variant: any, parentId: number) => (
        <View style={styles.varientContainer}>
            <Image source={{ uri: variant.image }} style={styles.varientImage} />
            <Text>{variant.name}</Text>
            <Text>{variant.price}</Text>
            <TouchableOpacity onPress={() => {
                const parentItem = cartItems.find((item: any) => item.id === parentId);
                if (parentItem) {
                    dispatch(increaseQuantity(parentId));
                }
            }}>
                <PlusIcon />
            </TouchableOpacity>
        </View>
    )

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Cart</Text>
            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.cartItem}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text>{item.name}</Text>
                        <Text>{item.price}</Text>
                        <View style={styles.quantityContainer}>
                            <TouchableOpacity onPress={() => dispatch(decreaseQuantity(item.id))}>
                                <Text style={styles.quantityButton}><MinusIcon /></Text>
                            </TouchableOpacity>
                            <Text>{item.quantity}</Text>
                            <TouchableOpacity onPress={() => dispatch(increaseQuantity(item.id))}>
                                <PlusIcon />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => dispatch(removeFromCart(item.id))}>
                            <Text>Remove</Text>
                        </TouchableOpacity>
                        {item.varientData && (
                            <FlatList
                                data={item.varientData}
                                keyExtractor={(variant) => variant.id.toString()}
                                renderItem={({ item: variant }) => renderVariant(variant, item.id)}
                                horizontal
                            />
                        )}
                    </View>
                )
                }
            />
        </View >
    )
}

export default CardScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16
    },
    cartItem: {
        marginBottom: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8
    },
    image: {
        height: 100,
        width: 100
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8
    },
    quantityButton: {
        fontSize: 20,
        paddingHorizontal: 10
    },
    varientContainer: {
        marginRight: 16,
        alignItems: 'center'
    },
    varientImage: {
        height: 50,
        width: 50
    }
})