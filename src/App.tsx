import { useEffect, useRef } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(10),
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
    setFocus("name")
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
            // ref={ref}
            className={
              "form-control " + (errors.name && "border border-danger")
            }
          />
        </div>

        <button disabled={!isValid} className="btn btn-outline-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
