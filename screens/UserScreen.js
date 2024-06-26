import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, StyleSheet } from "react-native";

function UserScreen() {
  const navigation = useNavigation();

  const handleOpenDrawer = () => {
    navigation.navigate("Welcome");
    navigation.toggleDrawer();
  };

  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"User"</Text> screen!
      </Text>
      <Button title="Go to welcome" onPress={handleOpenDrawer} />
    </View>
  );
}

export default UserScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  highlight: {
    fontWeight: "bold",
    color: "#eb1064",
  },
});
