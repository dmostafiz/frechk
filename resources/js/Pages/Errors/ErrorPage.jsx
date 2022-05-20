import React from 'react'
import Error401 from './Error401'
import Error403 from './Error403'
import Error404 from './Error404'
import Error500 from './Error500'
import Error503 from './Error503'


export default function ErrorPage({ statusCode }) {

  console.log('Error Status: ', statusCode )

  return (
    <>
      {statusCode == 401 && <Error401 />}
      {statusCode == 403 && <Error403 />}
      {statusCode == 404 && <Error404 />}
      {statusCode == 500 && <Error500 />}
      {statusCode == 503 && <Error503 />}
    </>
  )
}