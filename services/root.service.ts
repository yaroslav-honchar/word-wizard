import axios, { AxiosInstance } from "axios"

export class RootService {
  http: AxiosInstance

  constructor(baseURL: string) {
    this.http = axios.create({
      baseURL,
    })
  }
}
