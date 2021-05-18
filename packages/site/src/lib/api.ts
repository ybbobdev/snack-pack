import fetch from "node-fetch";
import getConfig from "next/config";
const {
  publicRuntimeConfig: {APP_ENV}
} = getConfig();

export async function getApiHealth() {
  const url = `${APP_ENV.api}/__health`;
  const response = await fetch(url);
  const responseData = JSON.parse(await response.text());
  return responseData;
}
