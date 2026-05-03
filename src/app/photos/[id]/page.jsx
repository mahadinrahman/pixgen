import { HeartFill } from '@gravity-ui/icons';
import { ArrowDownToLine } from '@gravity-ui/icons';

import Image from 'next/image';
import Link from 'next/link';

const DetailsPage = async({params}) => {
    const {id}=await params;

     const res=await fetch('https://pixgen-lime.vercel.app/data.json');
    const datas=await res.json();

    const details=datas.find(data=>data.id==id);

    return (
        <div>
             <div className='shadow-lg py-9 px-5 rounded-xl max-w-3/12 mx-auto mt-10'>
                <div className='relative'>
            <Image src={details.imageUrl} alt={details.title} width={350} height={250}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className='rounded-xl  flex justify-center '/>
            <p className='bg-white px-2 rounded-full absolute right-3 top-3'>{details.category}</p>
            </div>

            <h3 className='pt-3 font-medium pb-1'>{details.title}</h3>
            <h3 className='pt-3  pb-1'>{details.prompt}</h3>
            

             <div className='flex gap-2'>
            <div className='flex items-center mt-2 border-r-2 pr-4'>
                <HeartFill className='w-6 h-6 text-red-500'></HeartFill>
                <p className='ml-2'>{details.likes}</p>
            </div>
            <div className='flex items-center mt-2'>
                <ArrowDownToLine className='w-6 h-6 text-blue-500'></ArrowDownToLine>
                <p className='ml-2'>{details.downloads}</p>
            </div>
            </div>
               {
                details.tags.map((tag,index)=><Link href={`/photos/${tag}`} key={index} className='text-sm text-blue-500 mt-3 inline-block'>#{tag}</Link>)
               }
               
            </div> 
        </div>
    );
};

export default DetailsPage;