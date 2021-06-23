// import axios from "axios";

// const BASEURL =
//   process.env.NODE_ENV === "production"
//     ? "https://4efqqh8pld.execute-api.us-east-2.amazonaws.com/prod"
//     : "http://localhost:3066";

// const DEFAULT_TIMEOUT = 20000;

// const devMode = process.env.NODE_ENV === "development";

// const defaultPrivateHeaders = {
//   Accept: `*/*`,
//   "Content-Type": `application/json`,
//   Authorization: `Bearer ${parseCookies(null).accesstoken}`,
// };

// const defaultPublicHeaders = {
//   Accept: `*/*`,
//   "Content-Type": `application/json`,
// };

// const onError = (e, url, method, data) => {
//   let errorMessage = "An unknown error occurred.\nPlease contact the customer service.";
//   if (e.response) {
//     devMode && console.log(`[${method.toUpperCase()}] [RESPONSE] ${url} ${e.response.status}`, e.response.data);

//     if (e.response?.data?.userMessage) {
//       errorMessage = e.response.data.userMessage;
//     }
//   } else {
//     devMode && console.log(`[${method.toUpperCase()}] [RESPONSE]`, url, e);
//   }

//   toast.error(errorMessage);
//   return {
//     err: true,
//     errorMessage,
//   };
// };

// const sendRequest = (url, params, method, headers, isPrivate) => {
//   const defaultHeaders = isPrivate ? defaultPrivateHeaders : defaultPublicHeaders;
//   devMode && console.log("[Request]", method.toUpperCase(), url, params);
//   return axios[method](BASEURL + url, {
//     headers: { ...defaultHeaders, ...headers },
//     params,
//   })
//     .then((response) => {
//       devMode && console.log("[Response]", method.toUpperCase(), url, response.data);

//       return response.data;
//     })
//     .catch((e) => onError(e, url, method, params));
// };

// const sendRequestForData = (url, data, method, headers, isPrivate) => {
//   const defaultHeaders = isPrivate ? defaultPrivateHeaders : defaultPublicHeaders;
//   devMode && console.log("[Request]", method.toUpperCase(), url, data);

//   return axios[method](BASEURL + url, data, {
//     headers: { ...defaultHeaders, ...headers },
//   })
//     .then((response) => {
//       devMode && console.log("[Response]", method.toUpperCase(), url, response.data);

//       return response.data;
//     })
//     .catch((e) => onError(e, url, method, data));
// };

// export const privateAPI = {
//   get: (url, params, headers) => sendRequest(url, params, "get", headers, true),
//   post: (url, data, headers) => sendRequestForData(url, data, "post", headers, true),
//   put: (url, data, headers) => sendRequestForData(url, data, "put", headers, true),
//   delete: (url, params, headers) => sendRequest(url, params, "delete", headers, true),
// };

// export const publicAPI = {
//   get: (url, params, headers) => sendRequest(url, params, "get", headers, false),
//   post: (url, data, headers) => sendRequestForData(url, data, "post", headers, false),
//   put: (url, data, headers) => sendRequestForData(url, data, "put", headers, false),
//   delete: (url, params, headers) => sendRequest(url, params, "delete", headers, false),
// };
