import { DATAMUSE_API_URL, SWAGGER_API_URL } from "@env"
import axios, { AxiosInstance } from "axios"

export class RootService {
  SWAGGER_API_URL: string = SWAGGER_API_URL
  DATAMUSE_API_URL: string = DATAMUSE_API_URL

  http: AxiosInstance = axios.create()
}
