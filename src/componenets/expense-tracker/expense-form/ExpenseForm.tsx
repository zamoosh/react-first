import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";

const schema = z.object({
  name: z.string().trim().min(1),
  description: z.string().trim().nullable(),
  amount: z.number({ invalid_type_error: "amount must be number" }).positive(),
  category: z.string().trim(),
});

type formData = z.infer<typeof schema>;

interface Props {
  categories: string[];
}

function ExpenseForm({ categories }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<formData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    for (const key in data) {
      if (typeof data[key] === "string" && data[key] === "") data[key] = null;
    }
    console.log(data);
  };

  return (
    <>
      <div className="border p-3 mt-5">
        <h3>Expense Creation Form</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              {...register("name")}
              id="name"
              name="name"
              type="text"
              className={
                "form-control " + (errors.name && "border border-danger")
              }
            />
          </div>

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
                <option key={c} value={c}>{c}</option>
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
