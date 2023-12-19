import React from 'react';
import RechargeCard from '../components/recharge/RechargeCard';
import Container from '../components/Container';
import requireAuth from '../libs/requireAuth';
import GetPoint from '../actions/getPoint';

export default async function Recharge() {
  const point = await GetPoint();
  return requireAuth(
    <div>
      <div className="pt-20">
        <RechargeCard point={point} />
      </div>
    </div>,
    [2, 4]
  );
}
