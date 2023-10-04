/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { type TextInput, type TextInputProps } from 'react-native'
import { Container } from './styles'
import { useTheme } from 'styled-components/native'

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
}
export function Input ({ inputRef, ...rest }: Props) {
  const {
    COLORS:
    { GRAY_300 }
  } = useTheme()

  return (
    <Container
      ref={inputRef}
      {...rest}
      placeholderTextColor={GRAY_300}
    />
  )
}
