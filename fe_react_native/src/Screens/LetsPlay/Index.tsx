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
import useQuestion from "../../hooks/useQuestion";
import useUser from "../../hooks/useUser";
// import { socket } from "../../Components/libs/socket";
import { useAppSelector } from "../../Redux/hooks";
import { RootState } from "../../Redux/store";
import { useQuery } from "react-query";
import { apinodejs } from "../../Components/libs/api";

const LetsPlay = () => {
  const { dataQuestion } = useQuestion();
  const [countDown, setCountDown] = useState(9);
  const [clientAnswer, setClientAnswer] = useState(-1);
  const [rightAnswer, setRightAnswer] = useState(-1);
  const [background, setBackground] = useState("#89CFF0");
  const [bgClientAnswer, setBgClientAnswer] = useState("#008080");
  const [score, setScore] = useState(0);
  const { userlogin } = useUser();
  const [playerAnswersVisible, setPlayerAnswersVisible] = useState(false);
  const {idRoom} = useAppSelector((state: RootState) => state.idRoom);

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
    const answer = {
      email: userlogin?.email,
      name: userlogin?.name,
      avatar: userlogin?.avatar,
      answer: index,
    };
    // socket.emit(`answer`, answer);
    // console.log(answer);
  };

const {data:getDataAnswer}= useQuery("getAnswer", async ()=>{
  try {
    const response = await apinodejs.get(`/getAnswerArray/${idRoom}`);
    console.log("ini response",response.data.answer)
   return response.data.answer
  } catch (error) {
    console.log(error)
  }
})

  useEffect(() => {
    console.log("ini useEffect",getDataAnswer)
  });

  let answerQuestion1: any = [
    {
      answer: 2,
      avatar:
        "https://lh3.googleusercontent.com/a/ACg8ocJNztzbwBveNRkrJtGPH78f_ZZ9NcChY7SAB9Eldzno=s96-c",
      email: "kikijak487@gmail.com",
      name: "Tu Yul",
    },
    {
      answer: 2,
      avatar:
        "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671124.jpg?size=626&ext=jpg&ga=GA1.2.714462566.1697981532&semt=ais",
      email: "dian@gmail.com",
      name: "dian",
    },
    {
      answer: 2,
      avatar:
        "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671124.jpg?size=626&ext=jpg&ga=GA1.2.714462566.1697981532&semt=ais",
      email: "dian@gmail.com",
      name: "dian",
    },
    {
      answer: 3,
      avatar:
        "https://lh3.googleusercontent.com/a/ACg8ocJNztzbwBveNRkrJtGPH78f_ZZ9NcChY7SAB9Eldzno=s96-c",
      email: "kikijak487@gmail.com",
      name: "Tu Yul",
    },
  ];


  const [currentPage, setCurrentPage] = useState(1);
  const ITEM_PERPAGE: number = 1;
  const questionToShow = dataQuestion?.slice(
    currentPage - 1,
    currentPage - 1 + ITEM_PERPAGE
  );

  useEffect(() => {
    if (countDown === 0) {
      const data = questionToShow?.map((item: any) => {
        item.answers.filter((key: any, index: number) => {
          if (key.isTrue === true) {
            setRightAnswer(index);
          }
        });
      });
      setPlayerAnswersVisible(true);
    }
  }, [countDown]);

  useEffect(() => {
    if (currentPage < Math.ceil(dataQuestion?.length / ITEM_PERPAGE)) {
      const interval = setInterval(() => {
        setCurrentPage(currentPage + 1);
        setBackground("#89CFF0");
        setBgClientAnswer("#008080");
        setCountDown(9);
        setClientAnswer(-1);
        setRightAnswer(-1);
        setPlayerAnswersVisible(false);
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [countDown, currentPage]);

  useEffect(() => {
    if (clientAnswer === rightAnswer) {
      if (rightAnswer >= 0) {
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
                  uri: item.profile,
                }}
              />

              <Text style={styles.text}>{item.the_question}</Text>
              {item.answers?.map((item: any, index: number) => {
                const active = clientAnswer === index;
                const right = rightAnswer === index;

                return (
                  <TouchableOpacity
                    key={index}
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
                    {playerAnswersVisible &&
                      getDataAnswer?.map((item: any, key: number) => {
                        const sameAnswer = getDataAnswer?.filter(
                          (item: any) => {
                            return item.answer === index;
                          }
                        );

                        if (item.answer === index) {
                          return (
                            <View style={styles.containerAvatar} key={key}>
                              {sameAnswer.length === 1 && (
                                <Image
                                  style={[
                                    styles.avatar,
                                    {
                                      top: verticalScale(-20),
                                      left: horizontalScale(10),
                                    },
                                  ]}
                                  source={{
                                    uri: item.avatar,
                                  }}
                                />
                              )}
                              {sameAnswer.length > 1 && 
                              sameAnswer.map((item:any, keySome:number)=>{
                                return (
                                  <View key={keySome}>
                                    <Image
                                    style={[
                                      styles.avatar,
                                      {
                                        top: verticalScale(-20),
                                        left:
                                          keySome === 0
                                            ? horizontalScale(10)
                                            : keySome === 1
                                            ? horizontalScale(50)
                                            : keySome === 2
                                            ? horizontalScale(90)
                                            : horizontalScale(130),
                                      },
                                    ]}
                                    source={{
                                      uri: item.avatar,
                                    }}
                                  />

                                  </View>


                                )
                              })
    }
                            </View>
                          );
                        }
                      })}

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
    position: "relative",
    borderRadius: moderateScale(15),
  },
  avatar: {
    height: verticalScale(30),
    width: horizontalScale(30),
    borderRadius: moderateScale(100),
    position: "absolute",
  },
  containerAvatar:{
   position:"absolute",
   left:horizontalScale(0),
   bottom:verticalScale(0),
  }
});
