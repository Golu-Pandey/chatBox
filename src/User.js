
import React, { useState } from 'react';

import Converpage from './Converpage';

/*import Convmsgpage from './Convmsgpage';*/

import Button from '@material-ui/core/Button';

import AddIcon from '@material-ui/icons/Add';


import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import Convforalluser from './Convforalluser';
import Convforalluser01 from './Convforalluser01';
import Convforalluser02 from './Convforalluser02';
import Convforalluser03 from './Convforalluser03';
import Convforalluser04 from './Convforalluser04';
import Convforalluser05 from './Convforalluser05';

const User = () =>{
         
    const[InputItem, setInputItem] = useState(" ");

    const[Items, setItems] =useState([]);

    const[CURRconve, setCURRconve] =useState(" ");

    const ItemE = (event) =>{
        setInputItem(event.target.value);
        
      };

    const listofItem = () =>{
        setItems((oldItems) => {

          return (
              [InputItem, ...oldItems]
         ) })


        setInputItem(" ") ;
    };

    
    const Conver01 = () =>
    {
        setCURRconve(<>
            <div className="Currusernav">
                <span className="Currusername">Shweta singh</span>
                </div>
                <div className="Convforalluser">
                    <Convforalluser01></Convforalluser01>
                </div>
            
            </>)

       
    };

    const Conver02 = () =>
    {
        setCURRconve(<>
            <div className="Currusernav">
                <span className="Currusername">Raghav raj</span>
                </div>
                <div className="Convforalluser">
                    <Convforalluser02></Convforalluser02>
                </div>
            </>)
    };

    const Conver03 = () =>
    {
        setCURRconve(<>
            <div className="Currusernav">
                <span className="Currusername">Ramanand Pandey</span>
                </div>
                <div className="Convforalluser">
                    <Convforalluser03></Convforalluser03>
                </div>
            </>)
    };

    const Conver04 = () =>
    {
        setCURRconve(<>
            <div className="Currusernav">
                <span className="Currusername">Yuvraj singh</span>
                </div>
                <div className="Convforalluser">
                    <Convforalluser04></Convforalluser04>
                </div>
            </>)
    };

    const Conver05 = () =>
    {
        setCURRconve(<>
            <div className="Currusernav">
                <span className="Currusername">Satya singh</span>
                </div>
                <div className="Convforalluser">
                    <Convforalluser05></Convforalluser05>
                </div>
            </>)
    };


    return(
        <>
             <div>{CURRconve}</div>
          <div className="ALLADDEDUSER">
            <div className="ADDNEWUSER">
                <input 
                type ="text" 
                onChange ={ItemE} 
                value ={InputItem} 
                placeholder = "Add an Items " 
                className="USERDET"
                />

                <Button onClick ={listofItem}
                  > 
                    <AddIcon className="Addbtn"> </AddIcon>
                </Button>
                
                <span className="ADDnew">Add new </span>
               </div>

                 <div className="ALLADDEDUSERPresent">
                   <div className="USEDETAIL" onClick={Conver01}>
                       <RadioButtonUncheckedIcon className="USERCIR"></RadioButtonUncheckedIcon>
                       <AccountCircleIcon className="USERACC"></AccountCircleIcon>
                       <span className="USERNAME"> Shweta singh</span>
                    </div>

                   <div className="USEDETAIL" onClick={Conver02}>
                       <RadioButtonUncheckedIcon className="USERCIR"></RadioButtonUncheckedIcon>
                       <AccountCircleIcon className="USERACC"></AccountCircleIcon>
                       <span className="USERNAME"> Raghav raj</span>
                    </div>

                   <div className="USEDETAIL" onClick={Conver03}>
                       <RadioButtonUncheckedIcon className="USERCIR"></RadioButtonUncheckedIcon>
                       <AccountCircleIcon className="USERACC"></AccountCircleIcon>
                       <span className="USERNAME"> Ramanand Pandey</span>
                    </div>

                   <div className="USEDETAIL" onClick={Conver04}>
                       <RadioButtonUncheckedIcon className="USERCIR"></RadioButtonUncheckedIcon>
                       <AccountCircleIcon className="USERACC"></AccountCircleIcon>
                       <span className="USERNAME"> Yuvraj singh</span>
                    </div>

                   <div className="USEDETAIL" onClick={Conver05}>
                       <RadioButtonUncheckedIcon className="USERCIR"></RadioButtonUncheckedIcon>
                       <AccountCircleIcon className="USERACC"></AccountCircleIcon>
                       <span className="USERNAME"> Satya singh</span>
                    </div>
                   
                   
                  { Items.map( (itemvalue, index) =>{
                  
                return(
                <div 
                onClick={ () =>{

                    setCURRconve(<>
                    <div className="Currusernav">
                        <span className="Currusername">{itemvalue} </span>
                        </div>
                        <div className="Convforalluser">
                       <Convforalluser></Convforalluser>
                            
                        </div>
                    </>)
                    
                }}  
                >
                    <div className="USEDETAIL">
                       <RadioButtonUncheckedIcon className="USERCIR"></RadioButtonUncheckedIcon>
                       <AccountCircleIcon className="USERACC"></AccountCircleIcon>
                       <span className="Username"> 
                       <Converpage key = {index} text ={itemvalue} 
                    ></Converpage>
                       </span>
                      
                    </div>
                    
                    </div>);
                 })}
                  
             <br />
             </div>
          </div>
        </>
          )
};

export default  User;
