import ExpenceForm from "./ExpenceForm";

function List({ expenceList, onDelete }) {
  const totalAmount = expenceList.reduce(
    (prev, current) => prev + Number(current.amount),
    0
  );
  return (
    <>
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-4 md:col-span-8 lg:col-span-12">
              <div className="box-cont">
                <div className="data-items">
                  <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                    <div className="col-span-4 lg:col-span-3">
                      <div className="text-left text-lg text-gray-800 font-normal py-2">
                        <p>Category</p>
                      </div>
                    </div>
                    <div className="col-span-4 lg:col-span-3">
                      <div className="text-left text-lg text-gray-800 font-normal py-2">
                        <p>Month</p>
                      </div>
                    </div>
                    <div className="col-span-4 lg:col-span-3">
                      <div className="text-left text-lg text-gray-800 font-normal py-2">
                        <p>Amount</p>
                      </div>
                    </div>
                    <div className="col-span-4 lg:col-span-3">
                      <div className="text-right">
                        <p className="text-right text-lg text-gray-800 font-normal py-2">
                          Add/Remove
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="data-items">
                  {expenceList.length === 0 ? (
                    <p>No Data to Show!</p>
                  ) : (
                    expenceList.map((data) => (
                      <div
                        className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12"
                        key={data.id}
                      >
                        <div className="col-span-4 lg:col-span-3">
                          <div className="text-left text-lg text-gray-800 font-normal py-2">
                            <p>{data.category}</p>
                          </div>
                        </div>
                        <div className="col-span-4 lg:col-span-3">
                          <div className="text-left text-lg text-gray-800 font-normal py-2">
                            <p>{data.month}</p>
                          </div>
                        </div>
                        <div className="col-span-4 lg:col-span-3">
                          <div className="text-left text-lg text-gray-800 font-normal py-2">
                            <p>{data.amount}</p>
                          </div>
                        </div>
                        <div className="col-span-4 lg:col-span-3">
                          <div className="text-right">
                            <button
                              className="inline-block text-base font-semibold bg-red-500 text-white px-4 py-1 text-center cursor-pointer rounded-xl"
                              onClick={() => onDelete(data.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                  <div className="col-span-4 d:col-span-8 lg:col-span-12">
                    <p className="text-right text-lg font-black">
                      Total:
                      <span>${totalAmount.toFixed(2)}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default List;
