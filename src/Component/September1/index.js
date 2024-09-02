import React from "react";
import "./style.css";

const cardData = [
    {
      title: "First Tier",
      popular: false,
      tier:1,
      heading:
        "The perfect plan for those just getting started. Free for 7 days!",
      items: [
        "Super super benefit!",
        "Another awesome benefit!",
        "The best benefit ever!",
        "Okay, this is the best.",
        "This one's okay",
        "Beneffffffit!",
        "One last benefit.",
      ],
      price: "$9.99/month",
    },
    {
      title: "Second Tier",
      popular: true,
      tier:2,
      heading:
        "Our most popular tier and perfect for freelancers and small businesses.",
      items: [
        "Super super benefit!",
        "Another awesome benefit!",
        "The best benefit ever!",
        "Okay, this is the best.",
        "This one's okay",
        "Beneffffffit!",
        "One last benefit.",
      ],
      price: "$13.99/month",
    },
    {
      title: "Third Tier",
      popular: false,
      tier:3,
      heading:
        "This is our POWERHOUSE! Running a big business? This is for you.",
      items: [
        "Super super benefit!",
        "Another awesome benefit!",
        "The best benefit ever!",
        "Okay, this is the best.",
        "This one's okay",
        "Beneffffffit!",
        "One last benefit.",
      ],
      price: "$19.99/month",
    },
  ];

export default function September1() {
    return (
        <div className="pricing-container">
          {cardData.map((data, tier) => (
            <div  className={`pricing-card tier${data?.tier || 1}`} key={tier}>
            {data?.popular? 
            <span>
                <button className="heading-button">{data?.title}</button>
                <button className="heading-mostPopular">Most Popular</button>
            </span>
            :<button className="heading-button ">{data?.title}</button>}  
              <p className="pricing-heading">{data?.heading}</p>
              <ul className="pricing-card-list">
                {data?.items?.map((item) => (
                  <li className="pricing-card-list-items">{item}</li>
                ))}
              </ul>
              <div className="price">{data?.price}</div>
              <button className="choose-button">Choose</button>
            </div>
          ))}
        </div>
      );
}
