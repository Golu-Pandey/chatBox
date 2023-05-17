import React, { useState } from 'react';

import CameraAltIcon from '@material-ui/icons/CameraAlt';

import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';

import ContactMailIcon from '@material-ui/icons/ContactMail';


import AttachmentIcon from '@material-ui/icons/Attachment';

import SendIcon from '@material-ui/icons/Send';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import FilePhotos from './FilePhotos';

import TakeFilePhotos from './TakeFilePhotos';

/*import TakeFilePhotoslink from './TakeFilePhotoslink';*/


function Convforalluser04 () 
{
    const state = useState();
    
    const[Showfilesend, setShowfilesend] = useState("send");


    function FILEPHOTOS (FILEPHOTOSprops)
  {
    
    return(
        <div className="forjustcheck">
        <input type="checkbox"
        onClick={SHOWFILESEND}></input>
        <TakeFilePhotos 
        picsrc={FILEPHOTOSprops.picsrc}>
        </TakeFilePhotos>
        </div>
    );
  }
  const SHOWFILESEND = () =>
    {
        setShowfilesend("Send")
    }

    const[InputMsg, setInputMsg] = useState(" ");

    const[Msgs, setMsgs] =useState([]); 

    const MsgE = (event) =>{
        setInputMsg(event.target.value);

      };

      const listofMsg = () =>{
        setMsgs((oldMsgs) => {

          return (
              [...oldMsgs, InputMsg]
         ) })

        setInputMsg(" ") ;
    };


    const Convmsgpage04 = (propsformsg01) =>{

        return(
            <>
         
            <div className="USERMESS">
                 {propsformsg01.text}
             
            </div>
            </>
        );
    };

    const[Attachment, setAttachment] = useState(" ");
    const[onclick, setOnclick] = useState(0);

    const ShowAttachment = () =>
    {
        if(onclick===0)
        {
            setOnclick(onclick +1)
            setAttachment(
                   <Attachmentcontent />
            )
        }
        else if(onclick===1)
        {
            setOnclick(onclick -1)
            setAttachment(" ")
        }
    }

    const Attachmentcontent= () =>
    {
        return(
            <div className="Attachmentcontent">
          <div className="attachmentoftwoitem">
              <div className="AttachmentItem">
              <ContactMailIcon className="AttachmentItem1"></ContactMailIcon><br />
              ContactMail
              </div>
              <div className="AttachmentItem">
              <InsertPhotoIcon className="AttachmentItem2"></InsertPhotoIcon><br />
              InsertPhoto
              </div>
          </div>

          <div className="attachmentoftwoitem">
            <div className="AttachmentItem">
            <CameraAltIcon className="AttachmentItem3"></CameraAltIcon><br />
             CameraAlt
            </div>
            <div className="AttachmentItem" onClick={ShowFiles}>
          < InsertDriveFileIcon className="AttachmentItem4"></InsertDriveFileIcon> <br />
          InsertFile
          </div>
      </div>

      </div>
        );
    }

    const[File, setfile] = useState(" ");
    
     const HideFile = () =>
     {
        setfile(" ");
     }
//Here display the Filecontenet means all photos;
     const TotalFilecontent = () =>
     {
           return(
               <>
               <div className="makegridofFilePhotos">
                   {FilePhotos.map(FILEPHOTOS)}
               </div>
               
          </> );
     }

    const Totalfile = () =>
    {
        return(
            <>
           
            <div className="ArrowBackandSendTouser">
              <button onClick={HideFile} className="ArrowBacks">
                  <ArrowBackIcon></ArrowBackIcon>
              </button>
              <span className="SendTouser"> Send to Yuvraj</span>
              <button className="Showfilesendsymbol">{Showfilesend}</button>
              </div>
              <TotalFilecontent></TotalFilecontent>
            </>
        );
    }

    const ShowFiles = () =>
    {
         setfile(
             <Totalfile />
            )

        setAttachment(" ");
    
    }

    return (<>
  
        <div className="ShowAttachment">{Attachment}</div>
        <div className="Showfile">{File}</div>

        <div className="convedownnavthif">
        <div className="convedownnav">
              <input type="text" 
              onChange ={MsgE} 
              value ={InputMsg} 
              placeholder="Message...."
              className="convedownnavinput"></input>

           <AttachmentIcon className="someAttachment"
              onClick={ShowAttachment}>
              </AttachmentIcon>
                    
        </div>

        <SendIcon className="Send"
          onClick ={listofMsg}>    
               </SendIcon>
   
       </div>

            <div className="conversation">
            
            <div className="Mess">

                <p className="mesgwidth mesgwidthsender">
                <span className="msgsender">
                    Hello 
                </span>
                </p>
                <p className="mesgwidth mesgwidthreceiver">
                <p className="msgsreceiver">
                    Hii Yuvraj
                </p>
                </p>
                
                <p className="mesgwidth mesgwidthsender">
                <span className="msgsender">
                    How are you..??
                </span>
                </p>
                <p className="mesgwidth mesgwidthreceiver">
                <p className="msgsreceiver">
                    I'm good , What about you..??
                </p>
                </p>

                <p className="mesgwidth mesgwidthsender">
                <span className="msgsender">
                    I'm ok. thank you..What are you doning now..??
                </span>
                </p>
                <p className="mesgwidth mesgwidthreceiver">
                <p className="msgsreceiver">
                    Nothing.
                </p>
                </p>

                <p className="mesgwidth mesgwidthsender">
                <span className="msgsender">
                   I have to tell you something
                </span>
                </p>
                <p className="mesgwidth mesgwidthreceiver">
                <p className="msgsreceiver">
                   what..?? please Tell me 😍
                </p>
                </p>

                <p className="mesgwidth mesgwidthsender">
                <span className="msgsender">
                    I think, i love you
                </span>
                </p>
                <p className="mesgwidth mesgwidthreceiver">
                <p className="msgsreceiver">
                    Love you too
                </p>
                </p>
                <p className="mesgwidth mesgwidthreceiver">
                <p className="picmsgreceiver">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQarBxMwdYmfv5MSsUug_FakXLsMc5u00AAyA&usqp=CAU"
                alt="Not found" className="picmsgreceiver2"></img>
                </p>
                </p>

                <p className="mesgwidth mesgwidthsender">
                <span className="msgsender">
                    What do you do there..?? 🤔
                </span>
                </p>
                <p className="mesgwidth mesgwidthreceiver">
                <p className="msgsreceiver">
                    I'm a software engineer ❤️
                </p>
                </p>

                <p className="mesgwidth mesgwidthsender">
                <span className="msgsender">
                   Wow, that's great 😍
                </span>
                </p>
                <p className="mesgwidth mesgwidthreceiver">
                <p className="msgsreceiver">
                    Thank you ❤️
                </p>
                </p>

                <p className="mesgwidth mesgwidthsender">
                <span className="msgsender">
                  I want to say saomething 🥰
                </span>
                </p>
                <p className="mesgwidth mesgwidthreceiver">
                <p className="msgsreceiver">
                  what..??
                </p>
                </p>

                <p className="mesgwidth mesgwidthsender">
                <span className="msgsender">
                   I love you ❤️
                </span>
                </p>
                <p className="mesgwidth mesgwidthreceiver">
                <p className="msgsreceiver">
                    Love you too 😍
                </p>
                </p>
               

                <p className="mesgwidth mesgwidthsender">
                <p className="picmsgsender">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQarBxMwdYmfv5MSsUug_FakXLsMc5u00AAyA&usqp=CAU"
                    alt="Not found" className="picmsgsender2"></img> 
                </p>
                </p>
                
                { Msgs.map( (msgvalue, msgindex) =>{
                  
                  return(
                  
                    <p className="mesgwidth mesgwidthsender">
                    <p className="msgsender">
                      <Convmsgpage04 key = {msgindex} text ={msgvalue} 
                      ></Convmsgpage04>
                       </p>
                      </p>
                      );

                   })} 
                   

                  
                </div>
            </div>

   </> );
}

export default Convforalluser04;

