import { useState } from "react";

import { PrivateRouter } from "src/router";

import { TransactionForm } from "src/components/Dashboard/DashboardAddTransactionForm";
import { TransactionInput } from "src/components/Dashboard/DashboardAddTransactionForm/input";
import { DashboardNavBar } from "src/components/Dashboard/DashboardNavBar";

import { TitlePrimary } from "src/styles/components/Dashboard/DashboardTitle";
import { api } from "src/services/fetchApi";
import { TransactionButton } from "src/components/Dashboard/DashboardAddTransactionForm/button";
import { TransactionSwitchBoolean } from "src/components/Dashboard/DashboardAddTransactionForm/switchBoolean";

function DashBoardCreate({ auth }) {
  const [ title, setTitle ] = useState("");
  const [ category, setCategory ] = useState("");
  const [ value, setValue ] = useState(0);
  const [ isDecrement, setIsDecrement ] = useState(false);
  
  const headers = { authorization: auth.authorizationString };

  async function handlerSubmit(e) {
    e.preventDefault();

    const data = {
      title,
      category, 
      value,
      isDecrement
    };

    try {
      const response = await api.post("/session/create/transaction", data, { headers });

      if (response.status === 201) console.log("Created with successfuly");
      else console.log("Error with status: " + response.status);

    } catch (e) {
      console.log(e);
    }
  }

  return (
    <DashboardNavBar>
      <main style={{ margin: "60px 0" }}>
        <TitlePrimary style={{ textAlign: "center"}}>Adicionar nova transação!</TitlePrimary>

        <TransactionForm onSubmit={handlerSubmit}>
          <TransactionInput 
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            label="Titúlo"
            name="title"
          />
          <TransactionInput 
            type="text"
            onChange={(e) => setCategory(e.target.value)}
            label="Catégoria"
            name="category"
          />
          <TransactionInput 
            type="number"
            onChange={(e) => setValue(e.target.value)}
            label="Valor"
            name="value"
          />
          <TransactionSwitchBoolean label="Subtração ou adição?" setState={setIsDecrement}/>

          <TransactionButton text="Adicionar" type="submit"/>
        </TransactionForm>
      </main>
    </DashboardNavBar>
  )
}

export default PrivateRouter(DashBoardCreate);
