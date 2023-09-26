import './UserForm.scss'

function UserForm({data, updateFieldHandler}) {
  return (
    <div className='user-form'>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input type="text" name='name' id='name' placeholder='Digite seu nome' required value={data.name || ""} onChange={(e) => updateFieldHandler("name", e.target.value)}/>
      </div>

      <div className="form-control">
        <label htmlFor="email">E-mail:</label>
        <input type="email" name="email" id="email" placeholder='Digite seu email' required/>
      </div>
    </div>
  )
}

export default UserForm