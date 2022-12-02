import axios from "axios"
import { ConfigEnv } from "../env/config-env"

const axiosInstance = axios.create({
  baseURL: ConfigEnv.bookApiUrlBase,
})

export const get = async <T>(url: string): Promise<T> => {
  const responde = await axiosInstance.get<T>(url)
  return responde.data
}

export const post = async<T>(url: string, body:T): Promise<void>=> {
  await axiosInstance.post<T>(url, body)
}