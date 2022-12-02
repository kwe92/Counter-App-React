import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
// import { Container } from '@mui/system';

function Counter(props) {

    const width = 110;

    //  elements and fill entire screen with the div
   const  mainDivStyle = {
        // div bg color
        backgroundColor: '#ede9e8',
        display: 'flex',
        alignItems: 'center',
        // the direction of your flex box | column or row
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        // needed to make dive take up entire screen
        position: 'fixed',
        top:0,
        left:0,
        
      }
      const headDiveStyle = {
        backgroundColor: '#a32cc4',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        }

    const buttonStyle = {width: width, backgroundColor: 'purple'}

    const [count, setCount] = useState(0);

    function increment(){
        setCount((val) => val + 1);
    }

    function decrement(){
        setCount((val)=> val !== 0 ? val - 1 : val = 0)
    }



return (

    <div style={mainDivStyle}>
    <div style={headDiveStyle}><h1 style = {{color:'white'}}>Counter App</h1></div>
    <p> Count: {count}</p>
    
    <Box sx = {{pb : 1}}>
        <Button sx = {buttonStyle} variant='contained' onClick={increment}>Increment</Button>
    </Box>
    <Button sx = {buttonStyle} variant='contained' onClick={decrement}>Decrement</Button>
    
</div>
)
}

const _id = document.getElementById("root");
const root = ReactDOM.createRoot(_id);
root.render(<Counter />)
