import React from "react";
import { View, Text } from "react-native";
import Contact from "../contact/Contact";

const About = ({ navigation }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
        height: "auto",
        overflow: "auto",
      }}
    >
      <Text
        style={{
          height: "auto",
          overflow: "auto",
        }}
      >
        Welcome to the 'Best Systems' company! We are a team of professionals in
        the field of security systems and electrical installation. Our
        experience and expertise in this field allow us to provide high-quality
        services and solutions for our customers. Our values: quality and
        reliability. We strive to ensure maximum safety and comfort for our
        customers by offering proven and reliable solutions. Professionalism:
        our team consists of highly qualified specialists who are constantly
        improving their skills and knowledge. Individual approach: we understand
        that each client is unique, and we develop solutions that perfectly meet
        their needs. We provide a wide range of solutions to ensure the security
        of your facilities, including video surveillance, access control and
        burglar alarm. Electrical installation: we carry out professional
        electrical installation, installing modern equipment and ensuring the
        efficient operation of electrical systems. We are proud of our work and
        strive for long-term relationships with our customers. If you need
        reliable and professional services in the field of security systems and
        electrical installation, please contact us. We are always ready to help!
        Contact us today to discuss your needs and find the optimal solution.
      </Text>
      <Contact isHide={true} />
    </View>
  );
};

export default About;
