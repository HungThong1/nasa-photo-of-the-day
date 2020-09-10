import React, { useState, useEffect } from 'react'
const Card = props => {
const {data} = props
return(
        <div className = "content">
            <h2>{data.title}</h2>
            <div className = "imgContainer">
                <img src = {data.url} alt = "Nasa Photo"/>
            </div>
            <div className = "author">
                <h3> {data.copyright} </h3>
                <p> {data.date} </p>
            </div>
            <div className = "details">
                <p> {data.explanation} </p>
            </div>
        </div>
)
}
export default Card