import { useState } from "react";
import {PagePath,Table, Table_Buttons} from "../../Components";

const Buy_NFT = () => {
    var [buy_nft,set_buy_nft]= new useState({
        cols:[
                {Header:'#',accessor:'sr'},
                {Header:'User Id',accessor:'user_id'},
                {Header:'Package Amount',accessor:'package_amount'},
                {Header:'Remark',accessor:'remark'},
                {Header:'TXN',accessor:'txn'},
                {Header:'Date',accessor:'date'}],
        rows:[
                {sr:'1',user_id:'12345',package_amount:'000 USD',remark:'Active',txn:'View txn',date:'20/07/2022'},
                {sr:'2',user_id:'12345',package_amount:'000 USD',remark:'Active',txn:'View txn',date:'20/07/2022'},
                {sr:'3',user_id:'12345',package_amount:'000 USD',remark:'Active',txn:'View txn',date:'20/07/2022'},
        ]});
    return ( 
        <div className="row justify-content-center">
            <div className="col-md-11 py-3">
                <PagePath data={{page_name:"Buy NFT",page_path:"History / Buy NFT"}} />
                <Table
                    data={buy_nft.rows}
                    columns={buy_nft.cols}
                />
            </div>
        </div>
     );
}
 
export default Buy_NFT;