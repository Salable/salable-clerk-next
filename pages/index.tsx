import { InferGetServerSidePropsType } from "next"
import styles from "/styles/Shared.module.css";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import React from 'react';
import ClerkStatus from "/components/ClerkStatus";

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
  return (
    <main className={styles.main}>   
        <SignedIn>
          <ClerkStatus user={user} />
        </SignedIn>     
    </main>
  );
}

export default IndexPage
