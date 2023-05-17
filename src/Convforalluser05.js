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


function Convforalluser05 () 
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


    const Convmsgpage05 = (propsformsg01) =>{

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
              <span className="SendTouser"> Send to Satya</span>
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
                    Hii Satya
                </p>
                </p>
                
                <p className="mesgwidth mesgwidthsender">
                <p className="picmsgsender">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9eZOHzDtt6fWNiRxV4K0pQwmTsmkHP5JaA&usqp=CAU"
                    alt="Not found" className="picmsgsender2"></img> 
                </p>
                </p>
                <p className="mesgwidth mesgwidthreceiver">
                <p className="picmsgreceiver">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7U9_icoMvcml6mBfmupkHZki7msgQnBs2Cw&usqp=CAU"
                alt="Not found" className="picmsgreceiver2"></img>
                </p>
                </p>

                <p className="mesgwidth mesgwidthsender">
                <p className="picmsgsender">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUP12K7BCV4qzoP4079hEdGJJUUnz6M_HINg&usqp=CAU"
                    alt="Not found" className="picmsgsender2"></img> 
                </p>
                </p>
                <p className="mesgwidth mesgwidthreceiver">
                <p className="picmsgreceiver">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUYUS3xBgQwzNzo_VYtiEQkPfEkYqJoBOBhw&usqp=CAU"
                alt="Not found" className="picmsgreceiver2"></img>
                </p>
                </p>

                <p className="mesgwidth mesgwidthsender">
                <p className="picmsgsender">
                    <img src="https://filmdaily.co/wp-content/uploads/2020/07/laugh-lede-1300x731.jpg"
                    alt="Not found" className="picmsgsender2"></img> 
                </p>
                </p>
                <p className="mesgwidth mesgwidthreceiver">
                <p className="picmsgreceiver">
                <img src="https://images.unsplash.com/photo-1587428599384-f67a2092769a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c2FkJTIwd3JpdGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                alt="Not found" className="picmsgreceiver2"></img>
                </p>
                </p>

                <p className="mesgwidth mesgwidthsender">
                <p className="picmsgsender">
                    <img src="https://img.republicworld.com/republic-prod/stories/promolarge/xxhdpi/duc2kikqhnxzpocl_1594892354.jpeg?tr=w-758,h-433"
                    alt="Not found" className="picmsgsender2"></img> 
                </p>
                </p>
                
                { Msgs.map( (msgvalue, msgindex) =>{
                  
                  return(
                  
                    <p className="mesgwidth mesgwidthsender">
                    <p className="msgsender">
                      <Convmsgpage05 key = {msgindex} text ={msgvalue} 
                      ></Convmsgpage05>
                       </p>
                      </p>
                      );

                   })} 
                   

                  
                </div>
            </div>

   </> );
}

export default Convforalluser05;

