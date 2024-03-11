/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Flex as RadixThemesFlex } from "@radix-ui/themes"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center"}}/>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
