import React from 'react'
import Portfolio from './Portfolio'
import { designs, sites } from '../data/portfolioData'

export default function Porto (){
  return (
    <Portfolio designs={designs} sites={sites} />
  )
}
