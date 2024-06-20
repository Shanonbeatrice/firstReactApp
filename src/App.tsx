import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";

function App(){
    let items = ["Bangalore", "Mumbai", "Chennai", "Pune", "Hyderabad", "Delhi", "Kolkata", "Jaipur", "Ahmedabad", "Surat",];
    const handleSelectItem = (item: string, index:number) => {console.log(item, index);}
    const onClick = () => {setAlertVisibility(true);}
    const onClose =() => {setAlertVisibility(false);}

    const [alertVisible,setAlertVisibility] = useState(false)
    return <div>
        <ListGroup items= {items} heading='Cities' onSelectItem={handleSelectItem}/>
        {alertVisible && <Alert onClose={onClose}>
            <span>Names of various Indian Cities</span>
        </Alert>  }
        <Button color="primary" onClick={onClick} > 
            click here
        </Button>
    </div>
}
export default App;