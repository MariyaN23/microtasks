import React from 'react';
import './App.css';
import {Button} from './components/Button';

function App() {

    const Button1Foo =(subsciber:string, age:number)=> {
        console.log(subsciber, age)
    }
    const Button2Foo =(subsciber:string, age:number)=> {
        console.log(subsciber, age)
    }
    const Button3Foo =()=>{
        console.log('z negfz ryjgrf')
    }

    return (
        <div className="App">
            <Button name={'MyYoutubeChannel-1'} callBack={()=>Button1Foo("I'm Vasya", 21)}/>
            <Button name={'MyYoutubeChannel-2'} callBack={()=>Button2Foo("I'm Ivan", 54)}/>
            <Button name={'MyYoutubeChannel-3'} callBack={Button3Foo}></Button>
        </div>
    );
}

export default App;