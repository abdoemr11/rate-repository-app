import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const jsonString = await AsyncStorage.getItem(`${this.namespace}:token`)
    return jsonString? JSON.parse(jsonString): "";
}

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(`${this.namespace}:token`, JSON.stringify(accessToken))
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:token`)
  }
}

export default AuthStorage;
