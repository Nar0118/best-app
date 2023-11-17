import React from "react";
import { Box, Button, Center, HStack, ScrollView, Text } from "native-base";
import Colors from "../../../Colors";
import { Pressable } from "react-native";

const Orders = () => {
  // here should be user's image url(base:64)
  const image = "";

  return (
    <Box h='full' bg={Colors.white} pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* paid orders */}
        <Pressable>
          <HStack
            space={4}
            justifyContent='space-between'
            alignItems='center'
            py={5}
            px={2}
            bg={Colors.lightBlue}
          >
            <Text fontSize={9} color='blue' isTruncated>
              112321231231
            </Text>
            <Text fontSize={12} bold color={Colors.black} isTruncated>
              Paid
            </Text>
            <Text fontSize={11} italic color={Colors.black} isTruncated>
              Dec 12 2022
            </Text>
            <Button
              // px={7}
              // py={1.5}
              rounded={50}
              bg={Colors.main}
              _text={{
                color: Colors.white,
              }}
              _pressed={{
                bg: Colors.main,
              }}
            >
              23432 AMD
            </Button>
          </HStack>
        </Pressable>

        {/* not paid */}
        <Pressable>
          <HStack
            space={4}
            justifyContent='space-between'
            alignItems='center'
            py={5}
            px={2}
          >
            <Text fontSize={9} color='blue' isTruncated>
              11232123
            </Text>
            <Text fontSize={12} bold color={Colors.black} isTruncated>
              Not Paid
            </Text>
            <Text fontSize={11} italic color={Colors.black} isTruncated>
              Nov 12 2023
            </Text>
            <Button
              // px={7}
              // py={1.5}
              rounded={50}
              bg={Colors.red}
              _text={{
                color: Colors.white,
              }}
              _pressed={{
                bg: Colors.red,
              }}
            >
              23432 AMD
            </Button>
          </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  );
};

export default Orders;
