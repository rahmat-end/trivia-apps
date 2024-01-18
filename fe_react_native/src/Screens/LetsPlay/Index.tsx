import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../themes/Metrixs";
// import { question } from "../../services/avatar";
import useQuestion from "../../hooks/useQuestion";

const LetsPlay = () => {
  const { dataQuestion } = useQuestion();
  const [countDown, setCountDown] = useState(9);
  const [clientAnswer, setClientAnswer] = useState(-1);
  const [rightAnswer, setRightAnswer] = useState(-1);
  const [background, setBackground] = useState("#89CFF0");
  const [bgClientAnswer, setBgClientAnswer] = useState("#008080");
  const [score, setScore] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      if (countDown > 0) {
        setCountDown(countDown - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [countDown]);

  

  const handleAnswer = (index: number) => {
    setClientAnswer(index);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const ITEM_PERPAGE: number = 1;
  const questionToShow = dataQuestion?.slice(
    currentPage - 1,
    currentPage - 1 + ITEM_PERPAGE
  );

  useEffect(() => {
    if (countDown === 0) {
      const data = questionToShow?.map((item:any)=>{
        item.answers.filter((key:any, index:number)=>{
          if (key.isTrue === true) {
            setRightAnswer(index);
          }
        })
      })
    }
  }, [countDown]);

  useEffect(() => {
    if (currentPage < Math.ceil(dataQuestion?.length / ITEM_PERPAGE)) {
      const interval = setInterval(() => {
        setCurrentPage(currentPage + 1);
        setBackground("#89CFF0");
        setBgClientAnswer("#008080")
        setCountDown(9);
        setClientAnswer(-1);
        setRightAnswer(-1);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [countDown, currentPage]);

  useEffect(() => {
    if (clientAnswer === rightAnswer) {
      if (rightAnswer >= 0) {
        // Alert.alert("Correct Answer");
        setScore(score + 1);
        setBgClientAnswer("#00A36C");
      }
    } else {
      // Alert.alert("Wrong Answer");
      setBgClientAnswer("red");
    }
  }, [rightAnswer]);

  return (
    <ImageBackground
      source={require("../../../assets/BackgroundImage/playgame.png")}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <StatusBar style="light" />
        {questionToShow?.map((item: any, index: number) => {
          return (
            <View style={styles.container} key={index}>
              <Text style={styles.timer}>00:0{countDown}</Text>
              <Image
                style={styles.imageQuestion}
                source={{
                  uri: item.profile
                }}
              />

              <Text style={styles.text}>{item.the_question}</Text>
              {item.answers?.map((item: any, index: number) => {
                const active = clientAnswer === index;
                const right = rightAnswer === index;

                return (
                  <TouchableOpacity
                    onPress={() => handleAnswer(index)}
                    style={[
                      styles.button,
                      {
                        backgroundColor: active
                          ? bgClientAnswer
                          : right
                          ? "#00A36C"
                          : background,
                      },
                    ]}
                  >
                    <Text style={styles.textAnswer}>{item.answer}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          );
        })}

        {/* <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: background,
              },
            ]}
          >
            <Text style={styles.textAnswer}>Vekasana</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: background,
              },
            ]}
          >
            <Text style={styles.textAnswer}>Kari</Text>
          </TouchableOpacity> */}

        <View style={styles.footer}>
          <View style={styles.footerTextContainer}>
            <Text style={styles.footerText}>
              {currentPage}/{dataQuestion?.length}
            </Text>
            <Text style={styles.footerText}>Questions</Text>
          </View>
          <View style={styles.footerTextContainer}>
            <Text style={styles.footerText}>{score}</Text>
            <Text style={styles.footerText}>Correct</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LetsPlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: moderateScale(20),
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  imageQuestion: {
    width: horizontalScale(300),
    height: verticalScale(200),
    resizeMode: "cover",
    borderRadius: moderateScale(15),
  },
  text: {
    color: "#fff",
    fontSize: moderateScale(20),
    textTransform: "capitalize",
    fontWeight: "bold",
    marginTop: verticalScale(20),
    marginBottom: verticalScale(50),
    textAlign: "center",
  },
  timer: {
    color: "#fff",
    fontSize: moderateScale(25),
    textTransform: "capitalize",
    fontWeight: "bold",
    marginTop: moderateScale(20),
    marginBottom: moderateScale(20),
  },

  textAnswer: {
    color: "#fff",
    fontSize: moderateScale(18),
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    position: "absolute",
    bottom: verticalScale(20),
    left: horizontalScale(20),
    right: horizontalScale(20),
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerText: {
    color: "#fff",
    fontSize: moderateScale(15),
    textTransform: "capitalize",
  },
  footerTextContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: moderateScale(10),
    marginBottom: verticalScale(15),
    width: horizontalScale(300),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(15),
  },
});
