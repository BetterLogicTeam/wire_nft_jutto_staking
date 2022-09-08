import React, { useState, useEffect } from "react";
import { PagePath } from "../../Components";
import { API } from '../../Redux/actions/API'
import './tree.css'
import default_image from '../../assets/tree/default.png'
import active_user from '../../assets/tree/user3green.jpg'
import inactive_user from '../../assets/tree/user3red.png'
import tree_image_small from '../../assets/tree/treeimg.png'
import tree_image_medium from '../../assets/tree/treeimg1.png'
import tree_image_large from '../../assets/tree/treeimg2.png'
import {Spinner} from '../../Components'


var bol = true;


const Matrics_tree = () => {
    const user = localStorage?.getItem("user");

    let ress = JSON.parse(user);
    let uId = ress?.uid;
    // const [userdata, setuserdata] = new useState([])
    const [Idnumer, setIdnumer] = useState(uId)
    const [arrValue, setArrValue] = useState([])
  const [loader,setloader] = useState(false)
    const [PackgaeValue,setPackageValue] = useState(1);


    const [userdata, setuserdata] = new useState(
        [
            {
                name: 'User',
                id: '364734',
                registration_date: '31 Dec 2020',
                status: 'Active',
                total_left: '0',
                total_left_active: '0',
                left_business: '0',
                package_amount: '2500',
                topup_date: '31 Dec 2020',
                package: '',
                total_right: '0',
                total_right_active: '0',
                right_business: '0'
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: ''
            },
            {
                name: '',
                id: '',
                registration_date: '',
                status: '',
                total_left: '',
                total_left_active: '',
                left_business: '',
                package_amount: '',
                topup_date: '',
                package: '',
                total_right: '',
                total_right_active: '',
                right_business: ''
            },
        ]
    )
    const referral_API = async () => {
    setloader(true)
        try {

            // let ress = JSON?.parse(user);
            // let uId = ress?.uid;
            // let status = ress?.status

        

            let responce = await API?.post('/matrix_tree',
                {
                    "uid": Idnumer,
                    "usersession_uid": "1",
                    "package":PackgaeValue
                }
            )
            responce = responce?.data?.data?.recordset;


            console.log("Res_API", responce);
            let arr = []
            responce?.forEach((item, index) => {

                arr?.push({
                    name: item.fname,
                    id: item.uid,
                    registration_date: item?.activationdate,
                    status: item.activationdate ? 'Active' : 'UnActive',
                    total_left: item.totalleft,
                    total_left_active: item.totalleftActive,
                    left_business: item.lbv,
                    package_amount: item.packageamount,
                    topup_date: item.activationdate,
                    package: item.package,
                    total_right: item.totalright,
                    total_right_active: item.totalrightActive,
                    right_business: item.rbv,
                    sponser: item.sid
                    // date: item?.dd
                });

            }
            )

            setuserdata(arr)
            if (bol) {
                setArrValue([...arrValue, arr[0].id])
                bol = false;
            }

        } catch (e) {
            // console.log("Error While calling Referrer API", e);
        }
    setloader(false)
    }
    function addValue(value) {

        if (arrValue.indexOf(value) === -1) {
            setArrValue([...arrValue, value])
        }


        // setArrValue([...arrValue,value])
        // arrValue.push(value)
        // arrValue.push(value)
    }
    console.log('what is arrValue', arrValue)
    var a;
    function popoutvalue() {
        if (arrValue.length == 1 || arrValue.length == 0) {
            arrValue.pop()
            arrValue.unshift(userdata[0].id)
        }
        else {
            a = arrValue.splice(arrValue.length - 2, 1);
            setIdnumer(a[0]);
            console.log('what is popout value', a[0])
        }

    }


    console.log('what is state data', userdata[0]?.id)
    console.log('what is id number', Idnumer)

    useEffect(() => {
        referral_API()
    }, [Idnumer])
    // React.useEffect(() => {
    //     return (() => {
    //         let team_info_div = document.querySelector('.team-info');
    //         let team_info_div_data = document.querySelectorAll('.team-info p')
    //         let user_img = document.querySelectorAll('.user-img');
    //         for (let x = 0; x < 15; x++) {
    //             user_img[x].addEventListener('mouseover', () => {
    //                 team_info_div_data[0].innerHTML += userdata[x].registration_date;
    //                 team_info_div_data[1].innerHTML += userdata[x].status;
    //                 team_info_div_data[2].innerHTML += userdata[x].total_left;
    //                 team_info_div_data[3].innerHTML += userdata[x].total_left_active;
    //                 team_info_div_data[4].innerHTML += userdata[x].left_business;
    //                 team_info_div_data[5].innerHTML += userdata[x].package_amount;
    //                 team_info_div_data[6].innerHTML += userdata[x].topup_date;
    //                 team_info_div_data[7].innerHTML += userdata[x].package;
    //                 team_info_div_data[8].innerHTML += userdata[x].total_right;
    //                 team_info_div_data[9].innerHTML += userdata[x].total_right_active;
    //                 team_info_div_data[10].innerHTML += userdata[x].right_business;

    //                 team_info_div.classList.remove('d-none');
    //                 team_info_div.setAttribute('style', `top:${user_img[x].getBoundingClientRect().top + 50}px; left:${user_img[x].getBoundingClientRect().left + 50};`);
    //             })
    //             user_img[x].addEventListener('mouseout', () => {
    //                 team_info_div_data[0].innerHTML = 'Registration Date :';
    //                 team_info_div_data[1].innerHTML = 'Status :';
    //                 team_info_div_data[2].innerHTML = 'Total Left :';
    //                 team_info_div_data[3].innerHTML = 'Total Left Active :';
    //                 team_info_div_data[4].innerHTML = 'Left Business :';
    //                 team_info_div_data[5].innerHTML = 'Packgae Amount :';
    //                 team_info_div_data[6].innerHTML = 'Topup Date: ';
    //                 team_info_div_data[7].innerHTML = 'Packgae : ';
    //                 team_info_div_data[8].innerHTML = 'Total Right : ';
    //                 team_info_div_data[9].innerHTML = 'Total Right Active : ';
    //                 team_info_div_data[10].innerHTML = 'Right Business : ';
    //                 team_info_div.classList.add('d-none');
    //             })
    //         }
    //     })
    // }, [])

    return (
        <div className="row justify-content-center">
            { loader == true ? <Spinner /> : <></>}
            <div className="col-md-11 py-3">
                <PagePath data={{ page_name: "Matrix Tree", page_path: "Team Details / Matrix Tree" }} />
                <div className="col-12 row justify-content-center py-5">
                    <div className="col-md-6 col-10 gy-2 py-2 col-lg-4 row profile-border justify-content-center align-items-center profile-login">
                        {/* <input type="text" className="p-2 my-2 mx-3 profile-border col-10 col-md-10 col-lg-4 " value={Idnumer} /> */}
                        <select className="p-2 my-2 mx-3 profile-border col-10 col-md-10 col-lg-7" onChange={(e)=>{
                            setPackageValue(e.target.value)
                            console.log('PAckageValue',PackgaeValue)
                        }}>
                            <option value={1}>Pool 1</option>
                            <option value={2}>Pool 2</option>
                            <option value={3}>Pool 3</option>
                            <option value={4}>Pool 4</option>
                            <option value={5}>Pool 5</option>
                            <option value={6}>Pool 6</option>
                            <option value={7}>Pool 7</option>
                            <option value={8}>Pool 8</option>
                            <option value={9}>Pool 9</option>
                            <option value={10}>Pool 10</option>
                            <option value={11}>Pool 11</option>
                            <option value={12}>Pool 12</option>
                            <option value={13}>Pool 13</option>
                            <option value={14}>Pool 14</option>
                            <option value={15}>Pool 15</option>
                        </select>
                        <button className="btn btn-success col-7 col-md-4 col-lg-3 col-xl-2" onClick={()=>{
                            referral_API()
                        }}>Submit</button>
                        {/* <button className="ms-md-3 btn btn-danger col-7 col-md-6 col-lg-3 col-xl-2" onClick={popoutvalue}>Go Back</button> */}
                    </div>
                    <div className="page-wrapper">
                        <div className="page-content">




                            {/* <div className="row ">
                        <div className="col-md-12">
                            <div className="search-box">
                                <form action="#" className="form-horizontal ng-pristine ng-valid" method="post" role="form">
                                    <div className="form-wrapper">
                                        <input className="form-control srch_frm" id="ddluserid" name="userId" type="text" value="" />
                                        <span className="field-validation-valid" data-valmsg-for="userId" data-valmsg-replace="true"></span>
                                        <input type="submit" value="SUBMIT" id="Search" className="btn btn-sm btn-danger topmargin submit_btn" />
                                        <button onclick="goBack()" type="button" className="btn btn-sm btn-danger topmargin float_rt">GO BACK</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> */}

                            <div className="row bg-theme bg-theme4">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div id="tree" className="treeview" style={{ margin: "40px auto" }}>
                                            <div className="treemember">
                                                <div className="dropdown">
                                                    <button className="dropbtn">

                                                        <img

                                                            src={userdata[0].package >= 1 ? active_user : userdata[0].package == 0 || null ? inactive_user : default_image}
                                                            onClick={() => (setIdnumer(userdata[0].id), addValue(userdata[0].id))}

                                                            className="abc" style={{ margin: "0 80px", cursor: "pointer", border: "2px solid Green" }} width="50" height="50" onclick="Image_Click(364734)" />
                                                    </button>

                                                    <div className="span" style={{ color: "#fff" }}>
                                                        {userdata[0]?.name}  <br />

                                                        {userdata[0]?.id}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="connecter1">
                                                <img src={tree_image_small} style={{ width: "480px", height: "33px" }} />
                                            </div>

                                            <div className="tree_row">
                                                <div className="row_2_child">
                                                    <div className="dropdown">
                                                        <button className="dropbtn">
                                                            <img src={userdata[1].package >= 1 ? active_user : userdata[1].package == 0 ? inactive_user : default_image}
                                                                onClick={() => (setIdnumer(userdata[1].id), addValue(userdata[1].id))} className="abc" style={{ margin: "0 25px", cursor: "pointer" }} width="50" height="50" onclick="Image_Click()" />
                                                        </button>
                                                        <div className="span" style={{ color: "#fff" }}>
                                                            {userdata[1]?.name}  <br />

                                                            {userdata[1]?.id}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row_2_child">
                                                    <div className="dropdown">
                                                        <button className="dropbtn">

                                                            <img src={userdata[2].package >= 1 ? active_user : userdata[2].package == 0 ? inactive_user : default_image}
                                                                onClick={() => (setIdnumer(userdata[2].id), addValue(userdata[2].id))} className="abc" style={{ margin: "0 25px", cursor: "pointer" }} width="50" height="50" onclick="Image_Click()" />
                                                        </button>
                                                        <div className="span" style={{ color: "#fff" }}>
                                                            {userdata[2]?.name}  <br />

                                                            {userdata[2]?.id}
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tree_row" style={{ height: "34px" }}>
                                                <div className="row_2_child" style={{ height: "34px" }}>
                                                    <img src={tree_image_medium} style={{ width: "253px", height: "32px" }} />
                                                </div>
                                                <div className="row_2_child" style={{ height: "34px" }}>
                                                    <img src={tree_image_medium} style={{ width: "253px", height: "32px" }} />
                                                </div>
                                            </div>

                                            <div className="tree_row">
                                                <div className="row_3_child">
                                                    {/* <div className="span" style={{ color: "#fff" }}>
                                                        {userdata[3]?.name}  <br />

                                                        {userdata[3]?.id}
                                                    </div> */}
                                                    <div className="dropdown">
                                                        <button className="dropbtn">

                                                            <img src={userdata[3].package >= 1 ? active_user : userdata[3].package == 0 ? inactive_user : default_image}
                                                                onClick={() => (setIdnumer(userdata[3].id), addValue(userdata[3].id))} className="abc" width="50" height="50" onclick="Image_Click()" />
                                                        </button>
                                                        <div className="span" style={{ color: "#fff" }}>
                                                            {userdata[3]?.name}  <br />

                                                            {userdata[3]?.id}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row_3_child">
                                                    <div className="dropdown">
                                                        <button className="dropbtn">

                                                            <img src={userdata[4].package >= 1 ? active_user : userdata[4].package == 0 ? inactive_user : default_image}
                                                                onClick={() => (setIdnumer(userdata[4].id), addValue(userdata[4].id))} className="abc" width="50" height="50" onclick="Image_Click()" />
                                                        </button>
                                                        <div className="span" style={{ color: "#fff" }}>
                                                            {userdata[4]?.name}  <br />

                                                            {userdata[4]?.id}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row_3_child">
                                                    <div className="dropdown">
                                                        <button className="dropbtn">

                                                            <img src={userdata[5].package >= 1 ? active_user : userdata[5].package == 0 ? inactive_user : default_image}
                                                                onClick={() => (setIdnumer(userdata[5].id), addValue(userdata[5].id))} className="abc" width="50" height="50" onclick="Image_Click()" />
                                                        </button>

                                                        <div className="span" style={{ color: "#fff" }}>
                                                            {userdata[5]?.name}  <br />

                                                            {userdata[5]?.id}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row_3_child">
                                                    <div className="dropdown">
                                                        <button className="dropbtn">

                                                            <img src={userdata[6].package >= 1 ? active_user : userdata[6].package == 0 ? inactive_user : default_image}
                                                                onClick={() => (setIdnumer(userdata[6].id), addValue(userdata[6].id))} className="abc" width="50" height="50" onclick="Image_Click()" />
                                                        </button>
                                                        <div className="span" style={{ color: "#fff" }}>
                                                            {userdata[6]?.name}  <br />

                                                            {userdata[6]?.id}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <div className="tree_row" style={{ height: "27px" }}>
                                                <div className="row_3_child" style={{ height: "27px" }}>
                                                    <img src={tree_image_large} style={{ width: "129px", height: "27px" }} />
                                                </div>
                                                <div className="row_3_child" style={{ height: "27px" }}>
                                                    <img src={tree_image_large} style={{ width: "129px", height: "27px" }} />
                                                </div>
                                                <div className="row_3_child" style={{ height: "27px" }}>
                                                    <img src={tree_image_large} style={{ width: "129px", height: "27px" }} />
                                                </div>
                                                <div className="row_3_child" style={{ height: "27px" }}>
                                                    <img src={tree_image_large} style={{ width: "129px", height: "27px" }} />
                                                </div>
                                            </div>
                                            <div className="tree_row">
                                                <div className="row_4_child" >
                                                    <div className="dropdown">
                                                        <button className="dropbtn">

                                                            <img src={userdata[7].package >= 1 ? active_user : userdata[7].package == 0 ? inactive_user : default_image}
                                                                onClick={() => (setIdnumer(userdata[7].id), addValue(userdata[7].id))} className="abc" width="50" height="50" onclick="Image_Click()" />
                                                        </button>
                                                        <div className="span" style={{ color: "#fff" }}>
                                                            {userdata[7]?.name}  <br />

                                                            {userdata[7]?.id}
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="row_4_child" >
                                                    <div className="dropdown">
                                                        <button className="dropbtn">

                                                            <img src={userdata[8].package >= 1 ? active_user : userdata[8].package == 0 ? inactive_user : default_image}
                                                                onClick={() => (setIdnumer(userdata[8].id), addValue(userdata[8].id))} className="abc" width="50" height="50" onclick="Image_Click()" />
                                                        </button>
                                                        <div className="span" style={{ color: "#fff" }}>
                                                            {userdata[8]?.name}  <br />

                                                            {userdata[8]?.id}
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="row_4_child" >
                                                    <div className="dropdown">
                                                        <button className="dropbtn">

                                                            <img src={userdata[9].package >= 1 ? active_user : userdata[9].package == 0 ? inactive_user : default_image}
                                                                onClick={() => (setIdnumer(userdata[9].id), addValue(userdata[9].id))} className="abc" width="50" height="50" onclick="Image_Click()" />
                                                        </button>
                                                        <div className="span" style={{ color: "#fff" }}>
                                                            {userdata[9]?.name}  <br />

                                                            {userdata[9]?.id}
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="row_4_child" >
                                                    <div className="dropdown">
                                                        <button className="dropbtn">

                                                            <img src={userdata[10].package >= 1 ? active_user : userdata[10].package == 0 ? inactive_user : default_image}
                                                                onClick={() => (setIdnumer(userdata[10].id), addValue(userdata[10].id))} className="abc" width="50" height="50" onclick="Image_Click()" />
                                                        </button>
                                                        <div className="span" style={{ color: "#fff" }}>
                                                            {userdata[10]?.name}  <br />

                                                            {userdata[10]?.id}
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="row_4_child" >
                                                    <div className="dropdown">
                                                        <button className="dropbtn">

                                                            <img src={userdata[11].package >= 1 ? active_user : userdata[11].package == 0 ? inactive_user : default_image}
                                                                onClick={() => (setIdnumer(userdata[11].id), addValue(userdata[11].id))} className="abc" width="50" height="50" onclick="Image_Click()" />
                                                        </button>
                                                        <div className="span" style={{ color: "#fff" }}>
                                                            {userdata[11]?.name}  <br />

                                                            {userdata[11]?.id}
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="row_4_child" >
                                                    <div className="dropdown">
                                                        <button className="dropbtn">

                                                            <img src={userdata[12].package >= 1 ? active_user : userdata[12].package == 0 ? inactive_user : default_image}
                                                                onClick={() => (setIdnumer(userdata[12].id), addValue(userdata[12].id))} className="abc" width="50" height="50" onclick="Image_Click()" />
                                                        </button>
                                                        <div className="span" style={{ color: "#fff" }}>
                                                            {userdata[12]?.name}  <br />

                                                            {userdata[12]?.id}
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="row_4_child" >
                                                    <div className="dropdown">
                                                        <button className="dropbtn">

                                                            <img src={userdata[13].package >= 1 ? active_user : userdata[13].package == 0 ? inactive_user : default_image}
                                                                onClick={() => (setIdnumer(userdata[13].id), addValue(userdata[13].id))} className="abc" width="50" height="50" onclick="Image_Click()" />
                                                        </button>
                                                        <div className="span" style={{ color: "#fff" }}>
                                                            {userdata[13]?.name}  <br />

                                                            {userdata[13]?.id}
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="row_4_child" >
                                                    <div className="dropdown">
                                                        <button className="dropbtn">

                                                            <img src={userdata[14].package >= 1 ? active_user : userdata[14].package == 0 ? inactive_user : default_image}
                                                                onClick={() => (setIdnumer(userdata[14].id), addValue(userdata[14].id))} className="abc" width="50" height="50" onclick="Image_Click()" />
                                                        </button>
                                                        <div className="span" style={{ color: "#fff" }}>
                                                            {userdata[14]?.name}  <br />

                                                            {userdata[14]?.id}
                                                        </div>
                                                    </div>

                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="tree container align-items-center d-flex mt-5 flex-column text-white text-center">
                        <img src="Assets/Images/user3red.png" className="user-img" />                        
                        <p className="m-0 p-0">{userdata[0].name}</p>
                        <p className="m-0 p-0">{userdata[0].id}</p>
                        <img src="Assets/Images/treeimg.png" className="treeimg" />
                        <div className="d-flex flex-row justify-content-between">
                            <div className="align-items-center d-flex flex-column">
                                <img src="Assets/Images/user3red.png" className="user-img" />
                                <p className="m-0 p-0">{userdata[2].name}</p>
                                <p className="m-0 p-0">{userdata[2].id}</p>
                                <img src="Assets/Images/treeimg1.png" className="treeimg1" />
                            </div>
                            <div style={{width:'170px'}} className="gap-img-1">
                            </div>
                            <div className="align-items-center d-flex flex-column">
                                <img src="Assets/Images/user3red.png" className="user-img" />                                
                                <p className="m-0 p-0">{userdata[2].name}</p>
                                <p className="m-0 p-0">{userdata[2].id}</p>
                                <img src="Assets/Images/treeimg1.png" className="treeimg1" />
                            </div>
                        </div>
                        
                        
                        <div className="d-flex flex-row justify-content-between">
                            <div className="align-items-center d-flex flex-column">
                                <img src="Assets/Images/default.png" className="user-img" />                                
                                <p className="m-0 p-0">{userdata[3].name}</p>
                                <p className="m-0 p-0">{userdata[3].id}</p>
                                <img src="Assets/Images/treeimg2.png" className="treeimg2" />
                            </div>
                            <div style={{width:'70px'}}  className="gap-img-2">
                            </div>
                            <div className="align-items-center d-flex flex-column">
                                <img src="Assets/Images/default.png" className="user-img" />
                                <p className="m-0 p-0">{userdata[4].name}</p>
                                <p className="m-0 p-0">{userdata[4].id}</p>
                                <img src="Assets/Images/treeimg2.png" className="treeimg2" />
                            </div>
                            <div style={{width:'70px'}}  className="gap-img-2">
                            </div>
                            <div className="align-items-center d-flex flex-column">
                                <img src="Assets/Images/default.png" className="user-img" />
                                <p className="m-0 p-0">{userdata[5].name}</p>
                                <p className="m-0 p-0">{userdata[5].id}</p>
                                <img src="Assets/Images/treeimg2.png" className="treeimg2" />
                            </div>
                            <div style={{width:'70px'}}className="gap-img-2" >
                            </div>
                            <div className="align-items-center d-flex flex-column">
                                <img src="Assets/Images/default.png" className="user-img" />
                                <p className="m-0 p-0">{userdata[6].name}</p>
                                <p className="m-0 p-0">{userdata[6].id}</p>
                                <img src="Assets/Images/treeimg2.png" className="treeimg2" />
                            </div>
                        </div>

                        <div className="d-flex flex-row justify-content-between">
                            <div className="d-flex flex-column justify-content-center align-items">                                
                                <img src="Assets/Images/default.png" className="user-img" />
                                <p className="m-0 p-0">{userdata[7].name}</p>
                                <p className="m-0 p-0">{userdata[7].id}</p>
                            </div>  
                            <div style={{width:'50px'}} className="gap-img-3" ></div>
                            <div className="d-flex flex-column justify-content-center align-items">                                
                                <img src="Assets/Images/default.png" className="user-img" />
                                <p className="m-0 p-0">{userdata[8].name}</p>
                                <p className="m-0 p-0">{userdata[8].id}</p>
                            </div>  
                            <div style={{width:'50px'}} className="gap-img-3" ></div>
                            <div className="d-flex flex-column justify-content-center align-items">                                
                                <img src="Assets/Images/default.png" className="user-img" />
                                <p className="m-0 p-0">{userdata[9].name}</p>
                                <p className="m-0 p-0">{userdata[9].id}</p>
                            </div>  
                            <div style={{width:'50px'}} className="gap-img-3" ></div>
                            <div className="d-flex flex-column justify-content-center align-items">                                
                                <img src="Assets/Images/default.png" className="user-img" />
                                <p className="m-0 p-0">{userdata[10].name}</p>
                                <p className="m-0 p-0">{userdata[10].id}</p>
                            </div>  
                            <div style={{width:'50px'}} className="gap-img-3" ></div>
                            <div className="d-flex flex-column justify-content-center align-items">                                
                                <img src="Assets/Images/default.png" className="user-img" />
                                <p className="m-0 p-0">{userdata[11].name}</p>
                                <p className="m-0 p-0">{userdata[11].id}</p>
                            </div>  
                            <div style={{width:'50px'}} className="gap-img-3" ></div>
                            <div className="d-flex flex-column justify-content-center align-items">                                
                                <img src="Assets/Images/default.png" className="user-img" />
                                <p className="m-0 p-0">{userdata[12].name}</p>
                                <p className="m-0 p-0">{userdata[12].id}</p>
                            </div>  
                            <div style={{width:'50px'}} className="gap-img-3" ></div>
                            <div className="d-flex flex-column justify-content-center align-items">                                
                                <img src="Assets/Images/default.png" className="user-img" />
                                <p className="m-0 p-0">{userdata[13].name}</p>
                                <p className="m-0 p-0">{userdata[13].id}</p>
                            </div>  
                            <div style={{width:'50px'}} className="gap-img-3" ></div>
                            <div className="d-flex flex-column justify-content-center align-items">                                
                                <img src="Assets/Images/default.png" className="user-img" />
                                <p className="m-0 p-0">{userdata[14].name}</p>
                                <p className="m-0 p-0">{userdata[14].id}</p>
                            </div>  
                        </div>
                    </div>
                    <div className="team-info d-none position-absolute text-white col-10 col-lg-6 col-md-7 col-xl-4 col-xxl-3 px-2 py-3 br-1">
                        <h6 className="border_bottom m-0">Sposer:</h6>
                        <div className="d-flex flex-row justify-content-between align-items-start">
                            <div className="d-flex flex-column pt-2 align-items-start justify-content-start"  style={{width:'50%'}}>
                                <p className="bg-b m-0 p-1">Registration Date :</p>
                                <p className=" m-0 p-1">Status :</p>
                                <p className="bg-b m-0 p-1">Total Left :</p>
                                <p className=" m-0 p-1">Total Left Active :</p>
                                <p className="bg-b m-0 p-1">Left Business :</p>
                                <p className=" m-0 p-1">Packgae Amount :</p>
                            </div>
                            <div className="d-flex flex-column pt-2 align-items-start border_start justify-content-start"  style={{width:'50%'}}>
                                <p className="bg-b m-0 p-1">Topup Date: </p>
                                <p className=" m-0 p-1">Packgae : </p>
                                <p className="bg-b m-0 p-1">Total Right : </p>
                                <p className=" m-0 p-1">Total Right Active : </p>
                                <p className="bg-b m-0 p-1">Right Business : </p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Matrics_tree;