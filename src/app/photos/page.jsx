import AllPhotoCard from "@/components/AllPhotoCard";


const PhotosPage = async () => {
     const res=await fetch('https://pixgen-lime.vercel.app/data.json');
    const datas=await res.json();
    
    return (
        <div>
              <h2 className="text-3xl flex justify-center-safe font-bold my-6">All Image Generations</h2>
            <div className="grid grid-cols-3 gap-6">
                {
                    datas.map(data=><AllPhotoCard key={data.id} data={data}></AllPhotoCard>)
                }
            </div>
        </div>
    );
};

export default PhotosPage;