import { $authHost, $host } from ".";

// export const createType = async (type) => {
//   const { data } = await $authHost.post("api/type", type);
//   return data;
// };

// export const fetchTypes = async () => {
//   const { data } = await $host.get("api/type");
//   return data;
// };

// export const createBrand = async (brand) => {
//   const { data } = await $authHost.post("api/brand", brand);
//   return data;
// };

// export const fetchBrands = async () => {
//   const { data } = await $host.get("api/brand");
//   return data;
// };

// export const createDevice = async (device) => {
//   const { data } = await $authHost.post("api/device", device);
//   return data;
// };

// export const updateDevice = async (id, device) => {
//   const { data } = await $authHost.put(`api/device/${id}`, device);
//   return data;
// };

export const fetchDevices = async (queries, signal = null) => {
  const { data } = await $host.get(`/api/device?page=${queries?.page}`, {
    signal,
  });

  return data;
};

export const fetchOneDevice = async (id) => {
  const { data } = await $host.get(`api/device/${id}`);
  return data;
};

// export const removeOneDevice = async (id) => {
//   const { data } = await $authHost.delete(`api/device/${id}`);
//   return data;
// };

export const fetchOneBasket = async () => {
  const { data } = await $authHost.get(`api/basket`);
  return data;
};

export const createBasket = async (basket) => {
  const { data } = await $authHost.post("api/basket", basket);
  return data;
};

export const removeFromBasket = async (id) => {
  const { data } = await $authHost.delete(`api/basket/${id}`);
  return data;
};

// export const updateBasket = async (id, basket) => {
//   const { data } = await $authHost.put(`api/basket/${id}`, basket);
//   return data;
// };

// export const createRate = async (rate) => {
//   const { data } = await $authHost.post("api/rate", rate);
//   return data;
// };

// export const createOrder = async (order) => {
//   const { data } = await $authHost.post("api/order", order);
//   return data;
// };

// export const getOrder = async (pagination) => {
//   const { data } = pagination?.current
//     ? await $authHost.get(
//         `/api/order?page=${pagination?.current}&limit=${pagination?.pageSize}`
//       )
//     : await $authHost.get(`/api/order`);
//   return data;
// };

// export const getOneOrder = async (id) => {
//   const { data } = await $authHost.get(`api/order/${id}`);

//   return data;
// };

// export const changeStatusOrder = async (id, status) => {
//   const { data } = await $authHost.patch(`api/order/${id}`, { status });

//   return data;
// };

// export const payment = async (payload) => {
//   const { data } = await $authHost.post(
//     "api/stripe/create-checkout-session",
//     payload
//   );
//   return data;
// };
