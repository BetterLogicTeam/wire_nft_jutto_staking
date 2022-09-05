import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'
import { BsArrowRightShort } from 'react-icons/bs';
import { BiHomeCircle, BiLineChart, BiBook, BiMessageSquareEdit } from 'react-icons/bi';
import { TbAtom } from 'react-icons/tb';
import { MdOutlineGroup } from 'react-icons/md';
import { FaLock } from 'react-icons/fa'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate()
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
    return (
        <div className='row justify-content-center'>
            <div className='col-md-11'>
                <nav class="navbar navbar-expand-lg navbar-light row d-flex flex-column">
                    <div className='row justify-content-between brand-bar'>
                        <img src='/favicon.png' className='navbar-brand col-lg-1 col-md-2 col-5' />
                        <button class="navbar-toggler nav-btn col-md-1 col-2 me-3" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse row px-5 py-1" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                            <Link to={'/Dashboard/Home'} className="text-decoration-none text-white"><BiHomeCircle className="me-1 mb-1 " /> Dashboard</Link> 
                            </li>
                            <li>
                                <div>
                                    <button className='btn1 nav-btn-expand '><TbAtom className="me-1 mb-1 " /> Activation</button>
                                    <div className='expand-nav  d-none flex-column'>
                                        <Link to="/Dashboard/Activate_History"><BsArrowRightShort /> Activate History</Link>
                                        <Link to="/Dashboard/Staking_Details"><BsArrowRightShort /> Staking Details</Link>
                                        <Link to="/Dashboard/Profile"><BsArrowRightShort /> Profile</Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <button className='btn1 nav-btn-expand '> <BiLineChart className="me-1 mb-1 " /> All Income</button>
                                    <div className='expand-nav  d-none flex-column'>
                                        {/* <Link to="/Dashboard/Referral_Income"><BsArrowRightShort /> Referral Income</Link> */}
                                        <Link to="/Dashboard/Registration_Direct_Income"><BsArrowRightShort /> Registration Direct Income</Link>
                                        <Link to="/Dashboard/Activation_Direct_Income"><BsArrowRightShort /> Activation Direct Income</Link>

                                        <Link to="/Dashboard/Matching_Income"><BsArrowRightShort /> Matching Income</Link>
                                        {/* <Link to="/Dashboard/Matching_Level_Income"><BsArrowRightShort /> Matching Level Income</Link> */}
                                        <Link to="/Dashboard/Roi_Income"><BsArrowRightShort /> Roi Income</Link>
                                        {/* <Link to="/Dashboard/Reward_Income"><BsArrowRightShort /> Reward Income</Link> */}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <button className='btn1 nav-btn-expand '><BiBook className="me-1 mb-1 " /> History</button>
                                    <div className='expand-nav  d-none flex-column'>
                                        <Link to="/Dashboard/Buy_NFT"><BsArrowRightShort /> Buy NFT</Link>
                                        <Link to="/Dashboard/Withdrawal"><BsArrowRightShort /> Withdrawal</Link>
                                        <Link to="/Dashboard/Withdrawal_History"><BsArrowRightShort /> Withdrawal History</Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <button className='btn1 nav-btn-expand '><MdOutlineGroup className="me-1 mb-1 " /> Team Details</button>
                                    <div className='expand-nav  d-none flex-column'>
                                        <Link to="/Dashboard/My_Referral"><BsArrowRightShort /> My Referal</Link>
                                        <Link to="/Dashboard/My_Team"><BsArrowRightShort /> My Team</Link>
                                        <Link to="/Dashboard/Matching_Tree"><BsArrowRightShort /> Matching Tree</Link>
                                        <Link to="/Dashboard/Level_Details"><BsArrowRightShort /> Level Details</Link>
                                        <Link to="/Dashboard/Direct_Leg_Business"><BsArrowRightShort /> Direct Leg Business</Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <button className='btn1 nav-btn-expand'><BiMessageSquareEdit className="me-1 mb-1 " /> Address</button>
                                    <div className='expand-nav  d-none flex-column'>
                                        <Link to="/Dashboard/Self_Address"><BsArrowRightShort /> Self Address</Link>
                                        <Link to="/Dashboard/Coin_Address"><BsArrowRightShort /> Coin Address</Link>
                                        <Link to="/Dashboard/NFT_Address"><BsArrowRightShort /> NFT Address</Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className='btn1 ' onClick={()=>{
                                    navigate('/')
                                }}><FaLock className="me-1 mb-1 " /> Logout</button>
                            </li>
                        </ul>
                    </div>
                    <div className='nav-panel d-none bg-black col-10'>
                        <ul class="row p-0 justify-content-center list-unstyled">
                            <li class="col-xl-10 col-12 border_bottom">
                                <Link to={'/Dashboard/Home'} className="fs-6 py-2 text-decoration-none text-white"><BiHomeCircle className="me-1 mb-1" /> Dashboard</Link>
                            </li>
                            <li class="col-xl-10 col-12 border_bottom">
                                <div>
                                    <button className='btn1 nav-btn-expand col-12 text-start fs-6 py-2'><TbAtom className="me-1 mb-1" /> Activation</button>
                                    <div className='expand-nav-sm  d-none flex-column'>
                                        <Link to="/Dashboard/Activate_History"><BsArrowRightShort /> Activate History</Link>
                                        <Link to="/Dashboard/Staking_Details"><BsArrowRightShort /> Staking Details</Link>
                                        <Link to="/Dashboard/Profile"><BsArrowRightShort /> Profile</Link>
                                    </div>
                                </div>
                            </li>
                            <li class="col-xl-10 col-12 border_bottom">
                                <div>
                                    <button className='btn1 nav-btn-expand col-12 text-start fs-6 py-2'> <BiLineChart className="me-1 mb-1" /> All Income</button>
                                    <div className='expand-nav-sm  d-none flex-column'>
                                        <Link to="/Dashboard/Referral_Income"><BsArrowRightShort /> Referral Income</Link>
                                        <Link to="/Dashboard/Matching_Level_Income"><BsArrowRightShort /> Matching Level Income</Link>
                                        <Link to="/Dashboard/Matching_Income"><BsArrowRightShort /> Matching Income</Link>
                                        <Link to="/Dashboard/Roi_Income"><BsArrowRightShort /> Roi Income</Link>
                                        <Link to="/Dashboard/Reward_Income"><BsArrowRightShort /> Reward Income</Link>
                                    </div>
                                </div>
                            </li>
                            <li class="col-xl-10 col-12 border_bottom">
                                <div>
                                    <button className='btn1 nav-btn-expand col-12 text-start fs-6 py-2'><BiBook className="me-1 mb-1" /> History</button>
                                    <div className='expand-nav-sm  d-none flex-column'>
                                        <Link to="/Dashboard/Buy_NFT"><BsArrowRightShort /> Buy NFT</Link>
                                        <Link to="/Dashboard/Withdrawal"><BsArrowRightShort /> Withdrawal</Link>
                                        <Link to="/Dashboard/Withdrawal_History"><BsArrowRightShort /> Withdrawal History</Link>
                                    </div>
                                </div>
                            </li>
                            <li class="col-xl-10 col-12 border_bottom">
                                <div>
                                    <button className='btn1 nav-btn-expand col-12 text-start fs-6 py-2'><MdOutlineGroup className="me-1 mb-1" /> Team Details</button>
                                    <div className='expand-nav-sm  d-none flex-column'>
                                        <Link to="/Dashboard/My_Referal"><BsArrowRightShort /> My Referal</Link>
                                        <Link to="/Dashboard/Matching_Income"><BsArrowRightShort /> My Team</Link>
                                        <Link to="/Dashboard/Matching_Tree"><BsArrowRightShort /> Matching Tree</Link>
                                        <Link to="/Dashboard/Level_Details"><BsArrowRightShort /> Level Details</Link>
                                        <Link to="/Dashboard/Direct_Leg_Business"><BsArrowRightShort /> Direct Leg Business</Link>
                                    </div>
                                </div>
                            </li>
                            <li class="col-xl-10 col-12 border_bottom">
                                <div>
                                    <button className='btn1 nav-btn-expand col-12 text-start fs-6 py-2'><BiMessageSquareEdit className="me-1 mb-1" /> Address</button>
                                    <div className='expand-nav-sm  d-none flex-column'>
                                        <Link to="/Dashboard/Self_Address"><BsArrowRightShort /> Self Address</Link>
                                        <Link to="/Dashboard/Coin_Address"><BsArrowRightShort /> Coin Address</Link>
                                        <Link to="/Dashboard/NFT_Address"><BsArrowRightShort /> NFT Address</Link>
                                    </div>
                                </div>
                            </li>
                            <li class="col-xl-10 col-12 border_bottom">
                                <button className='btn1 col-12 text-start fs-6 py-2' onClick={()=>{
                                    navigate('/')
                                }}><FaLock className="me-1 mb-1" /> Logout</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;