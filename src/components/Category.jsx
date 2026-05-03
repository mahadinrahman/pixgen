import { Button } from "@heroui/react";
import Link from "next/link";

const Category = async () => {
  const res = await fetch("https://pixgen-lime.vercel.app/category.json");
  const categories = await res.json();

  return (
    <div>
      <div className="mt-7 max-w-9/12 mx-auto space-x-5">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`?category=${category.slug}`}
          >
            <Button variant="outline">
              {category.name}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;