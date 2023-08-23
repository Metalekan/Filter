import React, { useState } from 'react'
import './App.css'
import JSONDATA from '../MyData.json';

export default function Footer() {
  const [searchKeyword, setSearchKeyword] = useState('');
  return (
    <div>
      <input onChange={(event) => {setSearchKeyword(event.target.value)}} placeholder='filter search..' className='form-control' type="text" />
      <div className="d-flex flex-column justify-content-center">
        {JSONDATA.filter((value) => {
          if (searchKeyword == '') {
            return value
          } else if (value.first_name.toLocaleLowerCase().includes(searchKeyword.toLocaleLowerCase())) {
            return value;
          }
        }).map((item, key) => (
          <p className='text-center' key={key}>{item.first_name}</p>
        ))}
      </div>
    </div>
  )
}