import React, { useCallback, useEffect, useState } from "react";
import { TextInput } from "react-native";
import {
  Box,
  HStack,
  Heading,
  Image,
  ScrollView,
  Spacer,
  Text,
  TextArea,
} from "native-base";
import { AirbnbRating } from "react-native-ratings";
import { fetchOneDevice } from "../../http/deviceApi";
import StarRating from "react-native-star-rating";
import NumericInput from "react-native-numeric-input";
import CustomButton from "../../components/shared/button/Button";
import Review from "../../components/features/Review/Review";
import Message from "../../components/shared/message/Message";
import Colors from "../../Colors";

const Product = () => {
  const [product, setProduct] = useState(null);
  const [rating, setRating] = useState(0);
  const [value, setValue] = useState(0);
  const [comment, setComment] = useState("");

  const getProduct = useCallback(async () => {
    try {
      const data = await fetchOneDevice(1);
      setProduct(data);

      if (data?.ratings?.length > 0) {
        const sum = (data.ratings || []).reduce(
          (acc, rating) => acc + (rating?.rate || 0),
          0
        );

        setRating(Math.round(sum / data.ratings.length));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    getProduct();
  }, []);

  const ratingCompleted = (rating) => {};

  return (
    <Box safeArea flex={1} bg={Colors.white} p={5}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={{
            uri: product?.img,
          }}
          alt='image'
          w='full'
          h={300}
          resizeMode='contain'
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          {product?.name}
        </Heading>
        <StarRating disabled maxStars={5} rating={rating} />
        <HStack space={2} alignItems='center' my={5}>
          <NumericInput
            value={value}
            totalWidth={140}
            totalHeight={30}
            iconSize={25}
            step={1}
            maxValue={15}
            minValue={0}
            borderColor={Colors.main}
            rounded
            textColor={Colors.black}
            iconStyle={{
              color: Colors.white,
            }}
            rightButtonBackgroundColor={Colors.main}
            leftButtonBackgroundColor={Colors.main}
            onChange={setValue}
          />
          <Spacer />
          <Heading bold color={Colors.black} fontSize={18}>
            {product?.price} AMD
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12}>
          {product?.description}
        </Text>
        <Heading bold fontSize={15} mt={10}>
          Add review
        </Heading>
        <Box flex={1} justifyContent='start' width={130} mb={1}>
          <AirbnbRating
            count={5}
            // reviews={[
            //   "Bad",
            //   "OK",
            //   "Good",
            //   "Very Good",
            //   "Amazing",
            //   "Unbelievable",
            // ]}
            defaultRating={5}
            size={20}
            fontSize={5}
          />
        </Box>
        <TextArea
          h={24}
          w='full'
          placeholder='Write a comment...'
          borderWidth={0}
          py={4}
          bg={Colors.lightBlue}
          mb={7}
          _focus={{
            bg: Colors.lightBlue,
          }}
        />
        <CustomButton
          bg={Colors.white}
          color={Colors.main}
          style={{ borderColor: Colors.main, borderWidth: 1 }}
        >
          Add comment
        </CustomButton>
        {/* If user isn't login */}
        <Message
          color={Colors.white}
          bg={Colors.black}
          bold
          children='Please login to write a review'
          style={{
            marginBottom: 20,
            marginTop: 20,
          }}
        />
        {/*  */}
        <Heading bold fontSize={15} mb={2} mt={3}>
          REVIEW
        </Heading>
        {/* If there is no review */}
        <Message
          color={Colors.main}
          bg={Colors.lightBlue}
          bold
          children='No Review'
        />
        {/* else */}
        <Review />
      </ScrollView>
      <CustomButton bg={Colors.main} color={Colors.white}>
        Add to cart
      </CustomButton>
    </Box>
  );
};

export default Product;
