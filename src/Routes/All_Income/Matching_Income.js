import { useState, useEffect } from "react";

import { PagePath, Table, Table_Buttons } from "../../Components";
import { API } from '../../Redux/actions/API'
import moment from "moment";
const Matching_Income = () => {

    const [referralApi, setreferralApi] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)

    const referral_API = async () => {
        try {


            let user = localStorage.getItem('user')
            let ress = JSON?.parse(user);
            let uId = ress?.uid;
          

            let responce = await API?.get(`/binaryIncome?id=${uId}`)
            responce = responce?.data?.data;

            console.log("responce", responce);
            let arr = []
            responce?.forEach((item, index) => {

                arr?.push({
                    sr: index + 1,
                    uid:item.uid,

                    // capping_amount: `${item?.capingamount} `,
                    matching_business: `${item?.paidpv} `,
                    // date:moment(item?.edate).format("M/D/YYYY h:m:s A")
                    date: item?.binarydate,
                    net_income: item?.netincome,


                });



            }
            )
            


            setreferralApi(arr)

            console.log('what data from roi', referralApi)



        } catch (e) {
            console.log("Error While calling Referrer API", e);
        }
    }


    useEffect(() => {
        referral_API()
    }, [])

    const indexOfLastPost = currentPage * listPerpage;
    const indexOfFirstPage = indexOfLastPost - listPerpage;
    const currentPost = referralApi.slice(indexOfFirstPage, indexOfLastPost)





    var [matching_income, set_matching_income] = new useState({
        cols: [
            { Header: 'S.No', accessor: 'sr' },
            { Header: 'User id', accessor: 'uid' },

            { Header: 'Matching Business', accessor: 'matching_business' },
            // { Header: 'Capping Amount', accessor: 'capping_amount' },
            { Header: 'Net Income', accessor: 'net_income' },
            { Header: 'Date', accessor: 'date' }],
        rows: [
            { sr: '1', matching_business: '300 Wire', capping_amount: '24.0000000000086 Wire', net_income: '0.0000 Wire', date: '5/24/2022 3:22:19 PM' },
            { sr: '2', matching_business: '200 Wire', capping_amount: '24.0000000000086 Wire', net_income: '0.0000 Wire', date: '5/24/2022 3:22:19 PM' },
            { sr: '3', matching_business: '200 Wire', capping_amount: '24.0000000000086 Wire', net_income: '0.0000 Wire', date: '5/24/2022 3:22:19 PM' },
            { sr: '4', matching_business: '100 Wire', capping_amount: '24.0000000000086 Wire', net_income: '0.0000 Wire', date: '5/24/2022 3:22:19 PM' },
            { sr: '5', matching_business: '100 Wire', capping_amount: '24.0000000000086 Wire', net_income: '0.0000 Wire', date: '5/24/2022 3:22:19 PM' },
            { sr: '6', matching_business: '100 Wire', capping_amount: '24.0000000000086 Wire', net_income: '0.0000 Wire', date: '5/24/2022 3:22:19 PM' },
        ]
    });
    return (
        <div className="row justify-content-center">
            <div className="col-md-11 py-3">
                <PagePath data={{ page_name: "Activation Matching Income", page_path: "All Income /Activation Matching Income" }} />
                <Table
                    data={[...currentPost]}
                    columns={matching_income.cols}
                />
            <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost} setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} />

            </div>
        </div>
    );
}


export default Matching_Income;