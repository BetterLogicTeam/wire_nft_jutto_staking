import { useState, useEffect } from "react";
import { PagePath, Table, Table_Buttons } from "../../Components";
import { API } from '../../Redux/actions/API'
import moment from "moment";

const Registration_Direct_Income = () => {

    const [referralApi, setreferralApi] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)




    const referral_API = async () => {
        try {

            const user = localStorage?.getItem("user");

            let ress = JSON.parse(user);
            let uId = ress?.uid;
            // let user_id = localStorage.getItem('user_Id')

            let responce = await API?.get(`registrationDirectIncome?id=${uId}`)
            let dataaa = responce?.data.data;
            console.log("responce", dataaa);

            let arr = []
            dataaa.forEach((item, index) => {
               


                arr?.push({
                    sr: index + 1,
                    amount: item?.income,
                    from_id: item?.uid,

                    date: moment(item?.dd).format("M/D/YYYY h:m:s A")
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




    var [referral_income, set_referral_income] = new useState({
        cols: [
            { Header: 'S.No', accessor: 'sr' },
            { Header: 'User ID', accessor: 'from_id' },
            // {Header:'Package',accessor:'package'},
            // {Header:'Token',accessor:'token'},
            { Header: 'Amount(USD)', accessor: 'amount' },
            { Header: 'Date', accessor: 'date' }],
        rows: [
            { sr: '1', from_id: '667179', package: '	300 USD', token: '7578.49198027245', amount: '30', date: '18/06/2022' },
            { sr: '2', from_id: '667179', package: '	300 USD', token: '66.12658792362', amount: '30', date: '12/04/2022' },
            { sr: '3', from_id: '667179', package: '	300 USD', token: '42.28270118748', amount: '30', date: '09/04/2022' },
            { sr: '4', from_id: '667179', package: '	300 USD', token: '42.28270118748', amount: '30', date: '09/04/2022' },
            { sr: '5', from_id: '667179', package: '	300 USD', token: '42.28270118748', amount: '30', date: '09/04/2022' },
        ]
    });
    return (
        <div className="row justify-content-center">
            <div className="col-md-11 py-3">
                <PagePath data={{ page_name: "Registration Direct Income", page_path: "All Income / Registration Direct Income" }} />
                <Table
                    data={[...currentPost]}
                    columns={referral_income.cols}
                />
                                <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost} setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} />

            </div>
        </div>
    );
}

export default Registration_Direct_Income;