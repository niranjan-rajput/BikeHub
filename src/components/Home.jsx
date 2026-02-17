import React from 'react';

import imga2 from '../../public/gt.jpg';

export default function Home() {

    return (
        <>
            <div className="bg-dark">

                <h1 className=" me-5 ms-5 mt-3 p-3 text-white display-3 fw-bold gradient-text hover-grow">
                    Biker's
                </h1>
                <hr className="bg-white"/>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/49656/continental-gt-right-side-view-12.png?isig=0" className="d-block w-100" alt="..." />
                        </div>
                        {/* <div className="carousel-item">
                        <img src="" className="d-block w-100" alt="..." />
                    </div> */}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>


            </div>
        </>
    );
}
