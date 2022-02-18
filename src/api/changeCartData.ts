import axios from "axios";
import MOCK_API_URL from "@/constants/mockapiURL";

const changeCartData = (path: string, id: string, balance: string) =>
  axios.patch(`${MOCK_API_URL}${path}/${id}`, {
    balance: `${balance}`,
  });

export default changeCartData;

// https://axios-http.com/docs/interceptorshttps://axios-http.com/docs/interceptors
// https://axios-http.com/docs/instance

// class Http {
//   private request;
//   private defaultHeaders: {}
//   private defaultConfig: {}

//   async get (path: string, params) {
//     return this.request(path, {
//       params
//     })
//   }

//   async post () {

//   }

//   private initAxios () {
//     this.request = new axios({

//     })

//     this.request.response.interceptors = (req, config) => {

//     }
//   }
// }

// const HttpServive = new Http()

// export default HttpServive

// HttpServive.get(MOCK_API_URL.CATEGORIES, {
//   id: 5
// })
