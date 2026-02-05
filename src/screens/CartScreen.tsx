import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/CartSlice'

const CartScreen = () => {
    const dispatch = useDispatch()
    const { cartItems } = useSelector((state: any) => state.cart)

    const calculateTotal = () => {
        return cartItems.reduce((total: number, item: any) => {
            return total + (parseFloat(item.price) * item.quantity)
        }, 0).toFixed(2)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Shopping Cart</Text>
            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.cartItem}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <View style={styles.itemDetails}>
                            <Text style={styles.name}>
                                {item.isVariant ? `${item.name} (Variant)` : item.name}
                            </Text>
                            <Text style={styles.price}>${item.price}</Text>
                            <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
                            {item.isVariant && (
                                <Text style={styles.variantInfo}>Parent: {item.parentId}</Text>
                            )}
                            <Text style={styles.subtotal}>
                                Subtotal: ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                            </Text>
                        </View>
                        <TouchableOpacity 
                            style={styles.removeButton} 
                            onPress={() => dispatch(removeFromCart(item.id))}
                        >
                            <Text style={styles.removeText}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                )}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>Your cart is empty</Text>
                }
            />
            {cartItems.length > 0 && (
                <View style={styles.totalContainer}>
                    <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
                </View>
            )}
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5'
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },
    cartItem: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: 15
    },
    itemDetails: {
        flex: 1,
        justifyContent: 'center'
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5
    },
    price: {
        fontSize: 14,
        color: '#666',
        marginBottom: 3
    },
    quantity: {
        fontSize: 14,
        color: '#666',
        marginBottom: 3
    },
    variantInfo: {
        fontSize: 12,
        color: '#999',
        fontStyle: 'italic',
        marginBottom: 3
    },
    subtotal: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333'
    },
    removeButton: {
        backgroundColor: '#ff4444',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 5,
        justifyContent: 'center'
    },
    removeText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold'
    },
    emptyText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#666',
        marginTop: 50
    },
    totalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        marginTop: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2
    },
    totalText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'right',
        color: '#333'
    }
})