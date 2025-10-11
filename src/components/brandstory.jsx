import React from "react";

const BrandStory = () => {
    return (
        <div className="container my-5">
            <div
                className="position-relative text-center text-white d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage:
                        "url('https://us.images.westend61.de/0001446698pw/top-view-composition-with-different-kinds-of-natural-aromatic-spices-placed-on-slate-surface-background-ADSF13767.jpg')", // replace with your image
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "25px",
                    minHeight: "350px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
            >
                <div style={{ borderRadius: "25px",zIndex: '20' }} className='shade'></div>
                <div
                    className="p-4 p-md-5"
                    style={{
                       zIndex:30,
                        borderRadius: "25px",
                        maxWidth: "800px",
                    }}
                >
                    <h4 className="mb-3 fw-bold">BRAND STORY</h4>
                    <p className="mb-3" style={{ lineHeight: "1.7" }}>
                        Our journey began generations ago when our grandfather embarked on a
                        voyage from Bombay to Karachi, carrying with him the rich culinary
                        traditions of his homeland. Settling in Karachi, he brought these
                        flavors to life, igniting a passion for authentic masalas that would
                        become our family legacy.
                    </p>
                    <a href="#" className="text-white text-decoration-underline">
                        Read more
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BrandStory;
