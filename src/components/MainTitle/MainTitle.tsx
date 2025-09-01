import React from 'react'
type Props = {
    title: string;
}
function MainTitle( {title}: Props ) {
  return (
    <div className=" text-primary rounded-3xl py-4 font-bold text-3xl mb-6  w-full  tracking-widest ">{title}</div>
  )
}

export default MainTitle