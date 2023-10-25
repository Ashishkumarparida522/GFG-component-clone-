import React from 'react'
import Component1 from './component/Component1'

 
const App = () => {
  return (
    <div>
    <div class="navbar">
      <nav>
       <select id="a">
        <option>courses</option>
        <option >All cousrses</option>
       </select>
       <select id ="b">
        <option >tutorials</option>
       </select>
       <select id="c">
        <option>jobs</option>
       </select>
       <select id="d">
        <option>practice</option> 
       </select>
       <select id="e"> 
        <option>context</option>
       </select>
       <img src="https://media.geeksforgeeks.org/gfg-gg-logo.svg" height="40px" width="40px" id ="img1"></img>
       <input type="text" id="inpu"placeholder="Search"></input>
       <img src="https://cdn-icons-png.flaticon.com/128/2811/2811806.png" height="px" id="img2"></img>
       <button class="btn1">sign in</button> </nav>
       </div>
       <div id="navbar2">
        <a id="a0">DSA Classroom Course</a>
        <a id="a1">Trending now</a>
        <a id="a2">Data structure</a>
        <a id="a3">Algorithms</a>
        <a id ="a4">DSA to Devlopment</a>
        <a id="a5">Data science </a>
        <a id="a6">python</a>
        <a id="a7">Machine learning</a>
        <a id="a8">java script</a>
        <a id="a9">c</a>
        <a id="a10">c++</a>

        </div>
        <div class="text">
          <h3>Hello,what Do You Want To Learn?</h3>
          <div class="navbar3">
        <input type="text" placeholder="Search here" id="inpu2"></input>
        <button id="btn2">Search</button>
        </div>
        <div id="navbar5">
          <button id="b1">Become a software Tester</button>
          <button id="b2">System Design:LLD To HLD</button>
          <button id="b3">DSA:Basic To Advance Course</button>
        </div>
        <div class="final">
        <div class="main">
        < div class="pic1">
          <img src="https://media.geeksforgeeks.org/auth-dashboard-uploads/read.png" height="70px" width="250px"></img>
          <h4> 6 trending programming language..</h4>
          <p>Programming languages <br></br>are used as a medium for <br></br>communicating with the...</p>
         </div>
         <div class="pic2">
          <img src="https://media.geeksforgeeks.org/auth-dashboard-uploads/practice.png" height="70px" width="250px"></img>
          <h4>Explore Practice Problems</h4>
          <p>Solve DSA Problems.Filter<br></br> based on topic tags and<br></br> company tags.Get curate..</p>
         </div>
         <div class="pic3">
          <img src="https://media.geeksforgeeks.org/auth-dashboard-uploads/learn.png" height="70px" width="250px"></img>
          <h4>
        Dsa in Python -Self Placed 
          </h4>
          <p>Most popular course on<br></br> DSA trusted by over <br></br>75,000 students!Built wi... </p>
         </div>
         </div>
         <button id="bn">Community here</button>
         </div>
       
      </div>
      <Component1/>
      </div>
     
      
  )
}

export default App;
