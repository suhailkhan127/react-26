import React from 'react'
function Alert(props) {
  return (
    //below code if condition ke tarah kam kar raha he
    // if (props.alert) ager props.alert ki value null na hoto below div ko print kardo
    //   return <div>...</div>
    // }
    <>
    <div style={{height: '60px'}}>
      {props.alert &&
        <div className={`alert alert-${props.alert.type} `} role="alert">
            <strong>{props.alert.head}</strong> : {props.alert.msg}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
      }
    </div>
    </>
  )
}
export default Alert
