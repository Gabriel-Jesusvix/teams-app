/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { type TextInputProps } from 'react-native'
import { Container } from './styles'
import { useTheme } from 'styled-components/native'

export function Input ({ ...rest }: TextInputProps) {
  const {
    COLORS:
    { GRAY_300 }
  } = useTheme()

  return (
    <Container
      {...rest}
      placeholderTextColor={GRAY_300}
    />
  )
}
