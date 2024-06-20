import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App(){
    let items = ["Bangalore", "Mumbai", "Chennai", "Pune", "Hyderabad", "Delhi", "Kolkata", "Jaipur", "Ahmedabad", "Surat",];
    const handleSelectItem = (item: string, index:number) => {console.log(item, index);}
    return <div>
        <ListGroup items= {items} heading='Cities' onSelectItem={handleSelectItem}/>
    </div>
}
export default App;