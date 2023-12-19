'use client';

import { Button, Tooltip } from 'flowbite-react';
import { FiHelpCircle } from 'react-icons/fi';

export default function TooltipCreatePoint() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tooltip content="Please enter the amount (VND) in the input box" animation={false}>
        <FiHelpCircle />
      </Tooltip>
    </div>
  );
}
