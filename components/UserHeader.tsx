import { View, Text, TouchableOpacity, Image, Alert } from 'react-native'
import React from 'react'
import { getAuth, signOut } from 'firebase/auth'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const UserHeader = () => {
    const auth = getAuth()
    const user = auth.currentUser
    const router = useRouter()

    const displayName = user?.displayName || user?.email?.split('@')[0] || 'User'

    const avatarUrl = user?.photoURL || "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=" + displayName;

    const handleLogout = async () => {
    try {
      await signOut(auth);
      router.replace("/(auth)/login"); // Adjust to your login route
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };

    return (
        <View className='flex-row justify-between items-center px-6 pt-12 pb-4 bg-white border-b border-gray-100'>
            <View>
                <Text className='text-gray-400 text-xs font-medium uppercase tracking-wider'>
                    Welcome Back
                </Text>
                <Text className='text-xl font-bold text-gray-800 mt-1'>
                    {displayName}
                </Text>
            </View>
            <View className='flex-row items-center gap-4'>
                <TouchableOpacity
                    onPress={handleLogout}
                    className='bg-gray-50 p-2 rounded-full border border-gray-100'
                >
                    <Ionicons name="log-out-outline" size={20} color="#EF4444" />
                    
                </TouchableOpacity>
                <Image 
                    source={{ uri: avatarUrl }} 
                    className="w-10 h-10 rounded-full border-2 border-blue-100"
                />
            </View>

        </View>
    )
}

export default UserHeader