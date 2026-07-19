import { useForm } from "react-hook-form";
import { Card } from "../components/card";

type SignupInput = {
  mode: "signup";
  name: string;
  phone: string;
  email: string;
  password: string;
};

export function Signup() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignupInput>();

  const onSubmit = async (data: SignupInput) => {
    console.log(data);
  };

  return (
    <Card
      mode="signup"
      register={register}
      // errors={errors}
      isSubmitting={isSubmitting}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
}
