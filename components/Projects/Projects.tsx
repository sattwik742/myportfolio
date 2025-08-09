"use client";
import Image from "next/image"; // Use Next.js Image component
import nitchImg from "@/public/images/nitch.png"; // Import the image file
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function Projects() {
  return (
    <section className="bg-black">
      <h1 className="text-3xl text-white text-center py-6 font-semibold">
        Projects
      </h1>
      <CardContainer className="inter-var">
        <CardBody className="bg-white relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto p-6 border">
          <CardItem translateZ="50" className="text-xl font-bold text-black">
            Wezterm Configuration
          </CardItem>
          <CardItem
            translateZ="60"
            className="text-black text-sm max-w-sm mt-2"
          >
            Everforest themed wezterm customization with background image
          </CardItem>
          <CardItem
            translateZ="100"
            rotateX={20}
            rotateZ={-10}
            className="w-full mt-4"
          >
            <Image
              src={nitchImg}
              alt="thumbnail"
              className="h-60 w-full object-cover group-hover/card:shadow-xl"
              placeholder="blur" // Optional: blur placeholder
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              translateX={40}
              as="button"
              className="px-4 py-2 bg-black text-white text-xs font-bold"
            >
              <a href="https://github.com/sattwik742/weztermEverforest">
                github
              </a>
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </section>
  );
}
