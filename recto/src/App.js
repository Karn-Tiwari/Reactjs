import React from 'react';
import Expenses from "./components/Expences/Expenses";


function App(){
    // let expenseDate = new Date(2022,9,3);
    // let expenseTitle = "College Fee";
    // let expenseAmount = 300;
    // Ab main yaha pe array of object banayenge
    let expenses = [
        {
            id:'e1',
            title:'School Fee',
            amount: 750,
            date: new Date(2022,9,1)
        },
        {
            id:'e2',
            title:'Hostel Fee',
            amount: 2400,
            date: new Date(2022,4,12)
        },
        {
            id:'e3',
            title:'Mess Fee',
            amount: 1200,
            date: new Date(2022,10,23)
        },
        {
            id:'e4',
            title:'Room Fee',
            amount: 800,
            date: new Date(2022,12,28)
        }
    ];

    return (
        <div>
            <h2>Lets get started</h2>
       <Expenses item = {expenses}/>
        </div>
    );
}

export default App;