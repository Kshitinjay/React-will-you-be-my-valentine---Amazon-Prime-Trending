import React,{useState} from 'react';
import Display from "../Display";
import Button from "../Button";

const Container = ({slides}) => {
    const [counter,setCounter]=useState(0);
    return (
        <div>
            <Display title={slides[counter].title} text={slides[counter].text}/>
            <Button counter={counter} setCounter={setCounter} length={slides.length}/>
        </div>
    );
};

export default Container;