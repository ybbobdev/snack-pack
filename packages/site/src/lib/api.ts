import fetch from "node-fetch";
import getConfig from "next/config";
import {IApplicationDataSchema} from '../../../shared/interfaces/IApplicationDataSchema';

const {
  publicRuntimeConfig: {APP_ENV}
} = getConfig();

export async function getApiHealth() {
  const url = `${APP_ENV.api}/__health`;
  const response = await fetch(url);
  const responseData = JSON.parse(await response.text());
  return responseData;
}

export async function getApplications(): Promise<IApplicationDataSchema> {
  const url = `${APP_ENV.api}/applications`;
  const response = await fetch(url);
  const responseData = JSON.parse(await response.text());
  return responseData;
}
