import { MouseEvent } from "react";
import { useState } from "react";
interface Props{
    items: string[];
    heading: string;
    onSelectItem: (item: string,index:number) => void;
}

function ListGroup({items,heading,onSelectItem}: Props) {
 
  
  //items = [];
  //Hook
  let [selectedIndex , setSelectedIndex] = useState<number>(-1);// if the componenet is mentioned twice their states will be independent of eachother
  const message = items.length === 0 ? <p>There are no items</p> : null;
    const handleClick = (event: MouseEvent) => console.log(event)
  return (
    // Fragment
    <>
      <h1>{heading}</h1>
      {/* {message}  */}
      {items.length === 0 && <p>There are no items</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            key={item}
            onClick={() => {setSelectedIndex(index);
                onSelectItem(item ,index)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
