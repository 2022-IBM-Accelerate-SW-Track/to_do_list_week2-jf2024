import React, { Component } from 'react';
import "./About.css";
import profile_pic_JF from "../assets/profile_pic_JF.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={profile_pic_JF}
              alt="Profile Pic"
            ></img>
        </div>
      </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Jose Xavier Fuentes</div>
            <div className="brief_description">
            Hello! I'm Jose Fuentes but my middle and preferred name is Xavier! I'm a rising junior going
            to Loyola Marymount University in Los Angeles. I'm a Computer Science Major hoping to get a minor
            in Stats/Data Science and Math. Some other facts about me is that I'm a big soccer fan, love anime
            and reading. Nice to meet you all!
            </div>
          </div>
        </div>
      </div>
    )
  }
}