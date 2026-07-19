import { motion } from "motion/react";

export function Card({ mode, register, onSubmit, isSubmitting }) {
  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl border border-gray-200">
      <h1 className="text-3xl font-bold text-center mb-6">
        {mode === "signup" ? "Create Account" : "Welcome Back"}
      </h1>

      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        {mode === "signup" && (
          <>
            <div className="flex flex-col gap-1">
              <label className="font-medium">Name</label>
              <input
                {...register("name")}
                className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium">Phone</label>
              <input
                {...register("phone")}
                className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              />
            </div>
          </>
        )}

        <div className="flex flex-col gap-1">
          <label className="font-medium">Email</label>
          <input
            {...register("email")}
            className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-medium">Password</label>
          <input
            type="password"
            {...register("password")}
            className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
          />
        </div>

        <div className=" mx-auto ">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            value={isSubmitting ? "Submitting" : "Submit"}
            disabled={isSubmitting}
            className="mt-2 rounded-lg bg-blue-600 py-2 px-4 w-40 font-semibold cursor-pointer  text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {mode === "signup" ? "Sign Up" : "Login"}
          </motion.button>
        </div>
      </form>
    </div>
  );
}
