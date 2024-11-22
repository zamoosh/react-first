import { useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
});

type FormData = z.infer<typeof schema>;

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setFocus,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  useEffect(() => {
    setFocus("name");
  });

  useEffect(() => {
    document.title = "My app";
  });

  return (
    <div className={"container mt-3"}>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="mb-3">
          <label className="form-label" htmlFor={register("name").name}>
            Name
          </label>
          <input
            id={register("name").name}
            {...register("name")}
            className={
              "form-control " + (errors.name && "border border-danger")
            }
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor={register("email").name}>
            Email
          </label>
          <input
            id={register("email").name}
            {...register("email")}
            className={
              "form-control " + (errors.name && "border border-danger")
            }
          />
        </div>

        <button disabled={!isValid} className={"btn btn-" + (isValid ? "success": "outline-danger")}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
