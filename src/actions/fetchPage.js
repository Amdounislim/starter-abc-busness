"use server";
const { default: axios } = require("axios");

const { pageQuery } = require("@/utils/queries");

export const fetchPage = async (pageName) => {
  try {
    const query = await pageQuery(pageName);

    const page = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}api/pages?${query}`
    );

    return page.data.data[0].attributes.sections.data;
  } catch (error) {
    return {};
  }
};
