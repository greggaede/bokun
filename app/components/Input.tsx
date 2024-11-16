type InputProps = {
  name?: string,
  value?: string,
  type?: string,
  placeholder?: string,
  onChange?: CallableFunction,
}

export default function Input({ name, value, type, placeholder, onChange } : InputProps) {
  if (type === 'textarea') {
    return (
      <textarea name={name} value={value} placeholder={placeholder} onChange={(e) => onChange && onChange(e)} className="border rounded-full px-3 py-2" />
    );
  }

  return (
    <input name={name} value={value} type={type} placeholder={placeholder} onChange={(e) => onChange && onChange(e)} className="border rounded-full px-3 py-2" />
  );
}
