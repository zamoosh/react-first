import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import categories from "../../../vars/vars";

const schema = z.object({
  description: z.string().min(3).max(20).trim(),
  amount: z
    .number({ invalid_type_error: "amount must be number" })
    .min(0.01)
    .max(100_000)
    .positive(),
  category: z.enum(categories),
});

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
  categories: string[];
  onAdd: (expense: ExpenseFormData) => void;
}

function ExpenseForm({ categories, onAdd }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  // const onSubmit = (data: FieldValues) => {
  //   for (const key in data) {
  //     if (typeof data[key] === "string" && data[key] === "") data[key] = null;
  //   }
  //   onAdd(data);
  // };

  return (
    <>
      <div className="border p-3 mt-5">
        <h3>Expense Creation Form</h3>
        <form
          onSubmit={handleSubmit((data) => {
            onAdd(data);
            reset();
          })}
        >
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              {...register("description")}
              id="description"
              name="description"
              className={
                "form-control " + (errors.description && "border border-danger")
              }
              rows={6}
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="amount" className="form-label">
              Amount
            </label>
            <input
              {...register("amount", { valueAsNumber: true })}
              id="amount"
              name="amount"
              type="number"
              className={
                "form-control " + (errors.amount && "border border-danger")
              }
            />
          </div>

          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              {...register("category")}
              className={
                "form-select " + (errors.category && "border border-danger")
              }
              id="category"
              name="category"
              aria-label="Default select example"
            >
              <option>-- no value --</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <button
            disabled={!isValid}
            className={
              "btn " + (!isValid ? "btn-outline-success" : "btn-success")
            }
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default ExpenseForm;
