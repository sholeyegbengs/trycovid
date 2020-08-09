import React, {useState} from 'react'
const Covidata = (data, onChildClick) => {
    // if(!data || data.lenght === 0) <p>Sorry no data :)</p>

    return(
        <div className="container">
            <p className="who_logo">
                <img src=""/>
            </p>
            <p className="title">
                <div>COVID-19 DATA</div>
            </p>
            <br/>
            <div className="row">
                <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-3">
                                    COUNTRIES
                                </div>
                                <div className="col-md-5">
                                    <select>
                                        <option>USA</option>
                                        <option>NIGERIA</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <button onclick={onChildClick}>FETCH DETAILS</button>
                                </div>
                            </div>
                </div>
            </div>
            <div classname="row"></div>
        </div>
    )
}
export default Covidata