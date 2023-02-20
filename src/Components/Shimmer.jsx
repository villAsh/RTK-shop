import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export default function Shimmer(){
    return(
    <div >
        <div>
             <Skeleton width={250} height={300} />
        </div>
        <div>
            <h4><Skeleton width={250} /></h4>
            <h5><Skeleton width={150} /></h5>
        </div>
        <div>
            <button><Skeleton width={100}/></button>
        </div>
    </div>
    );
}