import { useEffect, useState } from "react";
import { loadWeb3 } from "../../api";
import { PagePath } from "../../Components";

const Self_Address = () => {
    const [address, setaddress] = useState("")

    const Addressher = async () => {
        let acc = await loadWeb3()
        setaddress(acc)
    }
    useEffect(() => {
        Addressher()
    }, [])



    return (
        <div className="row justify-content-center" >
            <div className="col-md-11 py-3">
                <PagePath data={{ page_name: "Self Address", page_path: "Address / Self Address" }} />


                <div className="mt-4 container">
                    <h5 className="text-white">  Self Address: {address}   </h5>
                </div>
            </div>
        </div>
    );
}

export default Self_Address;