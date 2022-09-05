import { useState ,useEffect} from "react";
import {PagePath,Table, Table_Buttons} from "../../Components";
import { API } from '../../Redux/actions/API'
import moment from "moment";

const Activation_Direct_Income = () => {

    const [referralApi, setreferralApi] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)
    
  

    const referral_API = async () => {
        try {

            // const user = localStorage?.getItem("user");
            
            // let ress = JSON.parse(user);
            // let uId = ress?.uid;

            let responce = await API?.get(`activationDirectIncome?id=${778899}`)
           let dataaa = responce?.data.data;
           console.log("responce",dataaa);

            let arr = []
            dataaa.forEach((item, index) => {
           console.log("item",item);


                arr?.push({
                    sr: index + 1,
                    package: item?.package,
                    token: item?.totaltoken,

                    amount: item?.income,
                    from_id: item?.uid,
                    date:moment(item?.edate).format("M/D/YYYY h:m:s A")
                });



            }
            )
            console.log("responce", arr);

            setreferralApi(arr)

        } catch (e) {
            console.log("Error While calling Referrer API", e);
        }
    }

    useEffect(() => {
        referral_API()
    }, [])

    const indexOfLastPost=currentPage*listPerpage;
    const indexOfFirstPage=indexOfLastPost-listPerpage;
    const currentPost=referralApi.slice(indexOfFirstPage,indexOfLastPost)




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
                    data={[...currentPost]}
                    columns={referral_income.cols}
                />
                <Table_Buttons data = {{first_value:'1', last_value:'10',current_value:'5'}} />
            </div>
        </div>
     );
}
 
export default Activation_Direct_Income ;


