import React from "react";
import "./style.css";

export default function September1() {
    return (
      <div class="pricing-container">
          <div class="pricing-card">
              <button className="heading-button">First Tier</button>
              <p className="heading">The perfect plan for those just getting started. Free for 7 days!</p>
              <ul>
                  <li>Super super benefit!</li>
                  <li>Another awesome benefit!</li>
                  <li>The best benefit ever!</li>
                  <li>Okay, this is the best.</li>
                  <li>This one's okay.</li>
                  <li>Beneffffffit!</li>
                  <li>One last benefit.</li>
              </ul>
              <div class="price">$9.99/month</div>
              <button>Choose</button>
          </div>
  
          <div class="pricing-card popular">
            <span>
            <button className="heading-button">Second Tier</button>
            <p>Most Popular!</p>
            </span>
              <p className="heading">Our most popular tier and perfect for freelancers and small businesses.</p>
              <ul>
                  <li>Super super benefit!</li>
                  <li>Another awesome benefit!</li>
                  <li>The best benefit ever!</li>
                  <li>Okay, this is the best.</li>
                  <li>This one's okay.</li>
                  <li>Beneffffffit!</li>
                  <li>One last benefit.</li>
              </ul>
              <div class="price">$13.99/month</div>
              <button>Choose</button>
          </div>
  
          <div class="pricing-card">
          <button className="heading-button">third Tier</button>
              <p className="heading">This is our POWERHOUSE! Running a big business? This is for you.</p>
              <ul>
                  <li>Super super benefit!</li>
                  <li>Another awesome benefit!</li>
                  <li>The best benefit ever!</li>
                  <li>Okay, this is the best.</li>
                  <li>This one's okay.</li>
                  <li>Beneffffffit!</li>
                  <li>One last benefit.</li>
              </ul>
              <div class="price">$19.99/month</div>
              <button>Choose</button>
          </div>
      </div>
    );
  }