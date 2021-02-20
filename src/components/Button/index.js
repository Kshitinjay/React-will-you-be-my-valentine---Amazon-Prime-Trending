import React from 'react';

const Button = ({counter,setCounter,length}) => {
   let handleNext=()=>{
     setCounter(counter=>counter+1);
    }
   let handlePrev=()=>{
    setCounter(counter=>counter-1)
    }
   let handleRestart=()=>{
   setCounter(0);
    }
    return (
        <div>
            <button 
            data-testid="button-prev" 
            onClick={handlePrev}
            disabled={(counter==0)}
            >Prev</button>
            <button data-testid="button-restart" onClick={handleRestart} disabled={(counter==0)}>Restart</button>
            <button 
            data-testid="button-next" 
            onClick={handleNext}
            disabled={counter==length-1}
            >Next</button>
        </div>
    );
};

export default Button;