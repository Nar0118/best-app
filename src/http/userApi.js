import { $authHost, $host } from ".";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const registration = async (values) => {
  const { data } = await $host.post("api/user/register", {
    ...values,
    role: "ADMIN",
  });
  localStorage.setItem("token", data);
  return jwtDecode(data);
};

export const login = async (values) => {
  const { data } = await $host.post("api/user/login", values);
  await AsyncStorage.setItem("token", data.token);

  return true;
};

export const update = async (values) => {
  const { data } = await $authHost.put(`api/user`, values);

  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export const check = async () => {
  const { data } = await $authHost.get("api/user/auth");

  return data;
};

// export const contact = async (values: any) => {
//   const { data } = await $host.post("/contact", values);

//   return data;
// };
