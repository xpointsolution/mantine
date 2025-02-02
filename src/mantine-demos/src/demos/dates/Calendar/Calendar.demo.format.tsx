import React, { useState } from 'react';
import { Group } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { Calendar } from '@mantine/dates';

const code = `
import { useState } from 'react';
import { Calendar } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState(null);
  return <Calendar value={value} onChange={setValue} labelFormat="MM/YYYY" />;
}
`;

function Demo() {
  const [value, setValue] = useState(null);
  return (
    <Group position="center">
      <Calendar value={value} onChange={setValue} labelFormat="MM/YYYY" />
    </Group>
  );
}

export const format: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
