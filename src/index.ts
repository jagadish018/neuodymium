import axios from "axios";

const baseURL = "http://localhost:3000";

try {
  const response = await axios.get(`${baseURL}/generate`);
  const randomNumber = Math.random() * 100;
  console.log(`Random Number: ${randomNumber}`);
  console.log(`API data:`, response.data);

  const response1 = await axios.get(`${baseURL}/current-time`);
  const date = new Date();
  console.log("\n", date.toISOString());
  

  const response2 = await axios.get(`${baseURL}/environment`);
  const nodeVersion = process.version;
  const platform = process.platform;
  console.log(`Node.js version: ${nodeVersion}`);
  console.log(`Platform: ${platform}`);



  const response3 = await axios.get(`${baseURL}/puppet?k=8`);
  const puppetVersion = response3.data;
  console.log(puppetVersion);

  const numbers: number[] = [];
  const response4 = await axios.post(`${baseURL}/numbers`);
  
  

} catch (error) {
  console.error(error);
}
