export default function Input({ id, label, placeholder, type, login, errorMessage }) {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} {...login} />
      <span className="error-message">{errorMessage}</span>
    </div>
  );
}
