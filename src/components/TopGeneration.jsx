import PhotoCard from "./PhotoCard";

const TopGeneration = async() => {
    const res=await fetch('https://pixgen-lime.vercel.app/data.json');
    const photos=await res.json();
   const datas=photos.slice(0,9);

    return (
        <div>
            <div className="grid grid-cols-3 gap-6">
                {
                    datas.map(data=><PhotoCard key={data.id} data={data}></PhotoCard>)
                }
            </div>
        </div>
    );
};

export default TopGeneration;