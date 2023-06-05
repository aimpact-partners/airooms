import React, { useState } from "react";

interface IField {
  name: string;
  label: string;
  type: string;
}

interface IForm {
  fields: IField[];
  onSubmit: (formData: any) => void;
  submitLabel: string;
}

function Form({ fields, onSubmit, submitLabel }: IForm) {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name}>
          <label>
            {field.label}:
            <input type={field.type} name={field.name} value={formData[field.name] || ""} onChange={handleChange} />
          </label>
        </div>
      ))}
      <button type="submit">{submitLabel}</button>
    </form>
  );
}

export default Form;
