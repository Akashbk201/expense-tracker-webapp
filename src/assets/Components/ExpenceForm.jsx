import React from "react";
import { useForm } from "react-hook-form";

function ExpenceForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   const onSubmit = (data) => {
  //     console.log("Form Data:", data);
  //   };

  return (
    <>
      <div className="container m-auto px-6 ">
        <div className="input-box w-4/5 m-auto">
          <form action="#" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
              <div className="col-span-4 md:col-span-8 lg:col-span-12">
                <h2 className="header-text">Expense Tracker</h2>
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  Add New Expense
                </h3>
              </div>
              <div className="col-span-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Month
                </label>
                <div className="relative">
                  <input
                    {...register("month", { required: true })}
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                    placeholder="Enter description"
                  />
                  {errors.month && (
                    <span className="text-red-400 text-sm font-light">
                      This field is required
                    </span>
                  )}
                </div>
              </div>
              <div className="col-span-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Amount
                </label>
                <div className="relative">
                  <input
                    {...register("amount", {
                      required: true,
                      maxLength: 5,
                    })}
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                    placeholder="Enter Amount"
                  />
                  {errors.amount?.type === "required" && (
                    <span className="text-red-400 text-sm font-light">
                      This field is required
                    </span>
                  )}
                  {errors.amount?.type === "maxLength" && (
                    <span className="text-red-400 text-sm font-light">
                      Not More then 5 Charectar!
                    </span>
                  )}
                </div>
              </div>
              <div className="col-span-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <div className="relative">
                  <input
                    {...register("category", { required: true })}
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                    placeholder="Enter Category"
                  />
                  {errors.category && (
                    <span className="text-red-400 text-sm font-light">
                      This field is required
                    </span>
                  )}
                </div>
              </div>

              <div className="col-span-4 md:col-span-8 lg:col-span-12">
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center cursor-pointer"
                >
                  Add Expense
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ExpenceForm;
