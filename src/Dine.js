import React, {useState} from 'react';




function Dine({onAddItem}){
const [date, setDate] = useState("mm/dd/yy");
const [seatNumber, setSeat] = useState("");
const [foodCategory, setFood] = useState("");

function handleSubmit(e){
    e.preventDefault();
    const newItem ={
        date: date,
        seatNumber: seatNumber,
        foodCategory: foodCategory,
    };
   fetch("https://secure-badlands-04927.herokuapp.com/booked",{
       method: "POST",
       headers: {
           "Content-Type": "application/json",
           
       },
       body: JSON.stringify(newItem),
   })
   .then((r)=> r.json())
   .then((newData) => onAddItem(newData));

//    console.log(newItem);
//    console.log(food);

}

    return(
    <div>
    <div>
     <h1 className = "hello">Dine with us</h1>
     </div>
     <form className = "controlForm"
     onSubmit = {handleSubmit}>
         <label>
             Date:
             <input type = "date" name="date" value={date} onChange={(e) =>setDate(e.target.value)} />
         </label>
         <label>
            Seat Number:
            <input type="number" name= "seat" value={seatNumber} onChange={(e) =>setSeat(e.target.value)}/>
         </label>
         <label>
             Food Category:
             <input type="text" name= "food" value={foodCategory} onChange={(e) => setFood(e.target.value)}/>
         </label>
         
         <label>
             <input type="submit" name="Submit" />
         </label>
         </form>
         </div>
    )

}

export default Dine;