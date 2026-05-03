import AllPhotoCard from "@/components/AllPhotoCard";
import Category from "@/components/Category";

const PhotosPage = async ({ searchParams }) => {
  const { category } =await searchParams;

  const res = await fetch("https://pixgen-lime.vercel.app/data.json");
  const datas = await res.json();

  const filteredDatas = category
    ? datas.filter(
        (data) =>
          data.category.toLowerCase() == category.toLowerCase()
      )
    : datas;

  return (
    <div>
      <h2 className="text-3xl flex justify-center-safe font-bold my-6">
        All Image Generations
      </h2>

      <Category />

      <div className="grid grid-cols-3 gap-6">
        {filteredDatas.map((data) => (
          <AllPhotoCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default PhotosPage;