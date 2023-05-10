import { InferGetServerSidePropsType } from "next"
import styles from "/styles/Shared.module.css";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import React from 'react';
import ClerkStatus from "/components/ClerkStatus";
import {  useSalable } from "/components/salable";
import { SalableStatus } from "/components/SalableStatus"

export const getServerSideProps = async () => {
  try {
    const data = "world"
    return { props: { data: data } }
  } catch (err) {
    console.error(err)
    return { props: { data: null } }
  }
}

const IndexPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { user } = useUser()
  const { capabilities, licenses } = useSalable()
  return (
    <main className={styles.main}>   
          <SignedIn>
              <ClerkStatus user={user} />
              <SalableStatus capabilities={capabilities} licenses={licenses} />
          </SignedIn>     
    </main>
  );
}

export default IndexPage
