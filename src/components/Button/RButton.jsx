import React from 'react'
import { Button } from "@material-tailwind/react";

const RButton = ({ children, action, color, className, label }) => {
  return (
    <Button
      onClick={action}
      color={color}
      className={className}
      label={label}
    >
      {children}
    </Button>
  )
}

export default RButton