"use server";

import axios from "axios";

const { seoQuery } = require("@/utils/queries");

export const fetchSeo = async (pageName) => {
  try {
    const query = await seoQuery(pageName);

    const seo = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}api/seos?${query}`
    );
    console.log(seo.data.data[0]);

    return seo.data.data[0];
  } catch (error) {
    console.log(error);
    return {};
  }
};
