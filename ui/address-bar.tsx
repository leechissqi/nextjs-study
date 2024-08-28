"use client";

import React, { Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function Params() {
  const searchParams = useSearchParams()!;

  return searchParams.toString().length !== 0 ? (
    <div className="px-2 text-gray-500">
      <span>?</span>
      {Array.from(searchParams.entries()).map(([key, value], index) => {
        return (
          <React.Fragment key={key}>
            {index !== 0 ? <span>&</span> : null}
            <span className="px-1">
              <span
                key={key}
                className="animate-[highlight_1s_ease-in-out_1] text-gray-800"
              >
                {key}
              </span>
              <span>=</span>
              <span
                key={value}
                className="animate-[highlight_1s_ease-in-out_1] text-gray-800"
              >
                {value}
              </span>
            </span>
          </React.Fragment>
        )
      })}
    </div>
  ): null;
}

export function AddressBar() {
  const pathname = usePathname();

  return (
    <div className="flex item-center gap-x-2 p-3.5 lg:px-5 lg:py-3">
      <div className="text-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
          />
        </svg>
      </div>
      <div className="flex text-sm font-medium gap-x-1">
        <div>
          <span className="px-2 text-gray-400">reactnext-central.xyz</span>
        </div>
        {pathname ? (
          <>
            {pathname
              .split("/")
              .slice(1)
              .map((segment) => {
                return (
                  <React.Fragment key={segment}>
                      <span className="text-gray-600">/</span>
                    <span>
                      <span
                        key={segment}
                        className="animate-[highlight_1s_ease-in-out_1] rounded-full px-1.5 py-0.5 text-gray-800"
                      >
                        {segment}
                      </span>
                      </span>
                  </React.Fragment>
                )
              })}
          </>
        ) : null}

        <Suspense>
          <Params />
        </Suspense>
      </div>
    </div>
  );
}