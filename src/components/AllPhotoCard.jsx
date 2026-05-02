import { HeartFill } from '@gravity-ui/icons';
import { ArrowDownToLine } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import Image from 'next/image';

const AllPhotoCard = ({ data }) => {
    return (
        <div>
            <div className='shadow-lg py-9 px-5 rounded-xl '>
                <div className='relative w-full aspect-square'>
            <Image src={data.imageUrl} alt={data.title} fill   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className='rounded-xl  flex justify-center'/>
            <p className='bg-white px-2 rounded-full absolute right-3 top-3'>{data.category}</p>
            </div>

            <h3 className='pt-3 font-medium pb-1'>{data.title}</h3>
             

             <div className='flex gap-2'>
            <div className='flex items-center mt-2 border-r-2 pr-4'>
                <HeartFill className='w-6 h-6 text-red-500'></HeartFill>
                <p className='ml-2'>{data.likes}</p>
            </div>
            <div className='flex items-center mt-2'>
                <ArrowDownToLine className='w-6 h-6 text-blue-500'></ArrowDownToLine>
                <p className='ml-2'>{data.downloads}</p>
            </div>
            </div>
               
                <Button variant="outline" className="w-full mt-3">Details</Button>
            </div> 
        </div>
    );
};

export default AllPhotoCard;