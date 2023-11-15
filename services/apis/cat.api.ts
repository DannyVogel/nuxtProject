import { v4 as uuidv4 } from "uuid";

export class CatAPI {
  static async getCats(num: number) {
    const cats = [];
    for (let i = 0; i < num; i++) {
      const id = uuidv4();
      try {
        const res = await fetch(`https://robohash.org/${id}?set=set4`);
        cats.push(res.url);
      } catch (error) {
        console.log(error);
      }
    }
    return cats;
  }
}
