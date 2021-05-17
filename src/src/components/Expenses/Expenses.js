import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.expensesItens[0].title}
        amount={props.expensesItens[0].amount}
        date={props.expensesItens[0].date}
      />
    </Card>
  );
}

export default Expenses;
