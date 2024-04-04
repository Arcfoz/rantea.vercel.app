"use client";
import Image from "next/image";

import { BlocksRenderer, type BlocksContent } from "@strapi/blocks-react-renderer";
import HashScroll from "./HashScroll";
import { BiLinkExternal, BiSolidQuoteRight } from "react-icons/bi";
import Link from "next/link";

export default function BlockRendererClient({ content }: { readonly content: BlocksContent }) {
  if (!content) return null;
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        image: ({ image }) => {
          return <Image src={image.url} width={image.width} height={image.height} alt={image.alternativeText || ""} />;
        },
        quote: ({ children }) => (
          <blockquote className="relative my-8 overflow-hidden rounded-md border border-zinc-200 p-4 pr-12 text-lg tracking-tight dark:border-zinc-800 lg:py-6 lg:pl-6">
            <BiSolidQuoteRight className="absolute -right-5 -top-7 -rotate-12 text-7xl text-zinc-200 dark:text-zinc-800" aria-hidden="true" />
            {children}
          </blockquote>
        ),
        list: ({ children, format }) => {
          return format === "ordered" ? <ol className="ml-5 mt-2 list-decimal">{children}</ol> : <ul className="ml-5 mt-2 list-[disc]">{children}</ul>;
        },
        link: ({ children, url }) => {
          return (
            <Link className="text-blue-500 font-bold hover:underline" href={url} rel="noreferrer noopener" target="_blank">
              {children} <BiLinkExternal className="inline" aria-hidden="true" />
            </Link>
          );
        },

        heading: ({ children, level }: any) => {
          switch (level) {
            case 1:
              return (
                <h1
                  id={children[0].props.text
                    ?.toString()
                    .toLowerCase()
                    .replaceAll(/[^-\w]+/g, "-")
                    .replaceAll(/--+/g, "-")
                    .replace(/^-|-$/g, "")}
                  className="scroll-mt-24 font-incognito relative my-8 block text-4xl font-bold tracking-tight text-zinc-700 before:absolute before:-left-4 before:top-1/2 before:hidden before:-translate-y-1/2 before:text-xl before:text-zinc-400 before:opacity-80 before:content-['#'] hover:before:hidden dark:text-zinc-100 dark:before:text-zinc-500 hover:before:sm:inline-block lg:text-4xl lg:before:-left-5 lg:before:text-2xl"
                >
                  <HashScroll text={children[0].props.text} />
                </h1>
              );
            case 2:
              return (
                <h2
                  id={children[0].props.text
                    ?.toString()
                    .toLowerCase()
                    .replaceAll(/[^-\w]+/g, "-")
                    .replaceAll(/--+/g, "-")
                    .replace(/^-|-$/g, "")}
                  className="scroll-mt-24 font-incognito relative my-8 block text-3xl font-bold tracking-tight text-zinc-700 before:absolute before:-left-4 before:top-1/2 before:hidden before:-translate-y-1/2 before:text-xl before:text-zinc-400 before:opacity-80 before:content-['#'] hover:before:hidden dark:text-zinc-100 dark:before:text-zinc-500 hover:before:sm:inline-block lg:text-4xl lg:before:-left-5 lg:before:text-2xl"
                >
                  <HashScroll text={children[0].props.text} />
                </h2>
              );
            case 3:
              return (
                <h3
                  id={children[0].props.text
                    ?.toString()
                    .toLowerCase()
                    .replaceAll(/[^-\w]+/g, "-")
                    .replaceAll(/--+/g, "-")
                    .replace(/^-|-$/g, "")}
                  className="scroll-mt-24 font-incognito relative my-6 block text-2xl font-semibold tracking-tight text-zinc-700 before:absolute before:-left-4 before:top-1/2 before:hidden before:-translate-y-1/2 before:text-xl before:text-zinc-400 before:opacity-80 before:content-['#'] hover:before:hidden dark:text-zinc-100 dark:before:text-zinc-500 hover:before:sm:inline-block lg:text-3xl lg:font-bold lg:before:-left-5 lg:before:text-2xl"
                >
                  <HashScroll text={children[0].props.text} />
                </h3>
              );
            case 4:
              return (
                <h4
                  id={children[0].props.text
                    ?.toString()
                    .toLowerCase()
                    .replaceAll(/[^-\w]+/g, "-")
                    .replaceAll(/--+/g, "-")
                    .replace(/^-|-$/g, "")}
                  className="scroll-mt-24 font-incognito relative mb-2 mt-4 inline-block text-xl font-semibold tracking-tight text-zinc-700 before:absolute before:-left-4 before:top-1/2 before:hidden before:-translate-y-1/2 before:text-xl before:text-zinc-400 before:opacity-80 before:content-['#'] hover:before:hidden dark:text-zinc-100 dark:before:text-zinc-500 hover:before:sm:inline-block lg:before:-left-6 lg:before:text-2xl"
                >
                  <HashScroll text={children[0].props.text} />
                </h4>
              );
            case 5:
              return (
                <h5
                  id={children[0].props.text
                    ?.toString()
                    .toLowerCase()
                    .replaceAll(/[^-\w]+/g, "-")
                    .replaceAll(/--+/g, "-")
                    .replace(/^-|-$/g, "")}
                  className="scroll-mt-24 font-incognito relative my-6 block text-xl font-semibold tracking-tight text-zinc-700 before:absolute before:-left-4 before:top-1/2 before:hidden before:-translate-y-1/2 before:text-xl before:text-zinc-400 before:opacity-80 before:content-['#'] hover:before:hidden dark:text-zinc-100 dark:before:text-zinc-500 hover:before:sm:inline-block lg:text-xl lg:font-semibold lg:before:-left-5 lg:before:text-lg"
                >
                  <HashScroll text={children[0].props.text} />
                </h5>
              );
            case 6:
              return (
                <h6
                  id={children[0].props.text
                    ?.toString()
                    .toLowerCase()
                    .replaceAll(/[^-\w]+/g, "-")
                    .replaceAll(/--+/g, "-")
                    .replace(/^-|-$/g, "")}
                  className="scroll-mt-24 font-incognito relative mb-2 mt-4 inline-block text-xl font-semibold tracking-tight text-zinc-700 before:absolute before:-left-4 before:top-1/2 before:hidden before:-translate-y-1/2 before:text-xl before:text-zinc-400 before:opacity-80 before:content-['#'] hover:before:hidden dark:text-zinc-100 dark:before:text-zinc-500 hover:before:sm:inline-block lg:text-lg lg:font-semibold lg:before:-left-6 lg:before:text-lg"
                >
                  <HashScroll text={children[0].props.text} />
                </h6>
              );
          }
        },
      }}
    />
  );
}
