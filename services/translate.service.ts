import { SWAGGER_API_URL } from "@env"
import { AxiosResponse } from "axios"

import { RootService } from "@/services/root.service"

import type { ILanguages } from "@/types/languages.interface"

class Translate extends RootService {
  constructor() {
    super(SWAGGER_API_URL)
  }

  async getLanguages(): Promise<AxiosResponse<ILanguages>> {
    return this.http.get<ILanguages>("/languages")
  }
}

export const TranslateService = new Translate()
