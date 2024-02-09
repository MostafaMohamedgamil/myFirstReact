import React, { PureComponent } from 'react'
import "./Error.css"

class Error extends PureComponent {


    render() {
        return <>

            <div className="Error text-center d-flex justify-content-center align-items-center ">
                <div className="toError">
                    <div className="content">
                        <h1>4     0      4  Not Found Page</h1>
                    </div>
                    <div className="newtons-cradle m-auto">
                        <div className="newtons-cradle__dot"></div>
                        <div className="newtons-cradle__dot"></div>
                        <div className="newtons-cradle__dot"></div>
                        <div className="newtons-cradle__dot"></div>
                    </div>
                </div>
            </div>
        </>
    }
}

export default Error