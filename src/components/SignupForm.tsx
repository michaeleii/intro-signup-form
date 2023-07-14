import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import Error from "./Error";
import ErrorIcon from "./ErrorIcon";

const schema = z.object({
  firstName: z.string().nonempty({ message: "First name cannot be empty" }),
  lastName: z.string().nonempty({ message: "Last name cannot be empty" }),
  email: z
    .string()
    .nonempty({ message: "Email cannot be empty" })
    .email({ message: "Looks like this is not an email" }),
  password: z
    .string()
    .nonempty({ message: "Password cannot be empty" })
    .min(8, {
      message: "Password must be 8 characters or longer",
    }),
});

type FormData = z.infer<typeof schema>;

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    const output = JSON.stringify(data, null, 2);
    alert(output);
  };
  console.log(errors);
  return (
    <form
      className="flex flex-col gap-5 rounded-lg bg-white p-10 text-[hsl(249_10%_26%)] drop-shadow-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="relative">
        <input
          type="text"
          id="firstName"
          {...register("firstName")}
          placeholder="First Name"
          className={
            "w-full rounded-lg border-2 p-5 pr-12 font-semibold tracking-wide" +
            (errors.firstName?.message
              ? " border-[hsl(0_100%_74%)]"
              : "border-[hsl(246_25%_77%)]")
          }
        />
        {errors.firstName?.message && (
          <>
            <span className="absolute right-4 top-1/4">
              <ErrorIcon />
            </span>
            <Error message={errors.firstName.message} />
          </>
        )}
      </div>
      <div className="relative">
        <input
          type="text"
          id="lastName"
          {...register("lastName")}
          placeholder="Last Name"
          className={
            "w-full rounded-lg border-2 p-5 pr-12 font-semibold tracking-wide" +
            (errors.lastName?.message
              ? " border-[hsl(0_100%_74%)]"
              : "border-[hsl(246_25%_77%)]")
          }
        />
        {errors.lastName?.message && (
          <>
            <span className="absolute right-4 top-1/4">
              <ErrorIcon />
            </span>
            <Error message={errors.lastName.message} />
          </>
        )}
      </div>
      <div className="relative">
        <input
          type="email"
          id="email"
          {...register("email")}
          placeholder="Email Address"
          className={
            "w-full rounded-lg border-2 p-5 pr-12 font-semibold tracking-wide" +
            (errors.email?.message
              ? " border-[hsl(0_100%_74%)]"
              : "border-[hsl(246_25%_77%)]")
          }
        />
        {errors.email?.message && (
          <>
            <span className="absolute right-4 top-1/4">
              <ErrorIcon />
            </span>
            <Error message={errors.email.message} />
          </>
        )}
      </div>
      <div className="relative">
        <input
          type="password"
          id="password"
          {...register("password")}
          placeholder="Password"
          className={
            "w-full rounded-lg border-2 p-5 pr-12 font-semibold tracking-wide" +
            (errors.password?.message
              ? " border-[hsl(0_100%_74%)]"
              : "border-[hsl(246_25%_77%)]")
          }
        />

        {errors.password?.message && (
          <>
            <span className="absolute right-4 top-1/4">
              <ErrorIcon />
            </span>
            <Error message={errors.password.message} />
          </>
        )}
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="w-full rounded-lg
bg-[hsl(154_59%_51%)] p-5 font-semibold uppercase tracking-widest text-white drop-shadow-lg transition-colors hover:bg-[hsl(154,77%,57%)]"
        >
          Claim your free trial
        </button>
      </div>
      <p className="text-center text-sm text-[hsl(246_25%_77%)]">
        By clicking the button, you are agreeing to our{" "}
        <a href="#" className="font-bold text-[hsl(0_100%_74%)]">
          Terms and Services
        </a>
      </p>
    </form>
  );
}
export default SignupForm;
