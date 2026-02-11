"use server";
import qs from "qs";

const sectionFields = [
  "name",
  "order",
  "title",
  "subtitle",
  "description",
  "content",
  "buttonText",
  "buttonUrl",
  "regularTitle",
  "decoratedTitle",
  "showButton",
];
const cardFields = [
  "name",
  "order",
  "title",
  "subtitle",
  "description",
  "content",
  "buttonText",
  "buttonUrl",
  "showButton",
];
const imageFields = ["url", "alternativeText"];
const sectionPopulate = {
  image: {
    fields: imageFields,
  },
  image2: {
    fields: imageFields,
  },
  imageMobile: {
    fields: imageFields,
  },
  imageMobile2: {
    fields: imageFields,
  },
};

export const seoQuery = async (pageName) => {
  return qs.stringify({
    fields: ["title", "description", "url"],
    filters: {
      page: { name: { $eq: pageName } },
    },
    populate: {
      ogimage: {
        fields: ["id", "url", "alternativeText"],
      },
    },
  });
};

export const pageQuery = async (pageName) => {
  return qs.stringify({
    fields: ["name", "url"],
    filters: {
      name: { $eq: pageName },
    },
    populate: {
      sections: {
        fields: sectionFields,
        populate: {
          ...sectionPopulate,
          list: {
            fields: ["id", "name"],
            populate: {
              cards: {
                fields: cardFields,
                populate: {
                  ...sectionPopulate,
                },
                sort: ["order:asc"],
              },
            },
          },
        },
        sort: ["order:asc"],
      },
    },
  });
};
