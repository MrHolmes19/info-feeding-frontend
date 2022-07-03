import React from 'react'

const TextArea = ( {name, label, placeholder, handleChange} ) => {
  return (
    <div className="input-group row mb-2">
      <label htmlFor={name} className="col-sm-4 col-form-label text-sm-end">
        {label}
      </label>
      <div className="col-sm-8">
        <input type="textarea" className="form-control" id={name} 
        aria-describedby="emailHelp" 
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default TextArea