const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const apigolang = require("./api");

app.use(express.json());

const ROOM_CAPACITY = 2;
const COUNTDOWN_SECONDS = 15;
const botAdded = {};
let clearDataInterval;
const roomDataArray = {};
const answerArray = {};
const usersScore = {};

io.on("connection", (socket) => {
  const userId = socket.id;
  const availableRoom = findOrCreateAvailableRoom();

  socket.join(availableRoom);
  console.log(`User ID ${userId} bergabung dalam ruangan ${availableRoom}`);

  socket.room = availableRoom;

  socket.on("recive", (data) => {
    console.log(
      `Data JSON diterima dari User ID ${userId} di ruangan ${availableRoom}:`,
      data
    );

    const responseData = {
      ...data,
      socketId: socket.id,
      availableRoom,
    };

    io.to(availableRoom).emit("view", {
      status: "Data JSON diterima pada socket",
      data: responseData,
    });
    // dataArray.push(responseData);
    // startCount buat kirim data users
    startCountdown(availableRoom);

    if (!roomDataArray[availableRoom]) {
      roomDataArray[availableRoom] = [];
    }
    roomDataArray[availableRoom].push(responseData);
  });

  

  socket.on(`answer${availableRoom}`, (answers) => {
    console.log(
      `Jawaban diterima dari User ID ${userId} di ruangan ${availableRoom}:`,
      answers
    );

    const answerData = {
      ...answers,
      socketId: socket.id,
      availableRoom,
    };

    io.to(availableRoom).emit("jawaban", {
      status: "Data JSON diterima pada socket",
      data: answerData,
    });
    if (!answerArray[availableRoom]) {
      answerArray[availableRoom] = [];
    }
    answerArray[availableRoom].push(answerData);
  });

  socket.on(`finishGame${availableRoom}`, (data) => {
    if (!usersScore[availableRoom]) {
      usersScore[availableRoom] = [];
    }
    usersScore[availableRoom].push(data);
    console.log("ini user score", usersScore[availableRoom]);
  });

  let timer = 10;
  let limitTimer = 55;

  const setAnswer = () => {
    const intervalId = setInterval(() => {
      if (timer >= 0 && limitTimer >= 0) {
        io.emit(`timer${availableRoom}`, timer);
        console.log("timer", timer, availableRoom);
        io.emit(`limitTimer${availableRoom}`, limitTimer);
        io.emit(`collectAnswer${availableRoom}`, answerArray[availableRoom]);
      } else {
        clearInterval(intervalId);
        timer = 10;
        answerArray[availableRoom] = [];
        if (limitTimer === 0) {
          io.emit(`usersScore${availableRoom}`, usersScore[availableRoom]);
          clearInterval(intervalId);
        } else {
          setAnswer();
        }
      }
      timer--;
      limitTimer--;
    }, 1000);
  };

  function startCountdown(room) {
    const roomData = io.sockets.adapter.rooms.get(room);
  
    if (!roomData.countdownStarted) {
      roomData.countdownStarted = true;

      botAdded[room] = false;

      let countdown = COUNTDOWN_SECONDS;
      roomData.countdownInterval = setInterval(() => {
        console.log(`Countdown di ruangan ${room}: ${countdown} detik`);
       

        if (countdown === 10 ){
          io.emit(`dataUser${availableRoom}`, roomDataArray[availableRoom]);
        }
        const roomSize = io.sockets.adapter.rooms.get(room).size;

        const botCount = Array.from(roomData).filter((userId) =>
          userId.startsWith("Bot-")
        ).length;

        const actualRoomSize = roomSize - botCount;

        if (countdown === 0) {
          setAnswer();
          clearInterval(roomData.countdownInterval);
          if (roomSize === 2) {
            // setAnswer();
            console.log("Game start!");
            // if (roomSize === 2) {
            //   console.log("Game start!");
            //   // console.log('Game start! With 1 Bot');
            //   // setTimeout(() => {
            //   //     addBotToRoom(room);
            //   // }, 0);
            // } else {
            //   console.log("Game start!");
            // }

            // setTimeout(() => {
            //     disconnectAllUsers(room);
            // }, 150000);
          }
          //  else {
          //     console.log('Gagal memulai game');
          //     io.in(room).emit('message', { user: 'System', text: 'Gagal memulai game karena kurang pemain' });
          //     disconnectAllUsers(room);
          // }
        }
        countdown--;

        if (countdown < 0) {
          clearInterval(roomData.countdownInterval);
        }
      }, 1000);
    }
  }

  socket.on("disconnect", () => {
    console.log(`User ID ${userId} terputus dari ruangan ${availableRoom}`);

    const roomData = io.sockets.adapter.rooms.get(availableRoom);

    if (roomData) {
      const remainingUsers = roomData.size;
      const remainingBots = Array.from(roomData).filter((userId) =>
        userId.startsWith("Bot-")
      );

      console.log(
        `Jumlah orang dalam ruangan ${availableRoom} setelah disconnect: ${
          remainingUsers - remainingBots.length
        }`
      );

      if (remainingUsers - remainingBots.length === 0) {
        stopCountdown(availableRoom);
      }

      if (remainingUsers === 0) {
        resetRoomStatus(availableRoom);
      }
    }
  });

  function resetRoomStatus(room) {
    const roomData = io.sockets.adapter.rooms.get(room);

    if (roomData) {
      roomData.countdownStarted = false;
      clearInterval(roomData.countdownInterval);
      roomData.hasBot = false;
    }
  }
});

