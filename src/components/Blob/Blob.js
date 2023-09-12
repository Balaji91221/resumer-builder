import React, { Component } from 'react'
import {blobData} from './blobsvg'
import './style.css'

export default class Blob extends Component {
    render() {
        return (
            <>
                <div className="container ">
                    <h1 className="text-center underline">{this.props.heading}</h1>
                    <div className="row">
                        {
                            blobData.map((x, key) => 
                            <div key={key} className="col-sm-6 col-md-3">
                                <div className="wrap blobeffect">
                                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path fill={x.blobColor} d={x.path} transform={x.transform} />
                                            {(x.isText) ? <text x={x.positionX} y={x.positionY} fontFamily={x.fontFamily} fontSize={x.fontSize} fill={x.textFill}>{x.number}</text> : "" }
                                        </g>
                                    </svg>
                                </div>
                                <div className="command text-center mb-4">
                                    <p className="lead">{x.command}</p>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </div>
            </>
        )
    }
}