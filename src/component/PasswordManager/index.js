import './index.css'

const PasswordManager = props => {
  const {item, showPassword, onDelete} = props

  const {id, username, website, password} = item

  const f = username.slice(0, 1)

  const onTap = () => {
    onDelete(id)
  }

  return (
    <li className="bg10">
      {console.log(showPassword)}
      <div className="bg11">
        <p className="f">{f}</p>
      </div>

      <div className="bg12">
        <p className="f">{website}</p>
        <p className="f">{username}</p>
        {showPassword && <p className="f">{password}</p>}!
        {!showPassword && (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
          />
        )}
      </div>

      <button
        className="btn3"
        type="button"
        data-testid="delete"
        onClick={onTap}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="img3"
        />
      </button>
    </li>
  )
}

export default PasswordManager
