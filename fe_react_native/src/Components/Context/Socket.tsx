import { createContext, useContext, useState } from 'react';
const SocketContext = createContext(null);


export const useSocket = () => {
    return useContext(SocketContext);
}


export const SocketProvider = ({ children }) => {
const [socket, setSocket] = useState(null);
const [availableRooms, setAvailableRooms] = useState<any>();
    return (
        <SocketContext.Provider value={[socket, setSocket, availableRooms, setAvailableRooms]}>
            {children}
        </SocketContext.Provider>
    )
}
