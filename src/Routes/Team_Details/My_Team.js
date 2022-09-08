
import { useState, useEffect } from "react";
import { PagePath, Table, Table_Buttons } from "../../Components";
import { API } from '../../Redux/actions/API'
import moment from "moment";

const My_Team = () => {

    const [referralApi, setreferralApi] = useState([])
    const [referralApi_right, setreferralApiRight] = useState([])

    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)
    const [currentPage2, setcurrentPage2] = useState(1)
    const [listPerpage2, setlistPerpage2] = useState(10)



    const referral_API = async () => {
        try {

            const user = localStorage?.getItem("user");

            let ress = JSON.parse(user);
            let uId = ress?.uid;
            // let user_id = localStorage.getItem('user_Id')

            let responce = await API?.post(`downlineDetails`, {
                id: uId,
                position: 1,
                SearchTerm: "",
                status: 2
            })
            let dataaa = responce?.data.data;
            console.log("responce", dataaa);

            let arr = []
            dataaa.forEach((item, index) => {
                console.log("item", item);


                arr?.push({
                    sr: index + 1,
                    package: item?.package,
                    remark: item?.status,
                    amount: item?.income,
                    id: item?.user_id,
                    date_time: item?.edate,
                    pkg:`${item.packagename}`,

                    activation_date: item?.top_update

                });



            }
            )
            console.log("responce", arr);

            setreferralApi(arr)

        } catch (e) {
            console.log("Error While calling Referrer API", e);
        }
    }

    const referral_API_Right = async () => {
        try {

            const user = localStorage?.getItem("user");

            let ress = JSON.parse(user);
            let uId = ress?.uid;
            // let user_id = localStorage.getItem('user_Id')

            let responce = await API?.post(`downlineDetails`, {
                id: uId,
                position: 2,
                SearchTerm: "",

                status: 2
            })
            let dataaa = responce?.data.data;
            console.log("responce", dataaa);

            let arr = []
            dataaa.forEach((item, index) => {
                console.log("item", item);


                arr?.push({
                    sr: index + 1,
                    package: item?.package,
                    remark: item?.status,
                    amount: item?.income,
                    id: item?.user_id,
                    date_time: item?.edate,
                    pkg:`${item.packagename}`,
                    activation_date: item?.top_update

                });



            }
            )
            console.log("responce", arr);

            setreferralApiRight(arr)

        } catch (e) {
            console.log("Error While calling Referrer API", e);
        }
    }



    useEffect(() => {
        referral_API()
        referral_API_Right()
    }, [])

    const indexOfLastPost = currentPage * listPerpage;
    const indexOfFirstPage = indexOfLastPost - listPerpage;
    const indexOfLastPost2 = currentPage2 * listPerpage2;
    const indexOfFirstPage2 = indexOfLastPost2 - listPerpage2;
    const currentPost = referralApi.slice(indexOfFirstPage, indexOfLastPost)
    const currentPostRight = referralApi_right.slice(indexOfFirstPage2, indexOfLastPost2)


    var [My_Team, set_My_Team] = new useState({
        cols: [
            { Header: 'S.No', accessor: 'sr' },
            { Header: 'ID', accessor: 'id' },
            { Header: 'Package', accessor:'pkg'},
            // { Header: 'Wallet', accessor: 'wallet' },
            { Header: 'Reg Date and Time', accessor: 'date_time' },
            { Header: 'Remark', accessor: 'remark' },
            { Header: 'Activation Date Time', accessor: 'activation_date' },
            // { Header: 'Staking', accessor: 'staking' },
        ],
        rows: [
            { sr: '1', id: '625029', Wallet: 'TNS5EsYNsnnnDQsGGkzaFmZWHfGtseLYTJzaFmZWHfGt', date_time: '6/20/2022 9:36:01 AM', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', staking: '200.00' },
            { sr: '2', id: '625029', Wallet: 'TNS5EsYNsnnnDQsGGkzaFmZWHfGtseLYTJzaFmZWHfGt', date_time: '6/20/2022 9:36:01 AM', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', staking: '200.00' },
            { sr: '3', id: '625029', Wallet: 'TNS5EsYNsnnnDQsGGkzaFmZWHfGtseLYTJzaFmZWHfGt', date_time: '6/20/2022 9:36:01 AM', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', staking: '200.00' },
            { sr: '4', id: '625029', Wallet: 'TNS5EsYNsnnnDQsGGkzaFmZWHfGtseLYTJzaFmZWHfGt', date_time: '6/20/2022 9:36:01 AM', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', staking: '200.00' },
        ]
    });





    return (
        <>
        <div className="" style={{padding:"5px 30px 5px 30px"}}>
        <div className="row justify-content-center">
            <PagePath data={{ page_name: "My Team", page_path: "Team Details / My Team" }} />
            {/* <div className="row my-4 align-items-end justify-content-center gy-4">
                <div className="col-md-4 col-lg-3 col-8">
                    <p className="p-color p-0 m-0">Select Date</p>
                    <input type="date" prototype="Select Level" className="input bg-color ps-4" />
                </div>
                <div className="col-md-4 col-lg-3 col-8">
                    <p className="p-color p-0 m-0">Select Date</p>
                    <input type="date" prototype="Select Level" className="input bg-color ps-4" />
                </div>
                <button className="bg-primary col-md-2 col-6 col-lg-1 btn text-white">Search</button>
            </div> */}
            <div className="col-md-6 py-3 text-center">


                <Table
                    data={[...currentPost]}
                    columns={My_Team.cols}
                />

                <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost} setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} />
            </div>
            <div className="col-md-6 py-3 text-center">


                <Table
                    data={[...currentPostRight]}
                    columns={My_Team.cols}
                />

                <Table_Buttons indexOfFirstPage={indexOfFirstPage2} indexOfLastPost={indexOfLastPost2} setcurrentPage={setcurrentPage2} currentPage={currentPage2} totalData={referralApi_right.length} listPerpage={listPerpage2} />
            </div>
        </div>
        </div>
        
        </>
    );
}

export default My_Team;

