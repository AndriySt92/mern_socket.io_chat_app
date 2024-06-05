import { createContext, useState, useEffect, useContext } from 'react'
import { useAuthContext } from './AuthContext'
import io, { Socket } from 'socket.io-client'

interface ISocketContext {
  socket: Socket
  onlineUsers: string[]
}

interface Props {
  children: React.ReactNode
}

const SocketContext = createContext<ISocketContext>({} as ISocketContext)

export const useSocketContext = () => {
  return useContext(SocketContext)
}

export const SocketContextProvider = ({ children }: Props) => {
  const [socket, setSocket] = useState<Socket | null>(null)
  const [onlineUsers, setOnlineUsers] = useState([])
  const { authUser } = useAuthContext()

  useEffect(() => {
    if (authUser) {
      const socket = io('http://localhost:5000', {
        query: {
          userId: authUser._id,
        },
      })

      setSocket(socket)

      // socket.on() is used to listen to the events. can be used both on client and server side
      socket.on('getOnlineUsers', (users) => {
        setOnlineUsers(users)
      })

      return () => {
        socket.close()
      }
    } else {
      if (socket) {
        socket.close()
        setSocket(null)
      }
    }
  }, [authUser])

  return (
    <SocketContext.Provider value={{ socket: socket as Socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  )
}
