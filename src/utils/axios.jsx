import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjYwYTAzZjMzN2MyNDc2NjQ4ZDcxZjM5ODgwNDcyNSIsIm5iZiI6MTc1MDM0MDM3Mi4wOTcsInN1YiI6IjY4NTQxMzE0MjhmNjI5ZjVhOTc3Y2ZmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U5ZmOFjWY4prdfgn-e6xsoAFUOvhkTXmmklz6STD7G0",
  },
});

export default instance;
