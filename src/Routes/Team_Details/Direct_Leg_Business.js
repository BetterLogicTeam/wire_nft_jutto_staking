import { useState, useEffect } from "react";
import { PagePath, Table, Table_Buttons } from "../../Components";
import { API } from '../../Redux/actions/API'


const Direct_Leg_Business = () => {


    const [referralApi, setreferralApi] = useState([])
    const [referralApi_right, setreferralApiRight] = useState([])

    const [currentPage, setcurrentPage] = useState(1)
    const [listPerpage, setlistPerpage] = useState(10)



    const referral_API = async () => {
        try {

            const user = localStorage?.getItem("user");

            let ress = JSON.parse(user);
            let uId = ress?.uid;
            // let user_id = localStorage.getItem('user_Id')

            let responce = await API?.get(`directLegBusiness?id=${uId}`)
            let dataaa = responce?.data.data;
            console.log("responce", dataaa);

            let arr = []
            dataaa.forEach((item, index) => {
                console.log("item", item);



                arr?.push({
                    sr: index + 1,
                    package: item?.package,


                    investment: item?.selfbv,
                    user_id: item?.uid,
                    date: item?.edate,
                    team_business: item?.teambv

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
    const indexOfLastPost = currentPage * listPerpage;
    const indexOfFirstPage = indexOfLastPost - listPerpage;
    const currentPost = referralApi.slice(indexOfFirstPage, indexOfLastPost)



    var [direct_leg_business, set_direct_leg_business] = new useState({
        cols: [
            { Header: 'S.No', accessor: 'sr' },
            { Header: 'User ID', accessor: 'user_id' },
            { Header: 'Investment', accessor: 'investment' },
            { Header: 'Team Business', accessor: 'team_business' },
        ],
        rows: [
            { sr: '1', user_id: '549414', investment: '25500.00', team_business: '1233' },
            { sr: '2', user_id: '549414', investment: '25500.00', team_business: '1233' },
            { sr: '3', user_id: '549414', investment: '25500.00', team_business: '1233' },
            { sr: '4', user_id: '549414', investment: '25500.00', team_business: '1233' },
        ]
    });
    return (
        <div className="row justify-content-center">
            <div className="col-md-11 py-3">
                <PagePath data={{ page_name: "Direct Leg Business", page_path: "Team Details / Direct Leg Business" }} />
                <Table
                    data={[...currentPost]}
                    columns={direct_leg_business.cols}
                />
                <Table_Buttons indexOfFirstPage={indexOfFirstPage} indexOfLastPost={indexOfLastPost} setcurrentPage={setcurrentPage} currentPage={currentPage} totalData={referralApi.length} listPerpage={listPerpage} />

            </div>
        </div>
    );
}

export default Direct_Leg_Business;