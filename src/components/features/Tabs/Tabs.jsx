import { useState } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import Profile from "../../../pages/profile/Profile";
import Orders from "../Orders/Orders";
import { Text } from "native-base";
import Colors from "../../../Colors";

const renderScene = SceneMap({
  first: Profile,
  second: Orders,
});

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: Colors.black,
  },
  text: {
    fontSize: 13,
    fontWeight: "bold",
  },
});

function Tabs() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "first",
      title: "Profile",
    },
    {
      key: "second",
      title: "Orders",
    },
  ]);

  const renderTabsBar = (props) => {
    return (
      <TabBar
        {...props}
        tabStyle={styles.tabStyle}
        indicatorContainerStyle={{
          backgroundColor: Colors.black,
        }}
        activeColor={Colors.main}
        inactiveColor={Colors.white}
        renderLabel={({ route, color }) => (
          <Text style={{ color, ...styles.text }}>{route.title}</Text>
        )}
      />
    );
  };

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabsBar}
    />
  );
}

export default Tabs;
