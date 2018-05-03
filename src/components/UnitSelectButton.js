import React from 'react'
import { Button } from 'semantic-ui-react'

const UnitSelectButton = ({active, onClick, optionName}) => {
  return (
    <Button
      active={active}
      onClick={() => onClick(optionName)}
    >
      {optionName}
    </Button>
  )
}

export default UnitSelectButton;

