// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ethers } from 'ethers';

type Data = {
    privateKey: string,
    address: string,
    mnemonic: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    const wallet = ethers.Wallet.createRandom();

    const response = {
        privateKey: wallet.privateKey,
        address: wallet.address,
        mnemonic: wallet._mnemonic().phrase,
    }



  res.status(200).json(response)
}
