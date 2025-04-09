import { useState } from "react";
import "./App.css";
import List from "./assets/Components/List";
import ExpenceForm from "./assets/Components/ExpenceForm";

function App() {
  const [expenceList, setexpenceList] = useState([
    {
      id: 1,
      month: "January",
      amount: 25,
      category: "Food",
    },
    {
      id: 2,
      month: "February",
      amount: 250,
      category: "Travel",
    },
    {
      id: 3,
      month: "February",
      amount: 40,
      category: "Shopping",
    },
    {
      id: 4,
      month: "March",
      amount: 300,
      category: "Rent",
    },
  ]);
  return (
    <>
      <ExpenceForm
        onSubmit={(newExpenceList) =>
          setexpenceList([
            ...expenceList,
            { ...newExpenceList, id: expenceList.length + 1 },
          ])
        }
      />
      <List
        expenceList={expenceList}
        onDelete={(id) =>
          setexpenceList(expenceList.filter((data) => data.id !== id))
        }
      />
    </>
  );
}

export default App;