function generateRoomId() {
  return Math.random().toString(36).substring(7);
}

function findOrCreateAvailableRoom() {
  const availableRoom = [...io.sockets.adapter.rooms.keys()].find(
    (room) => io.sockets.adapter.rooms.get(room).size < ROOM_CAPACITY
  );

  if (availableRoom) {
    return availableRoom;
  } else {
    const newRoom = `Room-${generateRoomId()}`;
    return newRoom;
  }
}

// function startCountdown(room) {
//   const roomData = io.sockets.adapter.rooms.get(room);

//   if (!roomData.countdownStarted) {
//     roomData.countdownStarted = true;

//     botAdded[room] = false;

//     let countdown = COUNTDOWN_SECONDS;
//     roomData.countdownInterval = setInterval(() => {
//       console.log(`Countdown di ruangan ${room}: ${countdown} detik`);

//       const roomSize = io.sockets.adapter.rooms.get(room).size;

//       const botCount = Array.from(roomData).filter((userId) =>
//         userId.startsWith("Bot-")
//       ).length;

//       const actualRoomSize = roomSize - botCount;

//       if (countdown === 0) {
//         clearInterval(roomData.countdownInterval);

//         if (actualRoomSize >= 1) {
//           if (roomSize === 1) {
//             console.log("Game start!");
//             // console.log('Game start! With 1 Bot');
//             // setTimeout(() => {
//             //     addBotToRoom(room);
//             // }, 0);
//           } else {
//             console.log("Game start!");
//           }

//           // setTimeout(() => {
//           //     disconnectAllUsers(room);
//           // }, 150000);
//         }
//         //  else {
//         //     console.log('Gagal memulai game');
//         //     io.in(room).emit('message', { user: 'System', text: 'Gagal memulai game karena kurang pemain' });
//         //     disconnectAllUsers(room);
//         // }
//       }
//       countdown--;

//       if (countdown < 0) {
//         clearInterval(roomData.countdownInterval);
//       }
//     }, 1000);
//   }
// }

function disconnectAllUsers(room) {
  const roomData = io.sockets.adapter.rooms.get(room);

  if (roomData) {
    const allSockets = Array.from(roomData);

    for (const userToKick of allSockets) {
      const socketToKick = io.sockets.sockets.get(userToKick);
      if (socketToKick) {
        socketToKick.emit("disconnectMessage", {
          text: `Anda terputus setelah 10 detik. Game telah dimulai.`,
        });
        socketToKick.disconnect(true);
      }
    }
  }
}

function addBotToRoom(room) {
  const roomData = io.sockets.adapter.rooms.get(room);
  const botUserId = `Bot-${generateRoomId()}`;
  io.in(room).emit("message", {
    user: "Bot",
    text: "Bot masuk ke dalam ruangan",
  });
  io.in(room).emit("userJoined", { userId: botUserId });
  roomData.add(botUserId);
  roomData.hasBot = true;
  botAdded[room] = true;
  console.log(`Bot ID ${botUserId} ditambahkan ke ruangan ${room}`);
}

function stopCountdown(room) {
  const roomData = io.sockets.adapter.rooms.get(room);
  if (roomData && roomData.countdownStarted) {
    clearInterval(roomData.countdownInterval);
    clearInterval(clearDataInterval);
  }
}

const port = 3001;
const host = "192.168.18.230";

server.listen(port, host, () => {
  console.log(`Server berjalan di http://${host}:${port}`);
});

app.get("/getAnswerArray/:room", (req, res) => {
  const room = req.params.room;
  const data = answerArray[room] || [];

  const result = {};
  let answerIndex = 1;

  data.forEach((item, index) => {
    if (index > 0 && index % 2 === 0) {
      answerIndex++;
    }

    if (!result[`${answerIndex}`]) {
      result[`${answerIndex}`] = {
        users: [],
      };
    }

    result[`${answerIndex}`]["users"].push({
      user: item,
    });
  });

  res.json(result);
});

app.get("/getDataArray/:room", (req, res) => {
  const room = req.params.room;
  const data = roomDataArray[room] || [];
  res.json({ users: data });
});

app.get("/getQuestionArray/", async (req, res) => {
  try {
    const response = await apigolang.get("/questions");
    res.json(response.data.data);
  } catch (error) {
    console.log(error);
  }
});
