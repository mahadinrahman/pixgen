import {HeartFill} from '@gravity-ui/icons';

const PhotoCard = ({data}) => {
    return (
        <div>
           <div className='shadow-lg p-11 rounded-xl'>
            <img src={data.imageUrl} alt={data.title} width={300} height={300} className='rounded-xl'/>
            <h3>{data.title}</h3>
            <HeartFill className='w-6 h-6 text-red-500'></HeartFill>
            </div> 
        </div>
    );
};

export default PhotoCard;