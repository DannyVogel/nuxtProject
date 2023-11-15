import { type CatStore, type CatsArray} from '../types/interfaces/common.interfaces'

export const useCatsStore = defineStore("cats", {
  state: (): CatStore => {
    return {
      cats: [],
    };
  },
  actions: {
    setCats(cats: CatsArray) {
      this.cats = [...cats]
    },
  },
  persist: true,
});
