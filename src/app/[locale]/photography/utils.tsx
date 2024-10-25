import { EContent } from "@/src/services/modalState/slice";
import React from "react";

export const getContent = (content: EContent) => {
  switch (content) {
    case EContent.PRODUCT:
      return (
        <>
          <p className={"mb-4"}>
            Showcase your products with high-quality images that capture
            attention and drive sales. Ideal for e-commerce, catalogs, and
            promotional materials, I offer tailored photography services. My
            expertise ensures each product shines, from detailed close-ups to
            dynamic lifestyle shots. Consistent branding makes each image unique
            while contributing to a cohesive visual identity for your brand.
          </p>
          <ul className={"mb-4"}>
            <li>
              <b>Detailed Shots:</b> Close-ups that showcase the intricate
              details and craftsmanship of your products.
            </li>
            <li>
              <b>Lifestyle Photography:</b> Contextual images that show your
              products in use, helping customers visualize their benefits.
            </li>
            <li>
              <b>Consistent Branding:</b> Ensuring all images align with your
              brand’s aesthetic and style guidelines.
            </li>
          </ul>
        </>
      );
    case EContent.DRONE:
      return (
        <>
          <p className={"mb-4"}>
            Elevate your visuals with breathtaking aerial shots. Perfect for
            real estate, events, and dynamic marketing content, my drone
            photography captures stunning aerial views for a unique perspective.
            Whether showcasing properties, covering large events, or creating
            promotional materials, my drone services deliver exceptional
            results. Using advanced drone technology, I capture high-resolution
            images and videos that highlight the beauty and scope of your
            subject, creating compelling content that engages and impresses your
            audience.
          </p>

          <ul className={"mb-4"}>
            <li>
              <b>Real Estate Aerials:</b> Stunning overhead views of properties
              to enhance listings and marketing materials.
            </li>
            <li>
              <b>Event Coverage:</b> Unique perspectives for capturing the scale
              and ambiance of large events, from festivals to corporate
              gatherings.
            </li>
            <li>
              <b>Landscapes and Scenery:</b> High-resolution images of natural
              and urban landscapes for websites, brochures, and promotional
              content.
            </li>
          </ul>
        </>
      );
    case EContent.COMMERCIAL:
      return (
        <>
          <p className={"mb-4"}>
            Showcase your business, products, and services with high-quality
            commercial photography. I create images that represent your
            brand&apos;s identity and message. From advertising campaigns and
            architectural photography to food and product photography, I offer a
            wide range of services. Specializing in creating tempting visuals
            and capturing the essence of your offerings, my goal is to exceed
            your expectations, helping you stand out and connect with your
            audience.
          </p>

          <ul className={"mb-4"}>
            <li>
              <b>Advertising Campaigns:</b> Eye-catching images designed to grab
              attention and drive engagement.
            </li>
            <li>
              <b>Architectural Photography:</b> Highlighting the design and
              features of buildings and interior spaces.
            </li>
            <li>
              <b>Food and Beverage Photography:</b> Tempting visuals that make
              your culinary creations look irresistible.
            </li>
          </ul>
        </>
      );
  }
};

export const getRotate = (index: number) => {
  switch (index) {
    case 0:
      return 6.2;
    case 1:
      return -5.85;
    case 2:
      return 5.0;
    case 3:
      return -4.71;
    case 4:
      return 5.9;
  }
};

export const getImages = (content: EContent) => {
  const imagesDrone = [
    `/photos/5.jpeg`,
    `/photos/6.jpeg`,
    `/photos/8.jpeg`,
    `/photos/42.jpeg`,
    `/photos/70.jpeg`,
  ];

  const imagesProduct = [
    `/photos/30.jpeg`,
    `/photos/12.jpeg`,
    `/photos/28.jpeg`,
    `/photos/56.jpeg`,
    `/photos/43.jpeg`,
  ];

  const imagesCommercial = [
    `/photos/68.jpeg`,
    `/photos/33.jpeg`,
    `/photos/9.jpeg`,
    `/photos/61.jpeg`,
    `/photos/72.jpeg`,
  ];

  switch (content) {
    case EContent.PRODUCT:
      return imagesProduct;
    case EContent.DRONE:
      return imagesDrone;
    case EContent.COMMERCIAL:
      return imagesCommercial;
  }
};

export const getTitle = (content: EContent) => {
  switch (content) {
    case EContent.PRODUCT:
      return "Product Photography";
    case EContent.DRONE:
      return "Drone Photography";
    case EContent.COMMERCIAL:
      return "Commercial Photography";
  }
};
