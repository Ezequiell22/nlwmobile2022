import { useContext } from 'react'

import {
  AuthContext, AuthContextDateProps
} from '../contexts/AuthContext'

export function useAuth() : AuthContextDateProps{
  const context = useContext(AuthContext)

  return context;
}