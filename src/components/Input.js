import React from 'react'

const Input = ( {name, label, placeholder, handleChange} ) => {
  
  return (
    <div className="input-group row mb-2">
      <label htmlFor={name} className="col-sm-4 col-form-label text-sm-end">
        {label}
      </label>
      <div className="col-sm-8">
        <input type="text" className="form-control" 
        id={name} 
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default Input