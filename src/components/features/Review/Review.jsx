import React from "react";
import { Box, Heading, Text, View } from "native-base";
import StarRating from "react-native-star-rating";
import Colors from "../../../Colors";

const Review = ({ rating }) => {
  return (
    <Box my={9}>
      <Box p={3} bg={Colors.lightBlue} mt={5} rounded={5}>
        <Text>{JSON.stringify(Object.keys(rating))}</Text>
        <Heading fontSize={15}>{rating?.user?.first_name}</Heading>
        <View width={50} mt={2}>
          <StarRating
            disabled
            maxStars={5}
            rating={4}
            starSize={12}
            fullStarColor={"gold"}
            emptyStarColor={"gray"}
          />
        </View>
        <Text my={2} fontSize={11}>
          Jan 12 2022
        </Text>
        <Box width='100%' bg={Colors.white} p={5}>
          You can manage your own block lists via the Stream dashboard or APIs
          to a manage blocklists and configure your channel types to use them.
          Channel types can be configured tAMDo block or flag messages from your
          users based on your blocklists. To do this you need to configure your
          channel type(s) with these two configurations: blocklist and
          blocklist_behavior. The first one refers to the name of the block list
          and the second must be set as block or flag.
        </Box>
      </Box>
    </Box>
  );
};

export default Review;
