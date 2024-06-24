import { SWAGGER_API_URL } from "@env"

import { RootService } from "@/services/root.service"

class Translate extends RootService {
  constructor() {
    super(SWAGGER_API_URL)
  }
}

export const TranslateService = new Translate()
