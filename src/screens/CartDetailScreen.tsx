import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, increaseQuantity, decreaseQuantity, addToCart } from '../redux/CartSlice'
import { PlusIcon, MinusIcon } from '../components/Icons'
import { useNavigation, useRoute } from '@react-navigation/native'

const CartDetailScreen = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation<any>()
    const route = useRoute()
    const { product } = route.params as { product: any }
    const { cartItems } = useSelector((state: any) => state.cart)

    const renderVariant = (variant: any, parentId: number) => (
        <View style={styles.varientContainer}>
            <Image source={{ uri: variant.image }} style={styles.varientImage} />
            <Text>{variant.name}</Text>
            <Text>{variant.price}</Text>
            <TouchableOpacity onPress={() => {
                dispatch(addToCart({
                    ...variant,
                    parentId: parentId,
                    id: `${parentId}_${variant.id}`,
                    isVariant: true
                }));
            }}>
                <PlusIcon />
            </TouchableOpacity>
        </View>
    )

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
            <View>
                <Text style={styles.heading}>Product Details</Text>
                <View style={styles.cartItem}>
                    <Image source={{ uri: product.image }} style={styles.image} />
                    <Text>{product.name}</Text>
                    <Text>{product.price}</Text>
                    <View style={styles.buttonContainer}>
                        <View style={styles.quantityContainer}>
                            <TouchableOpacity onPress={() => dispatch(decreaseQuantity(product.id))}>
                                <Text style={styles.quantityButton}><MinusIcon /></Text>
                            </TouchableOpacity>
                            <Text>{cartItems.find((item: any) => item.id === product.id)?.quantity || 0}</Text>
                            <TouchableOpacity onPress={() => dispatch(increaseQuantity(product.id))}>
                                <PlusIcon />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.button} onPress={() => dispatch(removeFromCart(product.id))}>
                            <Text style={styles.removeText}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.varientText}>More Similar Variant</Text>
                        {product.varientData && (
                            <FlatList
                                data={product.varientData}
                                keyExtractor={(variant) => variant.id.toString()}
                                renderItem={({ item: variant }) => renderVariant(variant, product.id)}
                                horizontal
                            />
                        )}
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tab', { screen: 'Cart' })}>
                        <Text>Checkout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default CartDetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
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
        borderRadius: 8
    },
    image: {
        height: 400,
        width: 400
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
        justifyContent: 'space-between'
    },
    quantityButton: {
        fontSize: 20,
        paddingHorizontal: 10
    },
    varientContainer: {
        marginRight: 16,
        alignItems: 'center',
        borderWidth: 1,
    },
    varientText: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginVertical: 8
    },
    varientImage: {
        height: 50,
        width: 50
    },
    button: {
        backgroundColor: 'purple',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    removeText:{
        color:'white'
    }
})