import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import AddCartBtn from "../../components/shared/button/AddCartBtn";
import { Flex, ScrollView } from "native-base";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://best-systems.onrender.com/api/device?page=1&limit=10&search=&typeId=undefined&brandId=undefined"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer} flex={1}>
      <Flex
        flexWrap='wrap'
        direction='row'
        justifyContent='space-between'
        px={6}
      >
        {data?.map((e) => (
          <View style={styles.container} key={e?.id}>
            <Text style={styles.name}>{e.name}</Text>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: e.img,
              }}
            />
            <Text style={styles.price}>Price: {e.price} AMD</Text>
            <AddCartBtn />
          </View>
        ))}
      </Flex>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
    marginTop: 50,
    border: "1px solid #dedddd",
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingLeft: "20px",
    paddingRight: "20px",
    borderRadius: "8px",
  },
  tinyLogo: {
    width: 120,
    height: 120,
  },
  name: {
    marginBottom: 20,
  },
  price: {
    marginBottom: 20,
    marginTop: 10,
  },
  // scrollViewContainer: {
  //   flex: 1,
  //   justifyContent: "start",
  //   alignItems: "center",
  //   backgroundColor: "#fff",
  // },
  // childItem: {
  //   margin: 10,
  //   padding: 20,
  //   backgroundColor: "lightgray",
  // },
});

export default Home;
