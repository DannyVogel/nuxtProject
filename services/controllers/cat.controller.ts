import { CatAPI } from "../../services/apis/cat.api";
import {useCatsStore} from '../../stores/cat.store'

export class CatController {
  static async getCats(num: number) {
    const catsStore = useCatsStore()
    catsStore.setCats(await CatAPI.getCats(num));
  }
}
