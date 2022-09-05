import { useState } from "react";
import {PagePath,Table, Table_Buttons} from "../../Components";

const Level_Details = () => {
    var [level_details,set_level_details]= new useState({
        cols:[
                {Header:'S.No',accessor:'sr'},
                {Header:'User ID',accessor:'user_id'},
                {Header:'Level',accessor:'level'},
                {Header:'Reg.Date',accessor:'reg_date'},
                {Header:'Activation Date',accessor:'activation_date'}, 
                {Header:'ID Type',accessor:'id_type'}, 
                {Header:'Package',accessor:'package'}, 
            ],
        rows:[
                {sr:'1',user_id:'726340',level:'9',reg_date:'23/06/2022',activation_date:'23/06/2022',id_type:'Inactive',package:'Inactive USD'},
                {sr:'2',user_id:'726340',level:'9',reg_date:'23/06/2022',activation_date:'23/06/2022',id_type:'Inactive',package:'Inactive USD'},
                {sr:'3',user_id:'726340',level:'9',reg_date:'23/06/2022',activation_date:'23/06/2022',id_type:'Inactive',package:'Inactive USD'},
                {sr:'4',user_id:'726340',level:'9',reg_date:'23/06/2022',activation_date:'23/06/2022',id_type:'Inactive',package:'Inactive USD'},
        ]});
    return ( 
        <div className="row justify-content-center">
            <div className="col-md-11 py-3">
                <PagePath data={{page_name:"Level Details",page_path:"Team Details / Level Details"}} />
                <div className="row my-4 align-items-end justify-content-center gy-4">
                    <div className="col-md-4 col-lg-3 col-8">
                        <p className="p-color p-0 m-0">Select Date</p>
                        <select className=" input bg-color ps-4">
                            <option>All Levels</option>
                            <option>Level 1</option>
                            <option>Level 2</option>
                            <option>Level 3</option>
                            <option>Level 4</option>
                            <option>Level 5</option>
                            <option>Level 6</option>
                            <option>Level 7</option>
                            <option>Level 8</option>
                        </select>
                    </div>
                    <div className="col-md-4 col-lg-3 col-8">
                        <p className="p-color p-0 m-0">Select Date</p>
                        <input type="date" prototype="Select Level" className="input bg-color ps-4" />
                    </div>
                    <button className="bg-primary col-md-2 col-6 col-lg-1 btn text-white">Search</button>
                </div>
                <Table
                    data={level_details.rows}
                    columns={level_details.cols}
                />
                
                <Table_Buttons data = {{first_value:'1', last_value:'10',current_value:'5'}} />
            </div>
        </div>
     );
}
 
export default Level_Details;