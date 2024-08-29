import { ClickCounter } from "@/ui/click-counter";
import { TabGroup } from "@/ui/tab-group";
import { getCategories, getCategory } from "@/data/category";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { categorySlug: string };
}) {
  const category = getCategory(params.categorySlug);
  const items = getCategories(params.categorySlug);

  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path={`/dynamic-routing/${category.slug}`}
          items={[
            {
              text: "전체",
            },
            ...items.map((x) => ({
              text: x.name,
              slug: x.slug,
            })),
          ]}
        />
        <div className="self-start">
          <ClickCounter />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
