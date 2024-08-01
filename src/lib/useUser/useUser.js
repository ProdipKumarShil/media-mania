import { useSession } from "next-auth/react";

export const useUser = () => {
  const {data: session, status} = useSession()
  const user = session?.user || null

  return {user, status}
}