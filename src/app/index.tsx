import { Container, Flex, Stack, Text } from "@chakra-ui/react"
import React from "react"
import { useTranslation } from "react-i18next"

import { AppBar, ColorModeSwitcher, Following, Posts, ProfileSwitcher, Suggestions } from "components"

export const App: React.FC = () => (
  <AppShell>
    <Content />
    <SideBar />
  </AppShell>
)

const AppShell: React.FC = ({ children }) => (
  <Stack bottom={0} flex={1} left={0} pos="absolute" right={0} spacing={0} top={0}>
    <AppBar />
    <Flex as="main" bg="mode.background" flex={1}>
      <Container flex={1} minH="100vh" my={20} overflow="auto">
        <Stack direction="row" flex={1} spacing={8}>
          {children}
        </Stack>
      </Container>
    </Flex>
    <Flex bottom={4} pos="fixed" right={4}>
      <ColorModeSwitcher />
    </Flex>
  </Stack>
)

const Content: React.FC = () => (
  <Stack as="section" flex={2} spacing={6}>
    <Following />
    <Posts />
  </Stack>
)

const SideBar: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Stack as="aside" flex={1} spacing={6}>
      <ProfileSwitcher />
      <Suggestions />
      <Text color="mode.text3" fontSize="xs" textTransform="uppercase">
        &copy; {new Date().getFullYear()} {t("Killergram from Charlie")}
      </Text>
    </Stack>
  )
}
