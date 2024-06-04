export interface IMessage {
  _id: string
  senderId: string
  reciverId: string
  createdAt: Date
  message: string
  shouldShake?: boolean
}
