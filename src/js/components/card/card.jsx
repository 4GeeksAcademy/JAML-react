import React from "react";

const Card = () => {
    return (
        <>
            <div className="card text-center">
                <img className="card-img-top" src={'src/img/cow.jpg'} alt="Card image" height={'325px'} width={'500px'}></img>
                <div className="card-body">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div className="card-footer">
                    <a href="#" className="btn btn-primary">See Profile</a>
                </div>
            </div>
        </>
    )
};

export default Card;