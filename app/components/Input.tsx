type InputProps = {
  required?: boolean,
  name?: string,
  value?: string,
  type?: string,
  placeholder?: string,
  onChange?: CallableFunction,
}

export default function Input({ required, name, value, type, placeholder, onChange } : InputProps) {
  if (type === 'textarea') {
    return (
      <textarea required={required} name={name} value={value} placeholder={placeholder} onChange={(e) => onChange && onChange(e)} className="border rounded-2xl px-3 py-2" />
    );
  }

  return (
    <input required={required} name={name} value={value} type={type} placeholder={placeholder} onChange={(e) => onChange && onChange(e)} className="border rounded-full px-3 py-2" />
  );
}
