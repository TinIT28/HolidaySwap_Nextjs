'use client';

import { Button, Tooltip } from 'flowbite-react';
import { FiHelpCircle } from 'react-icons/fi';

export default function ToolTipCreateOwnership() {
  return (
    <div className="flex flex-wrap gap-2">
      <Tooltip content="Contract images once provided will not be edited" animation={false}>
        <FiHelpCircle size={18} />
      </Tooltip>
    </div>
  );
}
