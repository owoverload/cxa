import React, {useState, useEffect} from 'react';
import HawkerJumbotron from '../HawkerJumbotron.js';
import Contacts from '../Contacts';
import laksa from "../assets/laksa2.jpg";
import HawkTabs from '../Tabs.js';
import Description from '../Description.js';
import Chat from '../Chat.js';
import io from 'socket.io-client';
import { Route, Link, BrowserRouter as Router , Redirect} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import HawkButton from './HawkButton.js';
import therealHawkPub from './therealHawkPub.js';

let HawkPage = (props) => {

  let mainSocket = io('http://192.168.1.19.:8080')

  let [reDirect, setreDirect] = useState(false)

  let handleClick = () => {
    setreDirect(true)
  }

  let [directState , setreDirectState] = useState("./therealHawkPub")
  
    if (reDirect) {
      return <Redirect push to={`${directState}`}></Redirect>
    } else {

    
    return (<div id="App" style={{boxSizing: 'border-box', fontfFamily: 'Verdana', backgroundColor: '#f6f6f6'}}> 
      <div>
      <Contacts pageWrapId={"page-wrap"} outerContainerId={"App"} contactname='Jerry' contactname2='Larry' contactname3='Barry'/>
      <div id="page-wrap">
      <HawkButton hawkdirect='./HawkPub' alttitle='Add Post icon' buttonimg='https://cdn4.iconfinder.com/data/icons/ios7-essence/22/add_plus-512.png' style={{
            marginTop: '500px', 
          }}>
      </HawkButton>
      <HawkerJumbotron comname='Lorem Ipsum' 
      profilepic={laksa} 
      role='Hawker'
      bgimg='https://media.licdn.com/dms/image/C561BAQHm1TXH3TKPXw/company-background_10000/0?e=2159024400&v=beta&t=uFwdkIxRHe5itM_5n0u7SuLByFbRWVe6obPGimhanUo'></HawkerJumbotron>
      <Description description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ex eveniet doloremque odit impedit totam cum, praesentium alias rem eos hic qui, architecto debitis delectus explicabo iure culpa perferendis id corporis quos quia placeat unde iusto cupiditate! Dolore neque doloremque fugiat, in dolorum alias, necessitatibus quas odio voluptatibus, laborum accusamus! Nulla impedit recusandae incidunt totam, quod fuga necessitatibus neque, distinctio voluptate iure culpa illo quae? Obcaecati, rem tenetur dolorem quo blanditiis, velit error fugit ut ex aut nobis, sunt dicta ab fuga reprehenderit soluta. Saepe voluptate, rem perspiciatis veniam minus accusamus quasi consectetur corrupti dicta delectus, eligendi laborum quas distinctio.'></Description>
      <main style={{paddingRight: '250px'}}>
      <Button className='shadow bg-white' hawkdirect='./therealHawkPub.js' style={{
        border: '0px', 
        color: '#313131', 
        marginLeft: '1032px', 
        marginTop: '-88px'
      }} onClick={() => {
        let directState = setreDirectState('therealHawkPub')
        let reDirect = setreDirect(true)
      }}>See your account's page</Button>
          <Button className='btn shadow bg-white' style={{
            borderRadius: '50%', 
            float: 'left',
            marginLeft: '70px', 
            marginTop: '-396px',
            width: '70px', 
            border: '0px', 
            position: 'fixed', 
            height: '70px', 
            backgroundColor: '#009a7a'
          }}
            onClick={() => {
              let directState = setreDirectState('HawkPub')
              let reDirect = setreDirect(true)
            }}>
            <img src='https://cdn4.iconfinder.com/data/icons/ios7-essence/22/add_plus-512.png' alt='Add Post icon' style={{
            color: 'black', 
            width: '45px', 
            height: '45px'
          }}></img>
          </Button>
        <HawkTabs style={{
          width: '1100px'
        }}></HawkTabs>
        <Chat socket={mainSocket} contactname='Jerry' contactrole='Investor'></Chat>
      </main>
      </div>
      </div>
    </div>
  
  )
}
}
export default HawkPage;
