import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";

const schema = z.object({
  name: z.string().min(3, { message: "name must be 3 chars" }),
  age: z
    .number({ invalid_type_error: "age is required" })
    .min(18, { message: "age must be at least 18" }),
});

type FormData = z.infer<typeof schema>;

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form name="register" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          name="name"
          type="text"
          className="form-control"
        />
        {errors.name && (
          <small className="text-danger">{errors.name?.message}</small>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          name="age"
          type="number"
          className="form-control"
        />
        {errors.age && (
          <small className="text-danger">{errors.age.message}</small>
        )}
      </div>

      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
