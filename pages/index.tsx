import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useState }from 'react';

type WalletDetails = {
  address: string,
  privateKey: string,
  mnemonic: string
}

export default function Home() {

  const [details, setDetails] = useState<WalletDetails>();

  const generateWallet = async () => {
    console.log('generateWallet triggered');
    const res = await fetch('/api/ethereum/wallet/new')
    const data = await res.json()
    setDetails(data);
    console.log(data)

  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className='text-7xl p-8' >Ethereum Wallet Service</h1>
        <div className='borer p-4 m-4 w-full h-52 flex justify-center'>
            {details && 
                  <div className='leading-8'>
                    <p><span className='p-4 text-cyan-500'>address:</span> {details.address}</p>
                    <p><span className='p-4 text-cyan-500'>private key:</span>  {details.privateKey}</p>
                    <p><span className='p-4 text-cyan-500'>seed:</span>  {details.mnemonic}</p>
                  </div>
            }
        </div>
        <div>
          <button className='px-12 py-8 border' onClick={generateWallet}>Generate Wallet</button>
        </div>

      </main>
    </div>
  )
}
