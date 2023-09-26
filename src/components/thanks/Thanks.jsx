import './Thanks.scss'

import {BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill} from 'react-icons/bs'

function Thanks({data}) {

  const emojiData = {
    unsatified: <BsFillEmojiFrownFill/>,
    neutral: <BsFillEmojiNeutralFill/>,
    satisfied: <BsFillEmojiSmileFill/>,
    love: <BsFillEmojiHeartEyesFill/>
  }


  return (
    <div className='thanks'>
      <h1>Falta pouco...</h1>
      <p>A sua opinião é muito importante, em breve você receberá um cupom de 10% de desconto para a sua próxima compra.</p>
      <p>Para concluir sua avaliação clique no botão de Enviar abaixo.</p>
      <h3>Aqui está o resumo da sua avaliação {data.name}:</h3>

      <div className="avaliation">
        <p><span>Satisfação com o produto: </span>{emojiData[data.review]}</p>
        <p><span>Comentário: </span>{data.comment}</p>
      </div>
    </div>
  )
}

export default Thanks