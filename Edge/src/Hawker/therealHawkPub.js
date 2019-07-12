import React, { useState } from 'react';
// import * as firebase from 'firebase/app';
// import firebaseConfig from '../firebaseconfig.js';
import { StreamApp, NotificationDropdown, FlatFeed, Activity, LikeButton, StatusUpdateForm,CommentField,CommentList } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';
import HawkerJumbotron from '../HawkerJumbotron.js';
import laksa from '../assets/laksa2.jpg';
import Description from '../Description.js';
import { Button } from 'react-bootstrap';
import { Route, Link, BrowserRouter as Router , Redirect} from 'react-router-dom';
import io from 'socket.io-client';


// firebase.initializeApp(firebaseConfig);

let TherealHawkPub = () => {

    let mainSocket = io('http://192.168.1.19.:8080')

    let [reDirect, setreDirect] = useState(false)

    let handleClick = () => {
        setreDirect(true)
    }

    let [directState , setreDirectState] = useState('')
    
        if (reDirect) {
        return <Redirect push to={`${directState}`}></Redirect>
        } else {


    return (
        <div style={{boxSizing: 'border-box', fontFamily: 'Verdana', backgroundColor: '#f6f6f6',zIndex: 0, position: 'relative',paddingTop:"90px"}}>
            <HawkerJumbotron comname='Lorem Ipsum' role='Hawker' profilepic={laksa} bgimg='https://media.licdn.com/dms/image/C561BAQHm1TXH3TKPXw/company-background_10000/0?e=2159024400&v=beta&t=uFwdkIxRHe5itM_5n0u7SuLByFbRWVe6obPGimhanUo'></HawkerJumbotron>  
            <Description description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ex eveniet doloremque odit impedit totam cum, praesentium alias rem eos hic qui, architecto debitis delectus explicabo iure culpa perferendis id corporis quos quia placeat unde iusto cupiditate! Dolore neque doloremque fugiat, in dolorum alias, necessitatibus quas odio voluptatibus, laborum accusamus! Nulla impedit recusandae incidunt totam, quod fuga necessitatibus neque, distinctio voluptate iure culpa illo quae? Obcaecati, rem tenetur dolorem quo blanditiis, velit error fugit ut ex aut nobis, sunt dicta ab fuga reprehenderit soluta. Saepe voluptate, rem perspiciatis veniam minus accusamus quasi consectetur corrupti dicta delectus, eligendi laborum quas distinctio.'>

            </Description>
            <Button className='shadow bg-white' style={{
                border: '0px', 
                color: '#313131', 
                marginLeft: '1032px', 
                marginTop: '-430px'
            }} onClick={() => {
                let directState = setreDirectState('../Transaction')
                let reDirect = setreDirect(true)
            }}>Fund</Button>
            <Button className='shadow bg-white' style={{
                border: '0px', 
                color: '#313131', 
                marginLeft: '1032px', 
                marginTop: '-356px'
            }}>Invest</Button>
            <Button className='shadow bg-white' style={{
                border: '0px', 
                color: '#313131', 
                marginLeft: '1032px', 
                marginTop: '-283px'
            }}>Contact</Button>
            <Button className='shadow bg-white' style={{
                border: '0px', 
                color: '#313131', 
                marginLeft: '1032px', 
                marginTop: '-210px'
            }}>View Prospectus</Button>
            <div style={{
                width: '1100px', 
                marginLeft: '168px'
            }}>
            
                <StreamApp
                    apiKey='nqcy3yjbpv9d' 
                    appId='54958' 
                    token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiSW52ZXN0b3IxIn0.v7DnKPVIdjxJILIpwSwab2gXBBIcNFMhK3pu7skwO28'
                >
                    <NotificationDropdown notify />
                    {/* <StatusUpdateForm
                    feedGroup="timeline"
                    userId="Investor1" /> */}
                    <FlatFeed
                    options={ {reactions: { recent: true } } }
                    notify
                    Activity={(props) =>
                        <Activity {...props}
                            Footer={() => (
                            <div style={ {padding: '8px 16px'} }>
                                <LikeButton {...props} />
                                {/* <CommentField
                                activity={props.activity}
                                onAddReaction={props.onAddReaction} />
                                <CommentList activityId={props.activity.id} /> */}
                            </div>
                            )}
                        />
                        }
                    />
                </StreamApp>
      </div>
  

                
           
    </div>
    )
                    }
}

export default TherealHawkPub;