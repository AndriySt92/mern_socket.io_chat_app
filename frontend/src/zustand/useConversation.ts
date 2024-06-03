import { create } from 'zustand'
import { IUser } from '../interfaces/userInterfaces'
import { IMessage } from '../interfaces/messageInterfaces'

interface IConversationState {
  selectedConversation: IUser | null
  setSelectedConversation: (selectedConversation: IUser | null) => void
  messages: IMessage[]
  setMessages: (messages: IMessage[]) => void
}

const useConversation = create<IConversationState>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}))

export default useConversation
