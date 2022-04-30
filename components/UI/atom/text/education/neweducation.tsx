import React from 'react'
import styled from 'styled-components'

const TitleNewEducation = styled.h1`
    font-size: 2em;
    text-align:center;
    color: black;
    style: bold;
`

function neweducation() {
  return (
    <>
        {/* <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Insert New Education</h3> */}
        <TitleNewEducation>Insert New Education</TitleNewEducation>
    </>
  )
}

export default neweducation