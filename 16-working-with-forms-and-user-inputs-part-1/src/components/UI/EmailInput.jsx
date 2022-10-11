import "./EmailInput.css";
export default function EmailInput({ onChange, onBlur, value, hasError }) {
  const classForm = hasError ? "form-control invalid" : "form-control";
  return (
    <div className={classForm}>
      <label htmlFor="email">Your Email</label>
      <input
        onChange={onChange}
        onBlur={onBlur}
        type="email"
        id="email"
        value={value}
      />
      {hasError && <p className="error-text">Invalid Email</p>}
    </div>
  );
}
