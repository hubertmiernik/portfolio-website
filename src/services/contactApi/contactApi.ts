import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TCreateContactRequest } from "@/src/services/contactApi/types";
import contactApiPaths from "@/src/services/contactApi/paths";

export enum ETags {
  CONTACT = "contact",
}

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/" }),
  tagTypes: Object.values(ETags),
  endpoints: (builder) => {
    return {
      postCreateContact: builder.mutation<void, TCreateContactRequest>({
        query: (body) => ({
          method: "POST",
          url: contactApiPaths.contact,
          body,
        }),
        invalidatesTags: [ETags.CONTACT],
      }),
    };
  },
});

export const { usePostCreateContactMutation } = contactApi;
