import { useState, useEffect } from "react";
import { API } from '../../Redux/actions/API'
import { PagePath, Table, Table_Buttons } from "../../Components";

const Withdrawal_History = () => {

    const [referralApi, setreferralApi] = useState([])
    const [referralApi_right, setreferralApiRight] = useState([])

    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)



    const referral_API = async () => {
        try {

            const user = localStorage?.getItem("user");

            let ress = JSON.parse(user);
            let uId = ress?.uid;
         


            let responce = await API?.get(`withdrawalHistory?id=${uId}`)
            let dataaa = responce?.data.data;
            console.log("responce", dataaa);


            let arr = []
            dataaa.forEach((item, index) => {
               
                arr?.push({
                    sr: index + 1,
                    withdrawal_token: item?.withdrawal_token,
                    txn: item?.txn,
                    user_id: item?.uid,
                    paid_date: item?.paid_date,
                  

                });



            }
            )
         

            setreferralApi(arr)

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





    var [withdrawal_history, set_withdrawal_history] = new useState({
        cols: [
            { Header: 'S.No', accessor: 'sr' },
            { Header: 'Withdrawal Token', accessor: 'withdrawal_token' },
            { Header: 'TXN', accessor: 'txn' },
            { Header: 'Paid Date', accessor: 'paid_date' }],
        rows: [
            { sr: '1', withdrawal_token: '500', txn: 'View Txn', paid_date: '18/06/2022' },
            { sr: '1', withdrawal_token: '500', txn: 'View Txn', paid_date: '18/06/2022' },
            { sr: '1', withdrawal_token: '500', txn: 'View Txn', paid_date: '18/06/2022' },
        ]
    });
    return (
        <div className="row justify-content-center">
            <div className="col-md-11 py-3">
                <PagePath data={{ page_name: "Withdrawal History", page_path: "History / Withdrawal History" }} />
                <Table
                    data={referralApi}
                    columns={withdrawal_history.cols}
                />
                                    <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost} setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} />

            </div>
        </div>
    );
}

export default Withdrawal_History;