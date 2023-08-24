import React from 'react'
import PickMeals from '../asset/pick-meals-image.png'
import ChooseMeals from '../asset/choose-image.png'
import DeliveryMeals from '../asset/delivery-image.png'
import Testimonials from '../component/testimonials'

function Works() {
    const workInfoData = [
        {
            image : PickMeals,
            title: "Pick Meal",
            text: "lorem ipsum dolor sit amet consectetur"
        },
        {
            image : ChooseMeals,
            title: "Choose Now Often",
            text: "lorem ipsum dolor sit amet consectetur"
        },
        {
            image : DeliveryMeals,
            title: "Fast Deliveries",
            text: "lorem ipsum dolor sit amet consectetur"
        },
    ];
  return (
    <>
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Work</p>
                <h1 className="primary-heading">How it Works</h1>
                <p className="primary-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta soluta quaerat dolores, pariatur provident enim perspiciatis id deleniti. Numquam esse ex aliquid aperiam maiores. Blanditiis.
                </p>
            </div>
            <div className="work-section-bottom">
                {workInfoData.map((data) => (
                    <div className="work-section-info" key={data.title}>
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))}
            </div>
        </div>
    <Testimonials />
    </>
  );
}

export default Works