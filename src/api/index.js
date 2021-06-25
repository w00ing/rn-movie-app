import axios from 'axios';
import dayjs from 'dayjs';
import { Alert, Platform } from 'react-native';
import * as RNLocalize from 'react-native-localize';

import { currentBuildNo } from '../constants/buildNo';

const BASEURL =
  process.env.NODE_ENV === 'production'
    ? 'https://4efqqh8pld.execute-api.us-east-2.amazonaws.com/prod'
    : 'http://localhost:3066';

const defaultUid = '';
const currentTimezone = RNLocalize.getTimeZone();

const devMode = process.env.BUILD_ENV === 'development';

const defaultPrivateHeaders = {
  Accept: `*/*`,
  'Content-Type': `application/json`,
  Authorization: `Bearer ${defaultUid}`,
  currentBuildNo: currentBuildNo,
  timezone: currentTimezone,
};

const defaultPublicHeaders = {
  Accept: `*/*`,
  'Content-Type': `application/json`,
  currentBuildNo: currentBuildNo,
};

const onError = (e, url, method, data) => {
  let errorMessage =
    'An unknown error occurred.\nPlease contact the customer service.';
  if (e.response) {
    devMode &&
      console.log(
        '[🔴 RES]',
        method.toUpperCase(),
        url,
        data,
        `message: ${e.message}`,
      );

    if (e.response?.data?.userMessage) {
      errorMessage = e.response.data.userMessage;
    }
  } else {
    devMode &&
      console.log(
        '[🔴 RES]',
        method.toUpperCase(),
        url,
        data,
        `message: ${e.message}`,
      );
  }

  Alert.alert(null, errorMessage, [{ text: 'Confirm' }]);
  return {
    err: true,
    errorMessage,
  };
};

const sendRequest = (url, params, method, headers, isPrivate) => {
  const now = dayjs();

  const defaultHeaders = isPrivate
    ? defaultPrivateHeaders
    : defaultPublicHeaders;
  devMode &&
    console.log(`[🟡 REQ ${Platform.OS}]`, method.toUpperCase(), url, params);
  return axios[method](BASEURL + url, {
    headers: { ...defaultHeaders, ...headers },
    params,
  })
    .then((response) => {
      devMode &&
        console.log(
          `[🟢 RES ${Platform.OS}] ${dayjs()
            .diff(now, 'millisecond')
            .toString()}`,
          method.toUpperCase(),
          url,
        );

      return response.data;
    })
    .catch((e) => onError(e, url, method, params));
};

const sendRequestForData = (url, data, method, headers, isPrivate) => {
  const now = dayjs();

  const defaultHeaders = isPrivate
    ? defaultPrivateHeaders
    : defaultPublicHeaders;
  devMode &&
    console.log(`[🟡 REQ ${Platform.OS}]`, method.toUpperCase(), url, data);

  return axios[method](BASEURL + url, data, {
    headers: { ...defaultHeaders, ...headers },
  })
    .then((response) => {
      devMode &&
        console.log(
          `[🟢 RES ${Platform.OS}] ${dayjs()
            .diff(now, 'millisecond')
            .toString()}`,
          method.toUpperCase(),
          url,
        );

      return response.data;
    })
    .catch((e) => onError(e, url, method, data));
};

export const privateAPI = {
  get: (url, params, headers) => sendRequest(url, params, 'get', headers, true),
  post: (url, data, headers) =>
    sendRequestForData(url, data, 'post', headers, true),
  put: (url, data, headers) =>
    sendRequestForData(url, data, 'put', headers, true),
  delete: (url, params, headers) =>
    sendRequest(url, params, 'delete', headers, true),
};

export const publicAPI = {
  get: (url, params, headers) =>
    sendRequest(url, params, 'get', headers, false),
  post: (url, data, headers) =>
    sendRequestForData(url, data, 'post', headers, false),
  put: (url, data, headers) =>
    sendRequestForData(url, data, 'put', headers, false),
  delete: (url, params, headers) =>
    sendRequest(url, params, 'delete', headers, false),
};
