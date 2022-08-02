import {ThemeIcon, Center} from '@mantine/core';
import {IconShoppingCart} from '@tabler/icons';

function ActionBar() {
  return (
    <Center>
      <ThemeIcon color="dark">
        <IconShoppingCart size={32}/>
      </ThemeIcon>
    </Center>
  );
}

export default ActionBar;
