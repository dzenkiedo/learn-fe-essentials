import {get, map} from "lodash";
import {Link} from "react-router-dom";
import {Group, Text} from "@mantine/core";

function Menu({ ...props }) {
  
  const items = get(props, "items", []);
  return (
    <Group position="left" spacing="sm" grow>
      <Text size="md" component={Link} to={`/`}>Home</Text>
      <Text size="md" component={Link} to={`/cart`}>Cart</Text>
      <Text size="md" component={Link} to={`/catalog`}>Catalog</Text>
      <Text size="md" component={Link} to={`/catalog/adidas`}>Product</Text>
      <Text size="md" component={Link} to={`/catalog/?tag="кеды"`}>Filter</Text>
    </Group>
  );
}

export default Menu;