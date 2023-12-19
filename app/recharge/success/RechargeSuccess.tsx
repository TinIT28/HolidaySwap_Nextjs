'use client';

import Container from '@/app/components/Container';
import React, { Fragment, useEffect } from 'react';
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import useAxiosAuthClient from '@/app/hooks/useAxiosAuthClient';
import axios from 'axios';
import Link from 'next/link';

const RechargeSuccess = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const responseCode = searchParams?.get('vnp_ResponseCode');
  const moneyTransferId = pathName?.slice(18, 23);
  const axiosAuthClient = useAxiosAuthClient();

  useEffect(() => {
    axios.get(
      `https://holiday-swap.click/api/v1/payment/payment_infor/${moneyTransferId}?vnp_ResponseCode=${responseCode}`
    );
  }, [pathName]);
  return (
    <Container className="bg-green-50">
      <div className="w-full h-screen flex flex-col justify-center items-center">
        {responseCode === '00' ? (
          <Fragment>
            <div className="font-bold text-[30px] py-3">Deposit successful!</div>
            <div>You have successfully deposited into your wallet</div>
            <div>
              <img className="w-60 h-60 " src="/images/check-mark.png" alt="" />
            </div>
            <div
              onClick={() => router.push('/dashboard/wallet')}
              className="-ml-10 bg-green-400 text-white font-bold rounded-md px-5 py-2 hover:cursor-pointer hover:bg-green-500"
            >
              Back to wallet
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className="font-bold text-[30px] py-3">Deposit failed!</div>
            <div>You have failed to deposit point into your wallet</div>
            <div>
              <img className="w-60 h-60 " src="/images/transaction-fail.png" alt="" />
            </div>
            <div
              onClick={() => router.push('/recharge')}
              className=" bg-rose-500 text-white font-bold rounded-md px-5 py-2 hover:cursor-pointer hover:bg-rose-600"
            >
              Try again
            </div>
          </Fragment>
        )}
      </div>
    </Container>
  );
};

export default RechargeSuccess;
