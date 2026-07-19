import { useForm } from "react-hook-form";
import { Card } from "../components/card";

type SigninInput = {
  mode: "signin";
  email: string;
  password: string;
};

export function Signin() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SigninInput>();

  const onSubmit = async (data: SigninInput) => {
    console.log(data);
  };

  return (
    <Card
      mode="signin"
      register={register}
      // errors={errors}
      isSubmitting={isSubmitting}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
}
