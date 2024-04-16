import './App.css';
import {useState} from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import AboutMe from "./components/Bio";
import Message from "./components/Message";
import Table from "./components/Table";
import listContent from "./components/content/ListContent.json"

function App(){
  const [alertVisable, setAlertVisable] = useState(false)

  return (<div>
    {Navbar()}
    <div className="content">
    {Message()}
    {alertVisable && <Alert onClose={() => setAlertVisable(false)}>I TOLD YOU!</Alert>}
    <Button color='secondary' onClick={() => setAlertVisable(true)}>DO NOT CLICK ME!</Button>
    {renderList()}
    <section id="bio">{AboutMe()}</section>
    <section id="resume">{Table()}</section>
    </div>
  </div>)
}

function renderList() {

  const handleSelectItem = (item: string) => {
    console.log(item)
  }
  
  return <div>
    <ListGroup items={listContent.Cities} heading='Cities' onSelectItem={handleSelectItem}/>
    <ListGroup items={listContent.Colors} heading='Colors' onSelectItem={handleSelectItem}/>
    <ListGroup items={[]} heading='empty list' onSelectItem={handleSelectItem}/>
  </div>
}

export default App