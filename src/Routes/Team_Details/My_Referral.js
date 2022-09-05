import { useState, useEffect } from "react";
import { PagePath, Table, Table_Buttons } from "../../Components";
import { API } from '../../Redux/actions/API'
import moment from "moment";

const My_Referral = () => {

    const [referralApi, setreferralApi] = useState([])
    const [referralApi_right, setreferralApiRight] = useState([])

    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)



    const referral_API = async () => {
        try {

            // const user = localStorage?.getItem("user");

            // let ress = JSON.parse(user);
            // let uId = ress?.uid;

            let responce = await API?.post(`directDetails`, {
                id: 778899,
                position: 1,
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


                    amount: item?.income,
                    user_id: item?.uid,
                    date: item?.edate,
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

            // const user = localStorage?.getItem("user");

            // let ress = JSON.parse(user);
            // let uId = ress?.uid;

            let responce = await API?.post(`directDetails`, {
                id: 778899,
                position: 2,
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


                    amount: item?.income,
                    user_id: item?.uid,
                    date: item?.edate,
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
    const currentPost = referralApi.slice(indexOfFirstPage, indexOfLastPost)
    const currentPostRight = referralApi_right.slice(indexOfFirstPage, indexOfLastPost)


    var [my_referral, set_my_referral] = new useState({
        cols: [
            { Header: 'S.No', accessor: 'sr' },
            { Header: 'User ID', accessor: 'user_id' },
            { Header: 'Packgae', accessor: 'package' },
            { Header: 'RegistrationDate', accessor: 'date' },
            { Header: 'Remark', accessor: 'remark' },
            { Header: 'Activation Date Time', accessor: 'activation_date' },
            // { Header: 'Total Active Team', accessor: 'total_active_team' },
        ],
        rows: [
            { sr: '1', user_id: '625029', package: '7', date: '100 USD', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', total_active_team: '0' },
            { sr: '2', user_id: '625029', package: '7', date: '100 USD', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', total_active_team: '0' },
            { sr: '3', user_id: '625029', package: '7', date: '100 USD', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', total_active_team: '0' },
            { sr: '4', user_id: '625029', package: '7', date: '100 USD', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', total_active_team: '0' },
            { sr: '5', user_id: '625029', package: '7', date: '100 USD', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', total_active_team: '0' },
            { sr: '6', user_id: '625029', package: '7', date: '100 USD', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', total_active_team: '0' },
            { sr: '7', user_id: '625029', package: '7', date: '100 USD', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', total_active_team: '0' },
            { sr: '8', user_id: '625029', package: '7', date: '100 USD', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', total_active_team: '0' },
            { sr: '9', user_id: '625029', package: '7', date: '100 USD', remark: 'Active', activation_date: '12/11/2021 1:40:08 PM', total_active_team: '0' },
        ]
    });


    return (
        <div className="row justify-content-center">
            <PagePath data={{ page_name: "My Referral", page_path: "Team Details / My Referral" }} />
            <div className="row my-4 align-items-end justify-content-center gy-4">
                <div className="col-md-4 col-lg-3 col-8">
                    <p className="p-color p-0 m-0">Select Date</p>
                    <input type="date" prototype="Select Level" className="input bg-color ps-4" />
                </div>
                <div className="col-md-4 col-lg-3 col-8">
                    <p className="p-color p-0 m-0">Select Date</p>
                    <input type="date" prototype="Select Level" className="input bg-color ps-4" />
                </div>
                <button className="bg-primary col-md-2 col-6 col-lg-1 btn text-white">Search</button>
            </div>
            <div className="col-md-6 py-3 text-center">


                <Table
                    data={[...currentPost]}
                    columns={my_referral.cols}
                />

                <Table_Buttons data={{ first_value: '1', last_value: '10', current_value: '5' }} />
            </div>
            <div className="col-md-6 py-3 text-center">


                <Table
                    data={[...currentPostRight]}
                    columns={my_referral.cols}
                />

                <Table_Buttons data={{ first_value: '1', last_value: '10', current_value: '5' }} />
            </div>
        </div>
    );
}

export default My_Referral;