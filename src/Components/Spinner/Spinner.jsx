import { Dna } from 'react-loader-spinner';

const Spinner = () => {
    return ( 
        <div className='LoaderSpinner'>
               <Dna
                visible={true}
                height="180"
                width="180"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
                />
        </div>
     );
}
 
export default Spinner;