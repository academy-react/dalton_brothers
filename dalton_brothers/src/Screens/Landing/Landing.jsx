import React, { Fragment } from 'react'
import { Header } from '../../Components/Header/Header'
import { Suggestions } from '../../Components/Suggestions/Suggestions'
import { BestMasters } from '../../Components/BestMasters/BestMasters'

const Landing = () => {
  return (
<Fragment>
<Header/>

<BestMasters/>
<Suggestions/>
</Fragment>


  )
}

export  {Landing}