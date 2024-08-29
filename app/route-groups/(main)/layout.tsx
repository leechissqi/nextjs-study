import React from "react";
import { TabGroup } from "@/ui/tab-group";
import { ClickCounter } from "@/ui/click-counter";
import { Boundary } from "@/ui/boundary";
import { getTopCategories } from "@/data/category";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = getTopCategories();

  return (
    <Boundary
      labels={["main layout"]}
      color="orange"
      animateRerendering={false}
    >
      <div className="space-y-8">
        <div className="flex justify-between">
          <TabGroup
            path="/route-groups"
            items={[
              { text: "Home" },
              ...categories.map((x) => ({
                text: x.name,
                slug: x.slug,
              })),
              { text: "장바구니", slug: "cart" },
              { text: "후기", slug: "review" },
            ]}
          />
          <div>
            <ClickCounter />
          </div>
        </div>
        <div>{children}</div>
      </div>
    </Boundary>
  );
}
