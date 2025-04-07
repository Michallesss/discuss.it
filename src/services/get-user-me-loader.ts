import qs from "qs";
import { getAuthToken } from "./get-token";
import { instance } from "@/lib/instance";

const query = qs.stringify({
  populate: { image: { fields: ["url", "alternativeText"] } },
});

export async function getUserMeLoader() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const url = new URL("/auth/me", baseUrl);
  url.search = query;

  const authToken = await getAuthToken();
  if (!authToken) return { ok: false, data: null, error: null };

  try {
    const response = await instance.get('/auth/me', { // TODO try catch
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
  
    if (response.status === 200) return { ok: true, data: response.data, error: null };
    else return { ok: false, data: null, error: response.data };
  } catch (error) {
    return { ok: false, data: null, error: error };
  }
  // try {
  //   const response = await fetch(url.href, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${authToken}`,
  //     },
  //     cache: "no-cache",
  //   });
  //   // const response = await instance.get('/auth/me', {
  //   //   headers: {
  //   //     Authorization: `Bearer ${authToken}`,
  //   //   },
  //   // });
  //   const data = await response.json();
  //   if (data.error) return { ok: false, data: null, error: data.error };
  //   else return { ok: true, data: data, error: null };
  // } catch (error) {
  //   console.log(error);
  //   return { ok: false, data: null, error: error };
  // }
}