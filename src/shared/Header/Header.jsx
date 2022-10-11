import React from "react";
import Logo from "../Logo/Logo";
import {Container, Group, Header as MHeader } from '@mantine/core';
// import {Link} from "react-router-dom";
import {Menu, ActionBar} from "../";

function Header() {
  
  const navigationItems = [{
    link: "/",
    text: "Главная"
  }, {
    link: "/catalog",
    text: "Все коллекции",
  }, {
    link: "/",
    text: "Кеды",
  }, {
    link: "/",
    text: "Кроссовки",
  }];
  
  return (
    <MHeader height={90}>
      <Container size="md" p="xs">
        <Group grow position="apart" spacing="xs">
          <Logo/>
          <Group position="left" spacing="xs">
            <Menu/>
            <ActionBar/>
          </Group>
        </Group>
      </Container>
    </MHeader>
  )
  
}

export default Header;