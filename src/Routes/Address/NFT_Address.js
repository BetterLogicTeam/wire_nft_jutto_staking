import {PagePath} from "../../Components";

const Coin_Address = () => {
    return ( 
        <div className="row justify-content-center" >
            <div className="col-md-11 py-3">
                <PagePath data={{page_name:"NFT Address",page_path:"Address / NFT Address"}} /> 
                <div className="mt-5 container">
                    <h5 className="text-white">  NFT Address: <a className="text-white" target="_blank" href="https://bscscan.com/address/0x024282724caa1495a8d1983b5a2bb48c169e1f6e#code">0x024282724caA1495a8D1983B5A2Bb48C169E1F6E</a>  </h5>
                </div>               
            </div>
        </div>
     );
}
 
export default Coin_Address;