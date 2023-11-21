import AsyncStorage from "@react-native-async-storage/async-storage";
import { check } from "../../http/userApi";

export const checkAuth = async () => {
  try {
    const user = await check();
    return user;
  } catch (e) {
    await AsyncStorage.removeItem("token");
    return null;
  }
};
