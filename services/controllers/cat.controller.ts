import { CatAPI } from "../apis/cat.api";

export class CatController {
  static async getCats(num: number) {
    return await CatAPI.getCats(num);
  }
}
