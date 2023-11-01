import Accordion from "./accordion";
import "./accordion.css";
import React from "react";

export default function Accordian() {
  new Accordion(".accordion-container", { duration: 400 });
  return (
    <div class="accordion-container">
      <div class="mt-[8px] border-[1px] border-[#eee] bg-[#fff] box-border font-bold text-[16px] text-black py-[20px] px-[32px]">
        <a href="/About" class="hover:text-blue">
          ABOUT
        </a>
      </div>
      <div class="ac">
        <h2 class="ac-header">
          <button type="button" class="ac-trigger hover:text-blue">
            VIDEO PRODUCTION
          </button>
        </h2>
        <div class="ac-panel">
          <p class="ac-text hover:text-blue cursor-pointer">
            <a href="/Video_production#CORPORATE">CORPORATE VIDEOS</a>
          </p>
          <p class="ac-text hover:text-blue">
            <a href="/Video_production/#Legal"> LEGAL VIDEOS</a>
          </p>
        </div>
      </div>

      <div class="ac">
        <h2 class="ac-header">
          <button type="button" class="ac-trigger hover:text-blue">
            MEDIA TRAINING/COACHING
          </button>
        </h2>
        <div class="ac-panel">
          <p class="ac-text hover:text-blue">
            <a href="/Media_training/#for-leaders">FOR LEADERS</a>
          </p>
          <p class="ac-text hover:text-blue">
            <a href="/Media_training#for-journalists">FOR JOURNALISTS</a>
          </p>
        </div>
      </div>

      <div class="ac">
        <h2 class="ac-header">
          <button type="button" class="ac-trigger hover:text-blue">
            STRATEGIC CONSULTING
          </button>
        </h2>
        <div class="ac-panel">
          <p class="ac-text hover:text-blue">
            <a href="/Strategic_consulting/#Earned-Media"> EARNED MEDIA</a>
          </p>
          <p class="ac-text hover:text-blue">
            <a href="/Strategic_consulting#Crisis-Communication">
              CRISIS COMMUNICATIONS
            </a>
          </p>
          <p class="ac-text hover:text-blue">
            <a href="/Strategic_consulting/#new-industry">
              {" "}
              NEW INDUSTRY INSIGHT
            </a>
          </p>
          <p class="ac-text hover:text-blue">
            <a href="/Strategic_consulting#multi-media"> MULTI-MEDIA</a>
          </p>
        </div>
      </div>
      <div class="ac">
        <h2 class="ac-header">
          <button type="button" class="ac-trigger hover:text-blue">
            CONTACT
          </button>
        </h2>
        <div class="ac-panel">
          <p class="ac-text hover:text-blue">
            <a href="/Contact/#contact-items">BOOK FREE CONSULTATION</a>
          </p>
          <p class="ac-text hover:text-blue">
            <a href="/Contact#contact-items"> SPEAKING ENGAGEMENTS</a>
          </p>
        </div>
      </div>
    </div>
  );
}
