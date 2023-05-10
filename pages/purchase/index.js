import styles from "/styles/Shared.module.css";
import { SignedIn, useUser } from "@clerk/nextjs";
import React from 'react';
import {SalablePricingTableReact} from "@salable/react-sdk";
import {  useSalable, IsLicensed, IsNotLicensed } from "/components/salable";
import { SalableStatus } from "/components/SalableStatus"


const Main = () => {
  const {userId, licenses, capabilities} = useSalable()
  const { user, isLoaded } = useUser()
  console.dir(userId)
  console.dir(licenses)
  if (!userId && !user) {
    return null
  } else {
    return isLoaded && user ? (
      <main className={styles.main}>
        <SignedIn>
          <IsNotLicensed check="free">
            <h1>Buy now!</h1>
            <SalablePricingTableReact 
            envConfig={{
                productUuid: 'fdcc8ebe-686a-40cc-90fb-82fd6b2983e3',
                apiKey: 'KdnPPzYaZqiHE0l7VUrT1k2gmURTgLd3EjXbxGT1',
                globalPlanOptions: {
                granteeId: userId,
                cancelUrl: '/'
                },
                theme: "light"
            }}
            checkoutConfig={{
                member: user.emailAddresses[0].emailAddress,
                customer: {
                email: user.emailAddresses[0].emailAddress
                }
            }}  
            />
          </IsNotLicensed>
          <IsLicensed check="free">
            <SalableStatus capabilities={capabilities} licenses={licenses} />
          </IsLicensed>
        </SignedIn>              
      </main>
    ) : (<></>);
  }
  
} 

// Home component
// Render with the SalableProvider to make the SalableContext available
const Home = () => (
    <Main />
);

export default Home;
