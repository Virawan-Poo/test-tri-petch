import React from "react";
import Head from "next/head";
import Image from "next/image";
import { ReactElement } from "react";
import { contentData } from "@/api/contentData";
import ContentSwiper from "@/components/ContentSwiper";
import { enumCategory } from "@/enums/enum";

export default function index(): ReactElement {
  return (
    <>
      <Head>
        <title>Test Tri Petch</title>
        <meta name="description" content="For Test" />
        <meta name="keywords" content="test" />
      </Head>

      <div className="w-full overflow-hidden">
        <div className="section-athletes relative mb-5 md:mb-0">
          <h1 className="xs:text-5xl sm:text-[50px] mt-2 mb-5 md:mt-[70px] md:mb-0 md:pl-[40%] md:text-[90px] xl:pl-[50%] xl:mt-8 xl:mb-0 leading-none font-normal text-lightGray box-border pl-5">
            {enumCategory.ATHLETES.toLocaleUpperCase()}
          </h1>
          <div className="relative z-20 mx-auto md:absolute md:top-[45px] md:right-[60%] md:translate-x-[30px] xl:top-[10px] xl:right-[50%] xl:translate-x-[-100px]">
            <figure className="rugby-img relative ml-2.5 z-20 left-[50%] translate-x-[-50%] xl:top-7">
              <Image
                src="/graphic.png"
                alt="rugby player"
                width={678}
                height={950}
              />
            </figure>

            <div className="icon-wrap xl:hidden">
              <figure className="icon-line">
                <Image
                  src="/line.svg"
                  alt="icon line"
                  width={187}
                  height={197}
                />
              </figure>

              <figure className="icon-plus absolute top-2.5 opacity-50 md:top-[-15px] md:left-[170px]">
                <Image src="/plus.svg" alt="icon plus" width={15} height={15} />
              </figure>

              <figure className="icon-plus absolute top-5 left-5 md:top-[-5px] md:left-[190px]">
                <Image src="/plus.svg" alt="icon plus" width={15} height={15} />
              </figure>
            </div>
          </div>

          <ContentSwiper data={contentData?.athletes} />
        </div>

        <div className="section-players relative md:pt-10 xl:pt-[140px]">
          <h2 className="xs:text-5xl sm:text-[50px] mb-5 md:text-[90px] md:mb-0 md:pl-[3vw] lg:mb-0 lg:pl-[10vw] xl:pl-[20vw] leading-none font-normal text-lightGray box-border pl-5">
            {enumCategory.PLAYERS.toUpperCase()}
          </h2>

          <div className="relative md:absolute z-10 mx-auto md:top-[25px] md:left-[40%] md:translate-x-[25px] xl:top-0 xl:left-[50%] xl:translate-x-[-100px]">
            <figure className="basketball-img relative z-20 left-[50%] translate-x-[-50%]">
              <Image
                src="/basketball.png"
                alt="basketball player"
                width={911}
                height={815}
              />
            </figure>

            <div className="icon-wrap">
              <figure className="icon-line2">
                <Image
                  src="/line2.svg"
                  alt="icon line"
                  width={187}
                  height={197}
                />
              </figure>
              <figure className="icon-line3">
                <Image
                  src="/line2.svg"
                  alt="icon line"
                  width={187}
                  height={197}
                />
              </figure>
              <figure className="icon-plus absolute top-2.5 opacity-50 md:top-[90px] md:left-[100px] xl:top-[140px] xl:left-[275px]">
                <Image src="/plus.svg" alt="icon plus" width={15} height={15} />
              </figure>
              <figure className="icon-plus absolute top-5 left-5 md:top-[75px] md:left-[75px] xl:top-[125px] xl:left-[255px]">
                <Image src="/plus.svg" alt="icon plus" width={15} height={15} />
              </figure>

              <figure className="icon-plus-bottom absolute right-[-20px] md:bottom-[250px] xl:right-[170px] xl:top-[390px]">
                <Image src="/plus.svg" alt="icon plus" width={15} height={15} />
              </figure>
            </div>
          </div>
          <ContentSwiper data={contentData?.players} />
        </div>
      </div>
    </>
  );
}
