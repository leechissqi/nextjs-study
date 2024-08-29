import React from "react";
import { Metadata } from "next";

import { TabNavItem } from "@/ui/tab-nav-item";

export const metadata: Metadata = {
  title: "레벨업 Next.js: 라우팅",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-9">
      <div>
        <TabNavItem href="/">Back</TabNavItem>
      </div>
      <div>{children}</div>
    </div>
  );
}
