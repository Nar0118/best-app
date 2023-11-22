import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import AddCartBtn from "../../components/shared/button/AddCartBtn";
import { Flex, Pressable, ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { fetchDevices } from "../../http/deviceApi";

const Home = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchDevices({ current: page });

        setData(response);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [page]);

  const renderItem = ({ item }) => (
    <View style={styles.container} key={item?.id}>
      <Text style={styles.name}>{item.name}</Text>
      <Pressable onPress={() => navigation.navigate("Product", item)}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: item.img,
          }}
        />
      </Pressable>
      <Text style={styles.price}>Price: {item.price} AMD</Text>
      <AddCartBtn id={item?.id} />
    </View>
  );

  const handleEndReached = () => {
    setPage(page + 1);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer} flex={1}>
      <Flex
        flexWrap='wrap'
        direction='row'
        justifyContent='space-between'
        px={6}
      >
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.1}
          style={{
            display: "flex",
            direction: "row",
          }}
        />
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
