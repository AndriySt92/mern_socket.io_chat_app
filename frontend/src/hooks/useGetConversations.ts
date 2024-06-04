import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { IUser } from '../interfaces/userInterfaces'

const useGetConversations = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [conversations, setConversations] = useState<IUser[]>([])

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true)
      try {
        const res = await fetch('/api/users')
        const data = await res.json()
      
        if (data.error) {
          throw new Error(data.error)
        }
        setConversations(data)
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message)
        }
      } finally {
        setLoading(false)
      }
    }

    getConversations()
  }, [])

  return { loading, conversations }
}
export default useGetConversations
