"use client";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { EToastType, notification } from "@/src/components/common/toast";
import { usePostCreateContactMutation } from "@/src/services/contactApi/contactApi";
import { useState } from "react";

export enum ContactFormFields {
  NAME = "name",
  EMAIL = "email",
  MESSAGE = "message",
}

export type ContactFormValues = {
  [ContactFormFields.NAME]: string;
  [ContactFormFields.EMAIL]: string;
  [ContactFormFields.MESSAGE]: string;
};

export const contactFormYupSchema = yup.object().shape({
  [ContactFormFields.NAME]: yup.string().required("Name is required"),
  [ContactFormFields.MESSAGE]: yup.string().required("Message is required"),
  [ContactFormFields.EMAIL]: yup
    .string()
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Wrong email format",
    )
    .required("Email is required"),
});

export const useContactForm = () => {
  const resolver = yupResolver(contactFormYupSchema);

  const { handleSubmit, reset, ...rest } = useForm<ContactFormValues>({
    resolver,
    mode: "onSubmit",
  });

  const [postCreateContact, { isLoading }] = usePostCreateContactMutation();
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = async (data: ContactFormValues) => {
    if (isLoading) return;

    await postCreateContact(data)
      .unwrap()
      .then(() => {
        setSubmitted(true);
        reset();
      })
      .catch(() => {
        notification({
          message:
            "Contact form submission failed - please try to send email directly",
          type: EToastType.ERROR,
        });
      });
  };

  return {
    // onSubmit: () => setSubmitted(true),
    onSubmit: handleSubmit(handleFormSubmit),
    isLoading,
    submitted,
    ...rest,
  };
};
