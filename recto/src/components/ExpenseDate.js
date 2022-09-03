import './ExpenseDate.css';
function ExpenseDate(props){
    const month = props.date.toLocaleString('en-US',{month:'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US',{day:'2-digit'});

    return (
        <div className="expense-date">
        <div expense-date__month>{month}</div>
        <div expense-date_year>{year}</div>
        <div expense-date__day >{day}</div>
    </div>
    );
}

export default ExpenseDate;