import { useState } from "react"
import React from 'react'
import './style.css'

const ContectForm = () => {
    const [name, setName] = useState("");

    return (
        <div className="main_from">
            <form>
                {/* <div className="main"> */}
                <div className="f_l_name">
                    <label>First Name
                        <div className="">
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </label>
                    <label>Last Name
                        <div className="">
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </label>
                </div>
                <div className="mobile_no">
                    <label>Mobil Number
                        <div className="">
                            <input
                                type="text"
                                min={10}
                                max={13}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </label>
                </div>
                <div className="email">
                    <label>Email Id:
                        <div className="">
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </label>
                </div>
                <div className="massage">
                    <label>Massage
                        <div className="">
                            <textarea
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </label>
                </div>
                <div className="submit">
                        <button type="submit">Submit</button>
                </div>

                {/* </div> */}
            </form>
        </div>
    )
}
export default ContectForm;