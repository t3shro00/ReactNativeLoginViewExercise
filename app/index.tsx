import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the login and SignUp View</Text>
      <Link href="/LoginView" style={styles.link}>Go to Login</Link>
      <Link href="/SignupView" style={styles.link}>Go to Signup</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  link: {
    fontSize: 18,
    color: 'blue',
    marginVertical: 10,
  },
})

export default index