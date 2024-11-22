import { nanoid } from "nanoid";
import { Expense } from "../ExpenseInterface.ts";

interface Props {
  expense: Expense[];
  onDelete: (id: number) => void;
}

function ExpenseList({ expense, onDelete }: Props) {
  if (expense.length === 0) return null;

  return (
    <table className="table table-hover table-bordered">
      <thead>
        <tr>
          <th scope="col">description</th>
          <th scope="col">amount</th>
          <th scope="col">category</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {expense.map((expense) => (
          <tr key={nanoid()}>
            <th>{expense.description}</th>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            $
            {expense
              .reduce((acc, expense) => expense.amount + acc, 0)
              .toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
}

export default ExpenseList;
