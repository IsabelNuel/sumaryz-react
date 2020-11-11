import React from 'react';
import './App.css';
import logo from './asset/favicon.png';
import google from './asset/googleplay.svg';
import phone from './asset/phone.png';
import connect from './asset/connect.svg';
import note from './asset/note.svg';
import chat from './asset/chat.svg';
import book from './asset/book.svg';
import model from './asset/model.png';


 {/*header */}
function App() {
  return (
    <div className="container">
     <div className="row">
      <div className="col-12 col-md-5 mt-5">
        <div className="d-flex">
        <img src={logo} alt="chat icon" height="70px" width="70px"  className="img-fluid"/>
        <h5 className="p-3" style={{color:"#7740d7"}}>sumaryz</h5>
        </div>
        <h3 className="pt-5" style={{color:"#7740d7"}}>A Peer to Peer Learning <br/>Platform for Students.</h3>
        <p className="py-3 font-weight-medium" style={{color:"#666a86"}}>Connect and engage with other students studying the <br/>same course with you, ask questions or help them answer <br/>their questions, access lecture notes and summaries.</p>
        <img src={google} alt="play store" height="51px" width="170px" className="img-fluid mx-auto"/>
      </div>

      <div className="col-12 col-md-7 ">
      <img src={phone} alt="phone icon" height="730px" width="690px" className="img-fluid d-none d-md-block"/>
      </div>
     </div>

  {/*sumaryz */}
      <div className="row-full">
        <div className="text-center">
      <p className="pt-5 pb-2">WHAT IS SUMARYZ ?</p>
      <h4 className="text-white font-weight-bold pb-1"> Sumaryz is your class room <br/>right on your smartphone</h4>
      <p className="mb-5">With these extra features just for you</p>
        </div>
      <div className="row col-md-9  m-auto">
        <div className="col-md-8 mb-5 text-left">
          <div className="d-flex">
            <img src={connect} alt="connect icon" height="60px" width="60px" />
            <div>
            <p className="text-white font-weight-bold"> Connect and Engage</p>
            <p style={{color:"#CAB1FB"}}>Interact with other students from <br/>other institutions.</p>
            </div>
          </div>
        </div>
      
        <div className="col-md-4 mb-5 text-left">
          <div className="d-flex">
            <img src={note} alt="note icon" height="60px" width="60px" />
            <div>
            <p className="text-white font-weight-bold">Get Summarised Lectures</p>
            <p style={{color:"#CAB1FB"}}>Get high quality and easy to <br/>understand summarised lecture <br/>notes.</p>
            </div>
          </div>
        </div>

        <div className="col-md-8 mb-5 text-left">
          <div className="d-flex">
            <img src={chat} alt="chat icon" height="60px" width="60px" />
            <div>
            <p className="text-white font-weight-bold">Ask and Answer Questions</p>
            <p style={{color:"#CAB1FB"}}>Share problems and solutions on <br/>topics within your academic <br/>discipline with other students.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-5 text-left">
          <div className="d-flex">
            <img src={book} alt="book icon" height="60px" width="60px" />
            <div>
            <p className="text-white font-weight-bold">Get Lecture Materials</p>
            <p style={{color:"#CAB1FB"}}>Access all available lecture notes.</p>
            </div>
          </div>
        </div>

        
        </div>
        </div>
     

 {/*model */}
      <div className="container">
      <div className="row d-flex justify-content-around">
        <div className=" d-flex align-items-center">
        <div className="col-md-6">
          <h4 className="font-weight-bold">Get paid for summarising your <br/>favourite courses.</h4>
          <p style={{color:"#666a86"}}>Earn cash Rewards of up to N10, 000 summarising your <br/>favourite course(s) for other students.</p>
          <button>
            <a href="https://sumaryz.com/s/">Find out more</a>
          </button>
        </div>
        <img src={model} alt="model icon" height="600px" width="450px" className="d-none d-md-block"/>
        </div>
      </div>

  {/*google play */}
      <div className="start text-center py-5">
        <h4 className="text-white">What are you waiting for?</h4>
        <img src={google} alt="play store" height="51px" width="170px" className="img-fluid mx-auto"/>
      </div>
      </div>

  {/*footer */}
      <footer>
        <div className="container">
      <div className="row">
        <div class="col-md-5 mb-5 text-left">
          <img src={logo} alt="chat icon" height="70px" width="70px"  className="img-fluid"/>
          <p>Start using our cutting edge platform <br/>to quickly increase the impact of your learning.</p>
        </div>

        <div class="col-md-3 mb-5 text-left">
          <h4>Links</h4>
          <br/>
          <a href="https://www.bacegroup.com/#industries">Home</a>
            <br/>
          <a href="https://www.bacegroup.com/#use-cases">About us</a>
            <br/>
          <a href="https://medium.com/@bacehq">Blog</a>
            <br/>
          <a href="https://www.bacegroup.com/fightcovid">Covid-19</a>
            <br/>
          <a href="https://www.bacegroup.com/#request-demo">Connect</a>
        </div>

        <div class="col-md-4 mb-5 text-left">
          <h4>Contact</h4>
          <br/>
          <a href="https://www.bacegroup.com/" >hello@sumaryz.com</a>
            <br/>
          <p>+233 201 415 061</p>
          <p>+233 209 596 921</p>
          <button className="btn">
          <a href="https://www.bacegroup.com/">Join us</a>
          </button>
        </div>

      
        <p className="pb-2">© Sumaryz All Rights Reserved</p>
      </div>
      </div>
      </footer>



    </div>

  );
}


export default App;
