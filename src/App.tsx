// import { useState } from "react";
// import { nanoid } from "nanoid";
// import { produce } from "immer";
// import Form from "./componenets/FormComponent/Form";
// import { produce } from "immer";
import ExpenseList from "./componenets/expense-tracker/expense-list/ExpenseList.tsx";
import { useState } from "react";
import ExpenseFilter from "./componenets/expense-tracker/expense-list/ExpenseFilter.tsx";
import ExpenseForm from "./componenets/expense-tracker/expense-form/ExpenseForm.tsx";
import categories from "./vars/vars.ts";

function App() {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Groceries" },
    { id: 3, description: "ccc", amount: 10, category: "Entertainment" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);

  let visibleExpenses = [...expenses];
  if (selectedFilter.length > 0)
    visibleExpenses = expenses.filter((e) => e.category === selectedFilter);

  return (
    <div className={"container mt-3"}>
      <ExpenseFilter
        onSelectCategory={(category: string) => setSelectedFilter(category)}
      />

      <ExpenseList
        expense={visibleExpenses}
        onDelete={(id: number) =>
          setExpenses(expenses.filter((e) => e.id !== id))
        }
      />

      <ExpenseForm
        categories={[...categories]}
        onAdd={expense => setExpenses([...expenses, {...expense, id: expenses.length + 1}])}
      />
    </div>
  );
}

export default App;
