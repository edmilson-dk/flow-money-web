import { useState } from "react";

import { PrivateRouter } from "src/router";
import { api } from "src/services/fetchApi";
import { TransactionForm } from "src/components/Dashboard/DashboardAddTransactionForm";
import { TransactionInput } from "src/components/Dashboard/DashboardAddTransactionForm/input";
import { DashboardNavBar } from "src/components/Dashboard/DashboardNavBar";
import { TransactionButton } from "src/components/Dashboard/DashboardAddTransactionForm/button";
import { TransactionSwitchBoolean } from "src/components/Dashboard/DashboardAddTransactionForm/switchBoolean";
import { DashboardModalSuccessOrError } from "src/components/Dashboard/DashboardModalSuccessOrError";
import { TitlePrimary } from "src/styles/components/Dashboard/DashboardTitle";

function DashBoardCreate({ auth }) {
  const [ title, setTitle ] = useState("");
  const [ category, setCategory ] = useState("");
  const [ value, setValue ] = useState(0);
  const [ isDecrement, setIsDecrement ] = useState(false);
  const [ isOpenModal, setIsOpenModal ] = useState(false);
  const [ isSuccess, setIsSuccess ] = useState(false);
  
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

      if (response.status === 201) {
        setIsOpenModal(true);
        setIsSuccess(true);
      }
    } catch (e) {
      setIsOpenModal(true);
      setIsSuccess(false);
    }
  }

  return (
    <>
      {
        isOpenModal && ( isSuccess ?  (
          <DashboardModalSuccessOrError 
            title="Sua transação foi adicionada"
            message="Os dados da transação já estão disponivéis para análise."
            isSuccess={true}
            setIsOpen={setIsOpenModal}
          />
        ) : (
          <DashboardModalSuccessOrError 
            title="Error em adicionar transação"
            message="Infelizmente não foi possivel adicionar sua transação, tente novamente se possivel."
            isSuccess={false}
            setIsOpen={setIsOpenModal}
          />
        ))
      }
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
            <TransactionSwitchBoolean setState={setIsDecrement}/>

            <TransactionButton text="Adicionar" type="submit"/>
          </TransactionForm>
        </main>
      </DashboardNavBar>
    </>
  )
}

export default PrivateRouter(DashBoardCreate);