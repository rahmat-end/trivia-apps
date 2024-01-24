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
import { socket } from "../../Components/libs/socket";
import { useAppSelector, useAppDispatch } from "../../Redux/hooks";
import { RootState } from "../../Redux/store";
import PopUpResult from "../../Components/PopUpResult/Index";
import { SAVE_RESULT_SCORE, SAVE_WINNER_VALUE } from "../../Redux/resultScoreSlice";

const LetsPlay = ({ navigation }: { navigation: any }) => {
  const { dataQuestion } = useQuestion();
  const [countDown, setCountDown] = useState(0);
  const [clientAnswer, setClientAnswer] = useState(-1);
  const [rightAnswer, setRightAnswer] = useState(-1);
  const [background, setBackground] = useState("#89CFF0");
  const [bgClientAnswer, setBgClientAnswer] = useState("#008080");
  const [score, setScore] = useState(0);
  const { userlogin } = useUser();
  const [playerAnswersVisible, setPlayerAnswersVisible] = useState(false);
  const [dataAnswer, setDataAnswer] = useState([]);
  const [limitTimer, setlimitTimer] = useState(0);
  const { idRoom } = useAppSelector((state: RootState) => state.idRoom);
  const [resultGame, setResultGame] = useState([]);
  const [winner, setWinner] = useState(false);
  const [endpopUp, setEndpopUp] = useState(false);
  const dispatch = useAppDispatch();
  

  const handleAnswer = (index: number) => {
    setClientAnswer(index);
    setPlayerAnswersVisible(true);
    const answer = {
      email: userlogin?.email,
      name: userlogin?.name,
      avatar: userlogin?.avatar,
      answer: index,
    };
    socket.emit(`answer${idRoom}`, answer);
  };

  useEffect(() => {
    socket.on(`collectAnswer${idRoom}`, (data: any) => {
      setDataAnswer(data);
    });
    socket.on(`timer${idRoom}`, (data: any) => {
      setCountDown(data);
    });
    socket.on(`limitTimer${idRoom}`, (data: any) => {
      setlimitTimer(data);
    });
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const ITEM_PERPAGE: number = 1;
  const questionToShow = dataQuestion?.slice(
    currentPage - 1,
    currentPage - 1 + ITEM_PERPAGE
  );

  useEffect(() => {
    if (countDown === 1) {
      questionToShow?.map((item: any) => {
        item.answers.filter((key: any, index: number) => {
          if (key.isTrue === true) {
            setRightAnswer(index);
          }
        });
      });
    } else if (countDown === 0) {
      if (currentPage < Math.ceil(dataQuestion?.length / ITEM_PERPAGE)) {
        setCurrentPage(currentPage + 1);
        setBackground("#89CFF0");
        setBgClientAnswer("#008080");
        setClientAnswer(-1);
        setRightAnswer(-1);
        setPlayerAnswersVisible(false);
      }
    }
  }, [countDown]);

  useEffect(() => {
    const user = {
      email: userlogin?.email,
      name: userlogin?.name,
      avatar: userlogin?.avatar,
      userId: userlogin?.user_id,
      score: score,
    };
    if (limitTimer === 4) {
      socket.emit(`finishGame${idRoom}`, user);
      console.log("finish", user);
    } else if (limitTimer === 3) {
      socket.on(`usersScore${idRoom}`, (data: any) => {
        console.log("data finish", data);
        setResultGame(data);
      });
    } 
  
  }, [currentPage, limitTimer]);

  useEffect(() => {
    if (clientAnswer === rightAnswer) {
      if (rightAnswer >= 0) {
        setScore(score + 1);
        setBgClientAnswer("#00A36C");
      }
    } else {
      setBgClientAnswer("red");
    }
  }, [rightAnswer]);

  const  sortedResult = resultGame.sort((a, b) => b.score - a.score);
  const newDataResult = sortedResult.map((item:any, index:number)=>{
    return{
      ...item,
      rank: index+1
    }
  })

  const userLoginStatus = newDataResult.filter((item:any)=>{
    if(item.email === userlogin?.email){
      return item
    }
  })
  useEffect(() => {
    console.log("data result", newDataResult);
    console.log("user login", userLoginStatus);
    dispatch(SAVE_RESULT_SCORE(newDataResult))
    if(userLoginStatus[0]?.rank === 1){
      setEndpopUp(true);
      setWinner(true)
      dispatch(SAVE_WINNER_VALUE(true))
    }else if(userLoginStatus[0]?.rank > 1){
      setEndpopUp(true);
      setWinner(false)
      dispatch(SAVE_WINNER_VALUE(false))
    }
  },[userLoginStatus, newDataResult])

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
              <Text style={styles.timer}>
                00:{`${countDown < 10 ? `0${countDown}` : countDown}`}
              </Text>
              <Image
                style={styles.imageQuestion}
                source={{
                  uri: item.profile,
                }}
              />

              {/* <Text style={styles.text}>{item.the_question}</Text> */}
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
                      dataAnswer?.map((item: any, key: number) => {
                        const sameAnswer = dataAnswer?.filter((item: any) => {
                          return item.answer === index;
                        });

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
                                sameAnswer.map((item: any, keySome: number) => {
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
                                  );
                                })}
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
      {endpopUp && (
        <View style={styles.overlay}>
          <PopUpResult navigation={navigation} isWinner={winner} />
        </View>
      )}
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
    justifyContent: "center",
    alignItems: "center",
  },
  imageQuestion: {
    width: horizontalScale(300),
    height: verticalScale(200),
    marginBottom: verticalScale(30),
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
  containerAvatar: {
    position: "absolute",
    left: horizontalScale(0),
    bottom: verticalScale(0),
  },
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
