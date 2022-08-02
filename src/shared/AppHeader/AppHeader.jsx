import React from "react";
import Logo from "../Logo/Logo";
import {Container, Group, Header} from '@mantine/core';
import {Link} from "react-router-dom";
import {AppMenu, ActionBar} from "../";

function AppHeader() {
  
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
    <Header height={90}>
      <Container size="md" p="xs">
        <Group grow position="apart" grow spacing="xs">
          <Logo/>
          <Group position="left" spacing="xs">
            <AppMenu/>
            <ActionBar/>
          </Group>
        </Group>
      </Container>
    </Header>
  )
  
}

export default AppHeader;