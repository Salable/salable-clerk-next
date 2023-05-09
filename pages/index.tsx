import React from "react"
import { InferGetServerSidePropsType } from "next"

export const getServerSideProps = async () => {
  try {
    const data = { hello: "world"}
    return { props: { data } }
  } catch (err) {
    console.error(err)
    return { props: { data: null } }
  }
}

const IndexPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
        { data ? data["hello"]?.toString() : <></> }
    </div>
  )
}

export default IndexPage
