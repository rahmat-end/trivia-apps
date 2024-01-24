import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../themes/Metrixs";
import LottieView from "lottie-react-native";
type Props = {
  isWinner: boolean;
  navigation: any;
};
const PopUpResult = ({ isWinner, navigation }: Props) => {
  return (
    <View style={styles.containerpopUp}>
      {isWinner ? (
        <>
          <Text style={styles.textpopUp}>Game Finished</Text>
          <Text style={styles.caption}>Yeay!! You are the winner</Text>
          <LottieView
            autoPlay
            style={styles.lottie}
            source={require("../../../assets/Animatiom/unlockDiamond.json")}
          />
          <TouchableOpacity 
          onPress={() => navigation.navigate("Result Match")}
          style={styles.buttonpopUp}>
            <Text style={styles.textbutton}>Unlock your free diamond</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.textpopUp}>Game Finished</Text>
          <Text style={styles.textpopUp}>Unfortunately You Are Lose</Text>
          <LottieView
            autoPlay
            style={styles.lottie2}
            source={require("../../../assets/Animatiom/lose.json")}
          />
          <TouchableOpacity 
          onPress={() => navigation.navigate("Result Match",{isWinner})}
          style={styles.buttonpopUp}>
            <Text style={styles.textbutton}>Show Result</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default PopUpResult;

const styles = StyleSheet.create({
  containerpopUp: {
    width: horizontalScale(300),
    height: verticalScale(250),
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(15),
  },
  textpopUp: {
    fontWeight: "bold",
    fontSize: moderateScale(17),
    textAlign: "center",
    marginTop: verticalScale(10),
  },
  caption: {
    fontWeight: "bold",
    fontSize: moderateScale(20),
    textAlign: "center",
    textTransform: "capitalize",
  },
  lottie: {
    width: horizontalScale(200),
    height: verticalScale(100),
  },
  lottie2: {
    width: horizontalScale(130),
    height: verticalScale(90),
    marginVertical: verticalScale(10),

  },
  buttonpopUp: {
    width: horizontalScale(200),
    height: verticalScale(40),
    backgroundColor: "#AFE1AF",
    borderRadius: moderateScale(10),
    justifyContent: "center",
    alignItems: "center",
  },
  textbutton: {
    fontSize: moderateScale(15),
    fontWeight: "bold",
    color: "white",
    textTransform: "capitalize",
  },
});
