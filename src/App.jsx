import './styles/globals.scss'

// libraries
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import {FiSend} from 'react-icons/fi'

// components
import UserForm from './components/userform/UserForm'
import ReviewFrom from './components/reviewform/ReviewForm'
import Thanks from './components/thanks/Thanks'
import Steps from './components/steps/Steps'

// hooks
import { useForm } from './hooks/useForm'
import { useState } from 'react'

function App() {

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return {...prev, [key]: value}
    })
  }

  const formTemplate = {
    name: "",
    review: "",
    comment: ""
  }
  const[data, setData] = useState(formTemplate)

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler}/>,
    <ReviewFrom data={data} updateFieldHandler={updateFieldHandler}/>,
    <Thanks data={data}/>
  ]

  const {currentStep, currentComponent, changeStep} = useForm(formComponents)

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto</p>
      </div>

      <div className="form-container">
        <Steps currentStep={currentStep}/>
        <form  onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>

          <div className="actions">
            {currentStep > 0 ? <button type='button' onClick={() => changeStep(currentStep - 1)}>Voltar</button> : <></>}

            <button type="submit">{currentStep == formComponents.length -1 ? <>Enviar <FiSend/></> : <>Avançar <GrFormNext/></>}</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default App
