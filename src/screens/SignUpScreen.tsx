import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../redux/AuthSlice'
import { useNavigation } from '@react-navigation/native'
import { GoogleIcon } from '../components/Icons'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth'

const SignUpScreen = () => {
    const navigation = useNavigation<any>()
    const dispatch = useDispatch()
    const { control, handleSubmit, formState: { errors } = {} } = useForm()
    const [loading, setLoading] = useState(false)

    const onSubmit = async (data: any) => {
        await AsyncStorage.setItem('user', JSON.stringify(data))
        await AsyncStorage.setItem('isLogin', 'true')
        dispatch(loginSuccess(data))
        Alert.alert('Account created successfully')
    }

    const handleGoogleSignIn = async () => {
        if (loading) return
        try {
            setLoading(true)

            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
            const { idToken } = await GoogleSignin.signIn()

            const googleCredential =
                auth.GoogleAuthProvider.credential(idToken)

            const res = await auth().signInWithCredential(googleCredential)

            const userData = {
                uid: res.user.uid,
                name: res.user.displayName,
                email: res.user.email,
                photo: res.user.photoURL,
                provider: 'google',
            }

            await AsyncStorage.setItem('user', JSON.stringify(userData))
            await AsyncStorage.setItem('isLogin', 'true')
            dispatch(loginSuccess(userData))

            Alert.alert('Success', 'Google Sign-In successful')
        } catch (e) {
            Alert.alert('Error', 'Google Sign-In failed')
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create New Account</Text>

            <Controller
                control={control}
                name="name"
                rules={{ required: 'Name is required' }}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        value={value}
                        onChangeText={onChange}
                        placeholder="Name"
                        style={styles.input}
                    />
                )}
            />
            {errors?.name && <Text style={styles.error}>{String(errors.name.message)}</Text>}

            <Controller
                control={control}
                name="email"
                rules={{ required: 'Email is required' }}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        value={value}
                        onChangeText={onChange}
                        placeholder="Email"
                        style={styles.input}
                    />
                )}
            />
            {errors?.email && <Text style={styles.error}>{String(errors.email.message)}</Text>}

            <Controller
                control={control}
                name="password"
                rules={{ required: 'Password is required' }}
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        value={value}
                        onChangeText={onChange}
                        placeholder="Password"
                        secureTextEntry
                        style={styles.input}
                    />
                )}
            />
            {errors?.password && <Text style={styles.error}>{String(errors.password.message)}</Text>}

            <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.button}>
                <Text style={{ color: 'white' }}>Sign Up</Text>
            </TouchableOpacity>

            <Text>
                Already have an account?{' '}
                <Text style={styles.link} onPress={() => navigation.navigate('LogIn')}>
                    Sign In
                </Text>
            </Text>

            <TouchableOpacity style={{ marginTop: 20 }} onPress={handleGoogleSignIn}>
                <GoogleIcon />
            </TouchableOpacity>
        </View>
    )
}

export default SignUpScreen

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
        paddingHorizontal: 20,
    },
})
