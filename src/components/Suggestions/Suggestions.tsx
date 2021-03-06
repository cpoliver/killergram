import { Box, Button, Spacer, Stack, Text } from "@chakra-ui/react"
import React from "react"
import { useTranslation } from "react-i18next"

import { ErrorMessage } from "../ErrorMessage/ErrorMessage"
import { Suggestion, SuggestionSkeleton } from "./Suggestion"
import { Profile, useGetProfiles } from "api"

export const Suggestions: React.FC = () => {
  const { data = [], error, isLoading, refetch } = useGetProfiles()

  if (isLoading) return <SuggestionsLoading />

  if (error) return <ErrorMessage {...error.response?.data} onRetry={refetch} />

  return <SuggestionsLoaded suggestions={data} />
}

const SuggestionsLoaded: React.FC<{ suggestions: Profile[] }> = ({ suggestions }) => {
  const { t } = useTranslation()

  return (
    <Stack fontSize="sm" spacing={3}>
      <Stack direction="row">
        <Text color="mode.text2" flex={1} fontWeight="semibold">
          {t("Suggestions for you")}
        </Text>
        <Button color="mode.text1" variant="link">
          {t("See All")}
        </Button>
      </Stack>
      {suggestions.map((suggestion) => (
        <Suggestion key={suggestion.profile_name} {...suggestion} />
      ))}
    </Stack>
  )
}

const PLACEHOLDER_COUNT = 5

export const SuggestionsLoading: React.FC = () => (
  <Stack fontSize="sm" layerStyle="loading" spacing={4}>
    <Stack direction="row" py={1}>
      <Box layerStyle="skeleton" w={64} />
      <Spacer />
      <Box layerStyle="skeleton" w={10} />
    </Stack>
    {new Array(PLACEHOLDER_COUNT).fill(0).map((_, i) => (
      <SuggestionSkeleton key={i} />
    ))}
  </Stack>
)
