import { DATAMUSE_API_URL } from "@env"

import { RootService } from "@/services/root.service"

class Word extends RootService {
  constructor() {
    super(DATAMUSE_API_URL)
  }
}

export const WordService = new Word()
