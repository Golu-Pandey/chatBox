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


function Convforalluser03 () 
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


    const Convmsgpage03 = (propsformsg01) =>{

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
              <span className="SendTouser"> Send to Ramanand</span>
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
                    Hii Ramanand
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
                    I'm good. thank you...I want to say something 😅
                </span>
                </p>
                <p className="mesgwidth mesgwidthreceiver">
                <p className="msgsreceiver">
                    But why are you laughing..🤔
                </p>
                </p>

                <p className="mesgwidth mesgwidthsender">
                <span className="msgsender">
                    Because, You have become famous on social media now ..
                </span>
                </p>
                <p className="mesgwidth mesgwidthreceiver">
                <p className="msgsreceiver">
                    how told you that..??
                </p>
                </p>

                <p className="mesgwidth mesgwidthsender">
                <span className="msgsender">
                    Shwati told everyone about you..
                </span>
                </p>
                <p className="mesgwidth mesgwidthsender">
                <p className="picmsgsender">
                    <img src="https://i.pinimg.com/564x/8f/fc/ce/8ffcce58e3a83e1f8a576d427066239c.jpg"
                    alt="Not found" className="picmsgsender2"></img> 
                </p>
                </p>
                <p className="mesgwidth mesgwidthreceiver">
                <p className="msgsreceiver">
                    Who is Shwati..?? 🤔
                </p>
                </p>

                <p className="mesgwidth mesgwidthsender">
                <span className="msgsender">
                   Your best friend...😍
                </span>
                </p>
                <p className="mesgwidth mesgwidthsender">
                <p className="picmsgsender">
                    <img src="https://i.imgflip.com/2f0bzq.jpg"
                    alt="Not found" className="picmsgsender2"></img> 
                </p>
                </p>
                

                <p className="mesgwidth mesgwidthreceiver">
                <p className="msgsreceiver">
                    My best friend..??..I have only one best friend and that is you..
                </p>
                </p>
                <p className="mesgwidth mesgwidthreceiver">
                <p className="picmsgreceiver">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdPhQFGT8qZCBQsrlziiqlBIJKxoUgYHwMA&usqp=CAU"
                alt="Not found" className="picmsgreceiver2"></img>
                </p>
                </p> 

                
                
                <p className="mesgwidth mesgwidthsender">
                <p className="picmsgsender">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqtoFGLAqh2InVOzOiY9j7tUh7jvheJt1cdg&usqp=CAU"
                    alt="Not found" className="picmsgsender2"></img> 
                </p>
                </p>

                <p className="mesgwidth mesgwidthsender">
                <span className="msgsender">
                    thank you...
                </span>
                </p>

                <p className="mesgwidth mesgwidthreceiver">
                <p className="msgsreceiver">
                  now, i am going to somewhere, byebye.
                </p>
                </p>
                
                <p className="mesgwidth mesgwidthsender">
                <span className="msgsender">
                   Okk bye bye
                </span>
                </p>

                <p className="mesgwidth mesgwidthsender">
                <p className="picmsgsender">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoFUdupJzXXFnY4Txz_lUF1lbAMEZUFjEQ3A&usqp=CAU"
                    alt="Not found" className="picmsgsender2"></img> 
                </p>
                </p>

                { Msgs.map( (msgvalue, msgindex) =>{
                  
                  return(
                  
                    <p className="mesgwidth mesgwidthsender">
                    <p className="msgsender">
                      <Convmsgpage03 key = {msgindex} text ={msgvalue} 
                      ></Convmsgpage03>
                       </p>
                      </p>
                      );

                   })} 
                   

                  
                </div>
            </div>

   </> );
}

export default Convforalluser03;

