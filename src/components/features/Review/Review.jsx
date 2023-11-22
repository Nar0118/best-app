import React from "react";
import { Box, Heading, Image, Text, View } from "native-base";
import StarRating from "react-native-star-rating";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../../Colors";

const options = {
  month: "short",
  day: "numeric",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};

const Review = ({ rating }) => {
  const formattedDate = new Date(rating?.createdAt).toLocaleString(
    "en-US",
    options
  );

  return (
    <Box>
      <Box p={3} bg={Colors.lightBlue} mt={5} rounded={5}>
        {rating?.user?.avatar ? (
          <Image
            source={{
              uri: rating?.user?.avatar,
            }}
            alt={rating?.user?.avatar}
            w={24}
            h={24}
          />
        ) : (
          <AntDesign name='user' size={24} color={Colors.black} />
        )}
        <Heading fontSize={15}>
          {`${rating?.user?.first_name} ${rating?.user?.last_name}`}
        </Heading>
        <View width={50} mt={2}>
          <StarRating
            disabled
            maxStars={5}
            rating={rating?.rate}
            starSize={12}
            fullStarColor='gold'
            emptyStarColor='gray'
          />
        </View>
        <Text my={2} fontSize={11}>
          {formattedDate}
        </Text>
        <Box width='100%' bg={Colors.white} p={5}>
          {rating?.comment}
        </Box>
      </Box>
    </Box>
  );
};

export default Review;
