const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.json());

const ROOM_CAPACITY = 5;
const COUNTDOWN_SECONDS = 20;
const botAdded = {};

io.on('connection', (socket) => {
    const userId = socket.id;
    const availableRoom = findOrCreateAvailableRoom();

    socket.join(availableRoom);


    console.log(`User ID ${userId} bergabung dalam ruangan ${availableRoom}`);

    startCountdown(availableRoom);

    socket.on('recive', (data) => {
        console.log(`Data JSON diterima dari User ID ${userId} di ruangan ${availableRoom}:`, data);

        const responseData = {
            ...data,
            socketId: socket.id
        };

        io.to(availableRoom).emit('view', { status: 'Data JSON diterima pada socket', data: responseData });
        console.log(responseData);
    });


    socket.on('disconnect', () => {
        console.log(`User ID ${userId} terputus dari ruangan ${availableRoom}`);

        const roomData = io.sockets.adapter.rooms.get(availableRoom);

        if (roomData) {
            const remainingUsers = roomData.size;
            const remainingBots = Array.from(roomData).filter((userId) => userId.startsWith('Bot-'));

            console.log(`Jumlah orang dalam ruangan ${availableRoom} setelah disconnect: ${remainingUsers - remainingBots.length}`);

            // Hentikan countdown jika tidak ada pengguna lagi di ruangan
            if (remainingUsers - remainingBots.length === 0) {
                stopCountdown(availableRoom);
            }

            // Reset status ruangan jika tidak ada pengguna lagi di ruangan
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
            // botAdded[room] = false;
        }
    }
});

function findOrCreateAvailableRoom(userId) {
    const userRooms = io.sockets.adapter.sids.get(userId);

    if (userRooms) {
        return Array.from(userRooms).find((room) => io.sockets.adapter.rooms.get(room).size < ROOM_CAPACITY);
    }

    const newRoom = `Room-${generateRoomId()}`;
    io.in(newRoom).emit('message', { user: 'System', text: 'Ruangan telah dibuat untuk game baru.' });
    io.in(newRoom).emit('userJoined', { userId: userId });

    io.sockets.adapter.sids.set(userId, new Set([newRoom]));
    io.sockets.adapter.rooms.set(newRoom, new Set([userId]));
    startCountdown(newRoom);

    return newRoom;
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

function generateRoomId() {
    return Math.random().toString(36).substring(7);
}

// ---------------------------------------------------------------------------------------
// function startCountdown(room) {
//     const roomData = io.sockets.adapter.rooms.get(room);

//     if (!roomData.countdownStarted) {
//         roomData.countdownStarted = true;

//         botAdded[room] = false;

//         let countdown = COUNTDOWN_SECONDS;
//         roomData.countdownInterval = setInterval(() => {
//             console.log(`Countdown di ruangan ${room}: ${countdown} detik`);

//             const roomSize = io.sockets.adapter.rooms.get(room).size;

//             const botCount = Array.from(roomData).filter((userId) => userId.startsWith('Bot-')).length;

//             const actualRoomSize = roomSize - botCount;

//             if (countdown === 0 && actualRoomSize >= 4) {
//                 clearInterval(roomData.countdownInterval);

//                 if (actualRoomSize === 4) {
//                     console.log('Game start! With 1 Bot');
//                     setTimeout(() => {
//                         addBotToRoom(room);
//                     }, 0);
//                 } else {
//                     console.log('Game start!');
//                 }
//             }
//             else if (countdown === 0 && actualRoomSize < 4) {
//                 clearInterval(roomData.countdownInterval);
//                 console.log('Gagal memulai game');
//                 io.in(room).emit('message', { user: 'System', text: 'Gagal memulai game karena kurang pemain' });

//                 const allSockets = Array.from(roomData);

//                 for (const userToKick of allSockets) {
//                     const socketToKick = io.sockets.sockets.get(userToKick);
//                     if (socketToKick) {
//                         socketToKick.disconnect(true);
//                     }
//                 }
//             }
//             countdown--;

//             if (countdown < 0) {
//                 clearInterval(roomData.countdownInterval);
//             }

//         }, 1000);
//     }
// }
// ---------------------------------------------------------------------------------------

function startCountdown(room) {
    const roomData = io.sockets.adapter.rooms.get(room);

    if (!roomData.countdownStarted) {
        roomData.countdownStarted = true;

        botAdded[room] = false;

        let countdown = COUNTDOWN_SECONDS;
        roomData.countdownInterval = setInterval(() => {
            console.log(`Countdown di ruangan ${room}: ${countdown} detik`);

            const roomSize = io.sockets.adapter.rooms.get(room).size;

            const botCount = Array.from(roomData).filter((userId) => userId.startsWith('Bot-')).length;

            const actualRoomSize = roomSize - botCount;

            if (countdown === 0) {
                clearInterval(roomData.countdownInterval);

                if (actualRoomSize >= 4) {
                    if (actualRoomSize === 4) {
                        console.log('Game start! With 1 Bot');
                        setTimeout(() => {
                            addBotToRoom(room);
                        }, 0);
                    } else {
                        console.log('Game start!');
                    }

                    // Tunggu 10 detik setelah game dimulai, lalu putuskan semua pengguna
                    setTimeout(() => {
                        disconnectAllUsers(room);
                    }, 5000);
                } else {
                    console.log('Gagal memulai game');
                    io.in(room).emit('message', { user: 'System', text: 'Gagal memulai game karena kurang pemain' });

                    // Putuskan semua pengguna ketika game gagal dimulai
                    disconnectAllUsers(room);
                }
            }
            countdown--;

            if (countdown < 0) {
                clearInterval(roomData.countdownInterval);
            }

        }, 1000);
    }
}

function disconnectAllUsers(room) {
    const roomData = io.sockets.adapter.rooms.get(room);

    if (roomData) {
        const allSockets = Array.from(roomData);

        for (const userToKick of allSockets) {
            const socketToKick = io.sockets.sockets.get(userToKick);
            if (socketToKick) {
                socketToKick.emit('disconnectMessage', { text: `Anda terputus setelah 10 detik. Game telah dimulai.` });
                socketToKick.disconnect(true);
            }
        }
    }
}

function addBotToRoom(room) {
    const roomData = io.sockets.adapter.rooms.get(room);
    const botUserId = `Bot-${generateRoomId()}`;
    io.in(room).emit('message', { user: 'Bot', text: 'Bot masuk ke dalam ruangan' });
    io.in(room).emit('userJoined', { userId: botUserId });
    roomData.add(botUserId);
    roomData.hasBot = true;
    botAdded[room] = true;
    console.log(`Bot ID ${botUserId} ditambahkan ke ruangan ${room}`);
}

function stopCountdown(room) {
    const roomData = io.sockets.adapter.rooms.get(room);
    if (roomData && roomData.countdownStarted) {
        clearInterval(roomData.countdownInterval);
    }
}

const port = 3000;
const host = '192.168.18.169';

server.listen(port, host, () => {
    console.log(`Server berjalan di http://${host}:${port}`);
});
