import { useState } from "react";
import {PagePath,Table, Table_Buttons} from "../../Components";

const Referral_Income = () => {
    var [referral_income,set_referral_income]= new useState({
        cols:[
                {Header:'S.No',accessor:'sr'},
                {Header:'From ID',accessor:'from_id'},
                {Header:'Package',accessor:'package'},
                {Header:'Token',accessor:'token'},
                {Header:'Amount(USD)',accessor:'amount'},
                {Header:'Date',accessor:'date'}],
        rows:[
                {sr:'1',from_id:'667179',package:'	300 USD',token:'7578.49198027245',amount:'30',date:'18/06/2022'},
                {sr:'2',from_id:'667179',package:'	300 USD',token:'66.12658792362',amount:'30',date:'12/04/2022'},
                {sr:'3',from_id:'667179',package:'	300 USD',token:'42.28270118748',amount:'30',date:'09/04/2022'},
                {sr:'4',from_id:'667179',package:'	300 USD',token:'42.28270118748',amount:'30',date:'09/04/2022'},
                {sr:'5',from_id:'667179',package:'	300 USD',token:'42.28270118748',amount:'30',date:'09/04/2022'},
        ]});
    return ( 
        <div className="row justify-content-center">
            <div className="col-md-11 py-3">
                <PagePath data={{page_name:"Referral Income",page_path:"All Income / Referral Income"}} />
                <Table
                    data={referral_income.rows}
                    columns={referral_income.cols}
                />
                <Table_Buttons data = {{first_value:'1', last_value:'10',current_value:'5'}} />
            </div>
        </div>
     );
}
 
export default Referral_Income;