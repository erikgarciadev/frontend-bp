import { ChangeEvent, useState } from "react";

export default function useForm(data: any) {
  const [form, setForm] = useState(() => data);
  const [errors, setErrors] = useState({
    name: '',
    image: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setErrors({
        ...errors,
        [e.target.name] : ''
    })
  };

  const isDisabledForm = () => {
    if (form.name === "" && form.image === "") {
      return true;
    }
    return false;
  };

  const validateForm = () => {
    let error = {}
    for(const key of Object.keys(errors)){
        if(form[key] === ''){
            setErrors({
                ...errors,
                [key] : 'Requerido'
            })
            error = {
                ...error,
                [key]: 'Requerido'
            }
        }
    }
    return Object.keys(error).length === 0
  }
  return {
    form,
    errors,
    handleChange,
    isDisabledForm,
    validateForm
  };
}
