import React from 'react'

export default function Alerts(props) {
    const captilize=(word)=>{ // function to set capital letter success msg for alert
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
   props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}role="alert">
     <strong>{captilize (props.alert.type)  }</strong>:{props.alert.msg}
  </div>
  )
}
