'use server'

import { Login, Register } from '~/global/interface'
import { callApi } from '../actions'
import { cookies } from 'next/headers'
import { JwtPayload, decode } from 'jsonwebtoken'

const ROOT_ENDPOINT = '/auth/customer'

const setToken = (token: string) => {
  const decodedToken = decode(token) as JwtPayload

  cookies().set('accessToken', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: decodedToken.exp ? decodedToken.exp * 1000 : 60 * 60 * 24 * 7
  })
}

export const login = async (data: Login) => {
  const endpoint = `${ROOT_ENDPOINT}/login`
  try {
    const response = await callApi('post', endpoint, {}, {}, data)
    setToken(response.data.accessToken)

    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

export const loginWithGoogle = async (credential: string) => {
  const endpoint = `${ROOT_ENDPOINT}/google`
  try {
    const response = await callApi('post', endpoint, {}, {}, { token: credential })
    setToken(response.data.accessToken)

    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

export const registerCustomer = async (data: Register) => {
  const endpoint = `${ROOT_ENDPOINT}/register`
  try {
    await callApi('post', endpoint, {}, {}, data)

    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
