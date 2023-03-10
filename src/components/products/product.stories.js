import React from "react";
import './product.css'
import memory from './icon-memory.svg'
import reaction from './icon-reaction.svg'
import verbal from './icon-verbal.svg'
import visual from './icon-visual.svg'

import product from "./product";

export default {
    title: 'Product',
    Component: product
}

export const primary = () => <body>
    <div class="card">
      <div class="card-container">
        <section class="result">
          <h3 class="title">Your Result</h3>
          <div class="circle">
            <h1>76</h1>
            <p>of 100</p>
          </div>
          <b>Great</b>
          <p class="info">
            You scored higher than 65% of the people who have taken thest tests.
          </p>
        </section>
        <section class="summary">
          <h3 class="title">Summary</h3>
          <div class="rows">
            <div class="row">
              <div class="badge">
              <img src={memory} className="icon" alt="icon" />                <b>Reaction</b
                >
              </div>
              <p><b>80</b> / 100</p>
            </div>
            <div class="row">
              <div class="badge">
              <img src={reaction} className="icon" alt="icon" />
                <b>Memory</b
                >
              </div>
              <p><b>92</b> / 100</p>
            </div>
            <div class="row">
              <div class="badge">
              <img src={verbal} className="icon" alt="icon" /><b>Verbal</b
                >
              </div>
              <p><b>61</b> / 100</p>
            </div>
            <div class="row">
              <div class="badge">
              <img src={visual} className="icon" alt="icon" /><b>Visual</b
                >
              </div>
              <p><b>72</b> / 100</p>
            </div>
          </div>
          <button class="btn">Continue</button>
        </section>
      </div>
    </div>

</body>