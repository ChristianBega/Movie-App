import axios from "axios";

export const generateUrl = ({ sectionData, page }) => {
  let updatedUrl;
  let baseUrl;

  if (!sectionData.fetchUrl) {
    baseUrl = urlPath + sectionData.id;
    const searchParams = new URLSearchParams(baseUrl);
    searchParams.set("page", page.toString());
    updatedUrl = `${baseUrl.split("?")[0]}?${searchParams.toString()}`;
  } else {
    baseUrl = sectionData.fetchUrl;
    const searchParams = new URLSearchParams(baseUrl);
    searchParams.set("page", page.toString());
    updatedUrl = `${baseUrl.split("?")[0]}?${searchParams.toString()}`;
  }
  const options = {
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_AUTHORIZATION,
    },
  };

  return axios.get(updatedUrl, options);
};
