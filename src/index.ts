import axios from "axios";

const baseURL = "http://localhost:3000";

try {
  //generate random number
  const reponse = await axios.get(`${baseURL}/generate`);
  console.log(reponse.data);


  // 2. GET /current-time
  const currentTime = await axios.get(`${baseURL}/current-time`);
  console.log(currentTime.data);

  // 3. GET /environment
  const environment = await axios.get(`${baseURL}/environment`);
  console.log(environment.data);


  // 4. GET /puppet
  const puppet = await axios.get(`${baseURL}/puppet?k=9`);
  console.log(puppet.data);

  // 5. POST /numbers
  const numbers = await axios.post(`${baseURL}/numbers`, {number:8})


  // 6. GET /numbers
  const numbers2 = await axios.get(`${baseURL}/numbers`);
  console.log(numbers2.data);


} catch (error) {
  console.error(error);
  }