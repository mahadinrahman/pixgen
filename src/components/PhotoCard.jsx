import {HeartFill} from '@gravity-ui/icons';
import {ArrowDownToLine} from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import Link from 'next/link';

const PhotoCard = ({data}) => {
    return (
        <div>
           <div className='shadow-lg py-9 px-5 rounded-xl relative'>
            <img  src={data.imageUrl} alt={data.title} width={350} height={300} className='rounded-xl flex justify-center'/>
            <h3 className='pt-3 font-medium pb-1'>{data.title}</h3>
             <p className='bg-white px-2 rounded-full absolute right-11 top-11'>{data.category}</p>

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
               
                <Link href={`/photos/${data.id}`}><Button variant="outline" className="w-full mt-3">Details</Button></Link>
            </div> 
        </div>
    );
};

export default PhotoCard;