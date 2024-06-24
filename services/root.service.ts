import axios, { AxiosInstance, CreateAxiosDefaults } from "axios"

export class RootService {
  http: AxiosInstance

  constructor(baseURL: string, config: CreateAxiosDefaults = {}) {
    this.http = axios.create({
      baseURL,
      ...config,
    })
  }
}
