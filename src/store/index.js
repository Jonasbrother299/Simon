import { proxy } from "valtio";

const state = proxy({
    clicked: null,
    urls: [1, 2, 3, 4, 3, 2, 4, 2, 1, 1, 2, 3, 4, 3, 2, 4, 2, 1].map((u) => `/${u}.jpg`)
  })
  
export default state;