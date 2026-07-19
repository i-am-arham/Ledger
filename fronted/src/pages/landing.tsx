import { motion } from "motion/react";

export function Landing() {
  return (
    <>
      <div className=" h-screen w-[80%] mx-auto mt-5 ">
        {/*Header*/}
        <div className="flex justify-between ">
          <div className=" font-bold text-slate-800 text-2xl hover:text-neutral-500 transition duration-300 cursor-pointer ">
            ledgerpay
          </div>
          <div className="flex gap-5  ">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className=" cursor-pointer border px-4 rounded py-2 bg-neutral-50 text-blue-600 "
            >
              Login
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="cursor-pointer border px-4 py-2 rounded  text-neutral-50 bg-blue-600   "
            >
              Signup
            </motion.button>
          </div>
        </div>

        {/*Hero*/}

        <div className="">
          <p className=" text-5xl selection:bg-blue-600 selection:text-neutral-50 tracking-tight  mt-20 text-transparent w-[80%] bg-linear-to-b from-neutral-700 to-neutral-400 bg-clip-text ">
            Financial infrastructure to grow your revenue. Accept payments,
            offer financial services, and implement custom revenue models—from
            your first transaction to your billionth
          </p>
          <div className="mt-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="border  px-6 py-3 rounded bg-blue-600 cursor-pointer text-neutral-50 font-bold  "
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}
