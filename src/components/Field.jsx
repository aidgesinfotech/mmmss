const digitsOnly = (e) => {
  e.target.value = e.target.value.replace(/\D/g, "");
};

// Outlined input whose label sits inside the box and floats onto the border once filled.
export function Field({ name, label, numeric = false, className = "", ...rest }) {
  return (
    <div className={`field ${className}`}>
      <input
        id={`f-${name}`}
        name={name}
        placeholder=" "
        inputMode={numeric ? "numeric" : undefined}
        onInput={numeric ? digitsOnly : undefined}
        {...rest}
      />
      <label htmlFor={`f-${name}`}>{label}</label>
    </div>
  );
}

export function SelectField({ name, label, options, placeholder, className = "", ...rest }) {
  return (
    <div className={`field field-select ${className}`}>
      <select id={`f-${name}`} name={name} {...rest}>
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <label htmlFor={`f-${name}`}>{label}</label>
    </div>
  );
}
