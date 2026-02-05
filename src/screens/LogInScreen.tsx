import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../redux/AuthSlice'
import { useNavigation } from '@react-navigation/native'

const LogInScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const { control, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = async (data: any) => {
        const stored = await AsyncStorage.getItem("user")
        console.log(stored)
        const storedData = JSON.parse(stored || "{}")
        if (storedData.email !== data?.email || storedData.password !== data?.password) {
            Alert.alert("Invalid email or password")
            return
        }
        Alert.alert("Login successful")
        dispatch(loginSuccess(data))
        await AsyncStorage.setItem("isLogin", "true")
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create New Account</Text>
            <Controller
                control={control}
                name='email'
                rules={{
                    required: "Email is required",
                    pattern: {
                        message: "Email must be valid",
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                    }
                }}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        value={value}
                        onChangeText={onChange}
                        placeholder="Email"
                        style={styles.input}
                    />
                )}
            />
            {errors.email && <Text style={styles.error}>{errors.email.message as string}</Text>}
            <Controller
                control={control}
                name='password'
                rules={{
                    required: "Password is required",
                    pattern: {
                        message: "Password must be at least 3 characters",
                        value: /^([a-zA-Z0-9@#$%^&+=]{6,})$/
                    }
                }}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        value={value}
                        onChangeText={onChange}
                        placeholder="Password"
                        style={styles.input}
                    />
                )}
            />
            {errors.password && <Text style={styles.error}>{errors.password.message as string}</Text>}
            <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.button}>
                <Text style={{ color: 'white' }}> Log In</Text>
            </TouchableOpacity>
            <View>
                <Text>Don't have an account? <Text style={styles.link} onPress={() => navigation.navigate('SignUp' as never)}>Sign Up</Text></Text>
            </View>
        </View>
    )
}

export default LogInScreen

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    error: {
        color: 'red',
    },
    link: {
        color: 'blue',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginVertical: 10,
        width: '80%',
    },
    button: {
        backgroundColor: 'purple',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20
    }
})
