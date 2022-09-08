import React from 'react';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import './Navbar.css'
import { BsArrowRightShort } from 'react-icons/bs';
import { BiHomeCircle, BiLineChart, BiBook, BiMessageSquareEdit } from 'react-icons/bi';
import { TbAtom } from 'react-icons/tb';
import { MdOutlineGroup } from 'react-icons/md';
import { FaLock } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { Activate_History, Buy_NFT, Coin_Address, Direct_Leg_Business, Home, Level_Details, Matching_Income, Matching_Level_Income, Matching_Tree, My_Referral, My_Team, NFT_Address, Profile, Referral_Income, Reward_Income, Roi_Income, Self_Address, Staking_Details, Withdrawal, Withdrawal_History } from '../../Routes';
import Pool_income from '../../Routes/All_Income/Pool_income';
import Matics_tree from '../../Routes/Team_Details/Matics_tree';
import { Activate } from '../../Routes/Activation/Activation';
import Matics_Downline from '../../Routes/Team_Details/Matics_Downline';
const Navbar = () => {
    const navigate = useNavigate()
    const onClickHide = ()=>{
        let expand_list = document.querySelectorAll('.expand-nav');
        for (let y = 0; y < 5; y++) {
            expand_list[y].classList.forEach((class_item) => {
                if (class_item == 'd-flex') {
                    expand_list[y].classList.remove('d-flex');
                    expand_list[y].classList.add('d-none');
                }
            })
        }
    }
    const onClickHideSM = ()=>{
        let nav_panel = document.querySelector('.nav-panel')
        nav_panel.classList.remove('d-flex');
        nav_panel.classList.add('d-none');
        let expand_list = document.querySelectorAll('.expand-nav-sm');
        for (let y = 0; y < 5; y++) {
            expand_list[y].classList.forEach((class_item) => {
                if (class_item == 'd-flex') {
                    expand_list[y].classList.remove('d-flex');
                    expand_list[y].classList.add('d-none');
                }
            })
        }
    }
    React.useEffect(() => {
        let nav_btn_expand = document.querySelectorAll('.nav-btn-expand');
        let nav_btn = document.querySelector('.nav-btn');
        let nav_panel = document.querySelector('.nav-panel')
        let expand_list = document.querySelectorAll('.expand-nav');
        let expand_list_sm = document.querySelectorAll('.expand-nav-sm');
        nav_btn.addEventListener('click', () => {
            console.log('NAv Clicked');
            if (nav_panel.classList.contains('d-none')) {
                nav_panel.classList.remove('d-none');
                nav_panel.classList.add('d-flex');
            }
            else {
                nav_panel.classList.remove('d-flex');
                nav_panel.classList.add('d-none');
            }
        })
        for (let x = 0; x < 5; x++) {
            nav_btn_expand[x].addEventListener('click', () => {
                console.log('clicked');
                for (let y = 0; y < 5; y++) {
                    if (x != y) {
                        expand_list[y].classList.forEach((class_item) => {
                            if (class_item == 'd-flex') {
                                expand_list[y].classList.remove('d-flex');
                                expand_list[y].classList.add('d-none');
                            }
                        })
                    }
                }
                let d_flex = false;
                expand_list[x].classList.forEach((class_item) => {
                    if (class_item == 'd-flex') {
                        d_flex = true;
                    }
                })
                if (d_flex == true) {
                    expand_list[x].classList.remove('d-flex');
                    expand_list[x].classList.add('d-none');
                }
                else {
                    expand_list[x].classList.remove('d-none');
                    expand_list[x].classList.add('d-flex');
                }
            })
        }
        for (let x = 5; x < 10; x++) {
            nav_btn_expand[x].addEventListener('click', () => {
                console.log('clicked');
                for (let y = 0; y < 5; y++) {
                    if ((x - 5) != y) {
                        expand_list_sm[y].classList.forEach((class_item) => {
                            if (class_item == 'd-flex') {
                                expand_list_sm[y].classList.remove('d-flex');
                                expand_list_sm[y].classList.add('d-none');
                            }
                        })
                    }
                }
                let d_flex = false;
                expand_list_sm[(x - 5)].classList.forEach((class_item) => {
                    if (class_item == 'd-flex') {
                        d_flex = true;
                    }
                })
                if (d_flex == true) {
                    expand_list_sm[(x - 5)].classList.remove('d-flex');
                    expand_list_sm[(x - 5)].classList.add('d-none');
                }
                else {
                    expand_list_sm[(x - 5)].classList.remove('d-none');
                    expand_list_sm[(x - 5)].classList.add('d-flex');
                }
            })
        }
    }, [])
    const reload = () => {
        window.location.reload()
    }
    return (
        <div className='row justify-content-center'>
            <div className='col-md-11'>
                <nav class="navbar navbar-expand-lg navbar-light row d-flex flex-column">
                    <div className='row justify-content-between brand-bar m-0 p-0'>
                        <img src='/favicon.png' className='navbar-brand col-lg-1 col-md-2 col-5' />
                        <button class="navbar-toggler nav-btn col-md-1 col-2 me-3" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse row px-5 py-1" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <Link onClick={()=>{onClickHide()}} to={'/Dashboard/Home'} className="text-decoration-none text-white"><BiHomeCircle className="me-1 mb-1 " /> Dashboard</Link>
                            </li>
                            <li>
                                <div>
                                    <button className='btn1 nav-btn-expand '><TbAtom className="me-1 mb-1 " /> Activation</button>
                                    <div className='expand-nav  d-none flex-column'>
                                    <Link onClick={()=>{onClickHide()}} to="/Dashboard/Activate"><BsArrowRightShort />  Activation</Link>

                                        <Link onClick={()=>{onClickHide()}} to="/Dashboard/Activate_History"><BsArrowRightShort /> Activate History</Link>
                                        {/* <Link onClick={()=>{onClickHide()}} to="/Dashboard/Staking_Details"><BsArrowRightShort /> Staking Details</Link>
                                        <Link onClick={()=>{onClickHide()}} to="/Dashboard/Profile"><BsArrowRightShort /> Profile</Link> */}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <button className='btn1 nav-btn-expand '> <BiLineChart className="me-1 mb-1 " /> All Income</button>
                                    <div className='expand-nav  d-none flex-column'>
                                        {/* <Link to="/Dashboard/Referral_Income"><BsArrowRightShort /> Referral Income</Link> */}
                                        <Link onClick={()=>{onClickHide()}} to="/Dashboard/Registration_Direct_Income"><BsArrowRightShort /> Registration Direct Income</Link>
                                        <Link onClick={()=>{onClickHide()}} to="/Dashboard/Registration_Roi_Income"><BsArrowRightShort /> Registration Roi Income</Link>
                                        <Link onClick={()=>{onClickHide()}} to="/Dashboard/Roi_Income"><BsArrowRightShort />Activation Roi Income</Link>
                                        <Link onClick={()=>{onClickHide()}} to="/Dashboard/Activation_Direct_Income"><BsArrowRightShort /> Activation Direct Income</Link>

                                        <Link onClick={()=>{onClickHide()}} to="/Dashboard/Matching_Income"><BsArrowRightShort /> Activation Matching Income</Link>
                                        <Link onClick={()=>{onClickHide()}} to="/Dashboard/Pool_income"><BsArrowRightShort /> Poll Income</Link>

                                        {/* <Link to="/Dashboard/Reward_Income"><BsArrowRightShort /> Reward Income</Link> */}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <button className='btn1 nav-btn-expand '><BiBook className="me-1 mb-1 " /> History</button>
                                    <div className='expand-nav  d-none flex-column'>
                                        {/* <Link onClick={()=>{onClickHide()}} to="/Dashboard/Buy_NFT"><BsArrowRightShort /> Buy NFT</Link> */}
                                        <Link onClick={()=>{onClickHide()}} to="/Dashboard/Withdrawal"><BsArrowRightShort /> Withdrawal</Link>
                                        <Link onClick={()=>{onClickHide()}} to="/Dashboard/Withdrawal_History"><BsArrowRightShort /> Withdrawal History</Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <button className='btn1 nav-btn-expand '><MdOutlineGroup className="me-1 mb-1 " /> Team Details</button>
                                    <div className='expand-nav  d-none flex-column'>
                                        <Link onClick={()=>{onClickHide()}} to="/Dashboard/My_Referral"><BsArrowRightShort /> My Referal</Link>
                                        <Link onClick={()=>{onClickHide()}} to="/Dashboard/My_Team"><BsArrowRightShort /> My Team</Link>
                                        <Link onClick={()=>{onClickHide()}} to="/Dashboard/Matching_Tree"><BsArrowRightShort /> Matching Tree</Link>
                                        <Link onClick={()=>{onClickHide()}} to="/Dashboard/Matics_tree"><BsArrowRightShort /> Matrix Tree</Link>
                                        <Link onClick={()=>{onClickHide()}} to="/Dashboard/Matics_Downline"><BsArrowRightShort />Matrix Downline</Link>


                                        {/* <Link onClick={()=>{onClickHide()}} to="/Dashboard/Level_Details"><BsArrowRightShort /> Level Details</Link>  */}
                                        <Link onClick={()=>{onClickHide()}} to="/Dashboard/Direct_Leg_Business"><BsArrowRightShort /> Direct Leg Business</Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <button className='btn1 nav-btn-expand'><BiMessageSquareEdit className="me-1 mb-1 " /> Address</button>
                                    <div className='expand-nav  d-none flex-column'>
                                        <Link onClick={()=>{onClickHide()}} to="/Dashboard/Self_Address"><BsArrowRightShort /> Self Address</Link>
                                        <Link onClick={()=>{onClickHide()}} to="/Dashboard/Coin_Address"><BsArrowRightShort /> Contract Address</Link>
                                        {/* <Link onClick={()=>{onClickHide()}} to="/Dashboard/NFT_Address"><BsArrowRightShort /> NFT Address</Link> */}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className='btn1 ' onClick={() => (navigate('/Login_main'), reload())}><FaLock className="me-1 mb-1 " /> Logout</button>
                            </li>
                        </ul>
                    </div>
                    <div className='nav-panel d-none bg-black col-10'>
                        <ul class="row p-0 justify-content-center list-unstyled">
                            <li class="col-xl-10 col-12 border_bottom">
                                <Link onClick={()=>{onClickHideSM()}} to={'/Dashboard/Home'} className="fs-6 py-2 text-decoration-none text-white"><BiHomeCircle className="me-1 mb-1" /> Dashboard</Link>
                            </li>
                            <li class="col-xl-10 col-12 border_bottom">
                                <div>
                                    <button className='btn1 nav-btn-expand col-12 text-start fs-6 py-2'><TbAtom className="me-1 mb-1" /> Activation</button>
                                    <div className='expand-nav-sm  d-none flex-column'>
                                    <Link onClick={()=>{onClickHideSM()}} to="/Dashboard/Activate"><BsArrowRightShort />Activation</Link>

                                        <Link onClick={()=>{onClickHideSM()}} to="/Dashboard/Activate_History"><BsArrowRightShort /> Activate History</Link>
                                        {/* <Link onClick={()=>{onClickHideSM()}} to="/Dashboard/Staking_Details"><BsArrowRightShort /> Staking Details</Link>
                                        <Link onClick={()=>{onClickHideSM()}} to="/Dashboard/Profile"><BsArrowRightShort /> Profile</Link> */}
                                    </div>
                                </div>
                            </li>
                            <li class="col-xl-10 col-12 border_bottom">
                                <div>
                                    <button className='btn1 nav-btn-expand col-12 text-start fs-6 py-2'> <BiLineChart className="me-1 mb-1" /> All Income</button>
                                    <div className='expand-nav-sm  d-none flex-column'>
                                    <Link onClick={()=>{onClickHide()}} to="/Dashboard/Registration_Direct_Income"><BsArrowRightShort /> Registration Direct Income</Link>
                                        <Link onClick={()=>{onClickHide()}} to="/Dashboard/Activation_Direct_Income"><BsArrowRightShort /> Activation Direct Income</Link>

                                        {/* <Link onClick={()=>{onClickHideSM()}} to="/Dashboard/Referral_Income"><BsArrowRightShort /> Referral Income</Link> */}
                                        <Link onClick={()=>{onClickHideSM()}} to="/Dashboard/Matching_Income"><BsArrowRightShort /> Activation Matching Income</Link>
                                        <Link onClick={()=>{onClickHideSM()}} to="/Dashboard/Roi_Income"><BsArrowRightShort />Activation Roi Income</Link>
                                        <Link onClick={()=>{onClickHideSM()}} to="/Dashboard/Registration_Roi_Income"><BsArrowRightShort /> Registration Roi Income</Link>
                                        <Link onClick={()=>{onClickHideSM()}} to="/Dashboard/Pool_income"><BsArrowRightShort />Pool Income</Link>

                                        {/* <Link onClick={()=>{onClickHideSM()}} to="/Dashboard/Reward_Income"><BsArrowRightShort /> Reward Income</Link> */}
                                    </div>
                                </div>
                            </li>
                            <li class="col-xl-10 col-12 border_bottom">
                                <div>
                                    <button className='btn1 nav-btn-expand col-12 text-start fs-6 py-2'><BiBook className="me-1 mb-1" /> History</button>
                                    <div className='expand-nav-sm  d-none flex-column'>
                                        {/* <Link onClick={()=>{onClickHideSM()}} to="/Dashboard/Buy_NFT"><BsArrowRightShort /> Buy NFT</Link> */}
                                        <Link onClick={()=>{onClickHideSM()}} to="/Dashboard/Withdrawal"><BsArrowRightShort /> Withdrawal</Link>
                                        <Link onClick={()=>{onClickHideSM()}} to="/Dashboard/Withdrawal_History"><BsArrowRightShort /> Withdrawal History</Link>
                                    </div>
                                </div>
                            </li>
                            <li class="col-xl-10 col-12 border_bottom">
                                <div>
                                    <button className='btn1 nav-btn-expand col-12 text-start fs-6 py-2'><MdOutlineGroup className="me-1 mb-1" /> Team Details</button>
                                    <div className='expand-nav-sm  d-none flex-column'>
                                        <Link onClick={()=>{onClickHideSM()}} to="/Dashboard/My_Referal"><BsArrowRightShort /> My Referal</Link>
                                        <Link onClick={()=>{onClickHideSM()}} to="/Dashboard/Matching_Income"><BsArrowRightShort /> My Team</Link>
                                        <Link onClick={()=>{onClickHideSM()}} to="/Dashboard/Matching_Tree"><BsArrowRightShort /> Matching Tree</Link>
                                        <Link onClick={()=>{onClickHideSM()}} to="/Dashboard/Matics_tree"><BsArrowRightShort /> Matrix Tree</Link>
                                        <Link onClick={()=>{onClickHideSM()}} to="/Dashboard/Matics_Downline"><BsArrowRightShort /> Matrix Downline</Link>


                                        {/* <Link onClick={()=>{onClickHideSM()}} to="/Dashboard/Level_Details"><BsArrowRightShort /> Level Details</Link> */}
                                        <Link onClick={()=>{onClickHideSM()}} to="/Dashboard/Direct_Leg_Business"><BsArrowRightShort /> Direct Leg Business</Link>
                                    </div>
                                </div>
                            </li>
                            <li class="col-xl-10 col-12 border_bottom">
                                <div>
                                    <button className='btn1 nav-btn-expand col-12 text-start fs-6 py-2'><BiMessageSquareEdit className="me-1 mb-1" /> Address</button>
                                    <div className='expand-nav-sm  d-none flex-column'>
                                        <Link onClick={()=>{onClickHideSM()}} to="/Dashboard/Self_Address"><BsArrowRightShort /> Self Address</Link>
                                        <Link onClick={()=>{onClickHideSM()}} to="/Dashboard/Coin_Address"><BsArrowRightShort /> Contract Address</Link>
                                        {/* <Link onClick={()=>{onClickHideSM()}} to="/Dashboard/NFT_Address"><BsArrowRightShort /> NFT Address</Link> */}
                                    </div>
                                </div>
                            </li>
                            <li class="col-xl-10 col-12 border_bottom">
                                <button className='btn1 col-12 text-start fs-6 py-2' onClick={() => {
                                    navigate('/')
                                }}><FaLock className="me-1 mb-1" /> Logout</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <Routes>

                <Route path='/' element={<Home />} />
            <Route path='/dashboard/Activate' element={<Activate />} />          

                <Route path='/dashboard/Activate_History' element={<Activate_History />} />
                <Route path='/dashboard/Staking_Details' element={<Staking_Details />} />
                <Route path='/dashboard/Profile' element={<Profile />} />
                <Route path='/dashboard/Referral_Income' element={<Referral_Income />} />
                <Route path='/dashboard/Matching_Income' element={<Matching_Income />} />
                <Route path='/dashboard/Reward_Income' element={<Reward_Income />} />
                <Route path='/dashboard/Roi_Income' element={<Roi_Income />} />
                <Route path='/dashboard/Registration_Roi_Income' element={<Matching_Level_Income />} />
                <Route path='/dashboard/Buy_NFT' element={<Buy_NFT />} />
            <Route path='/dashboard/Pool_income' element={<Pool_income />} />
            <Route path='/dashboard/Matics_Downline' element={<Matics_Downline />} />


                <Route path='/dashboard/Withdrawal_History' element={<Withdrawal_History />} />
                <Route path='/dashboard/Withdrawal' element={<Withdrawal />} />
                <Route path='/dashboard/Direct_Leg_Business' element={<Direct_Leg_Business />} />
                <Route path='/dashboard/Level_Details' element={<Level_Details />} />
                <Route path='/dashboard/Matching_Tree' element={<Matching_Tree />} />
            <Route path='/dashboard/Matics_tree' element={<Matics_tree />} />

                <Route path='/dashboard/My_Referral' element={<My_Referral />} />
                <Route path='/dashboard/My_Team' element={<My_Team />} />
                <Route path='/dashboard/Coin_Address' element={<Coin_Address />} />
                <Route path='/dashboard/NFT_Address' element={<NFT_Address />} />
                <Route path='/dashboard/Self_Address' element={<Self_Address />} />
                {/* <Route path='/dashboard/Change_Password' element={<Change_Password />} /> */}
                {/* <Route path='/dashboard/Mint' element={<Mint />} /> */}
                {/* <Route path='/dashboard/Forgat_Password' element={<Forgat_Password />} />
                <Route path='/dashboard/ChangePasswor_eamil' element={<ChangePasswor_eamil />} />
                <Route path='/dashboard/Varify_email_change_password' element={<Varify_email_change_password />} />
                <Route path='/dashboard/Update_profile_email' element={<Update_profile_email />} /> */}






            </Routes>
            <Outlet />
        </div>
    );
}

export default Navbar;