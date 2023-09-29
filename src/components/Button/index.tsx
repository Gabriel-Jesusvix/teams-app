/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { type TouchableOpacityProps } from 'react-native'
import { type ButtonTypeStyleProps, Container, Title } from './styles'

type ButtonProps = TouchableOpacityProps & {
  title: string
  type?: ButtonTypeStyleProps
}

export function Button ({ type = 'PRIMARY', title, ...rest }: ButtonProps) {
  return (
    <Container
        // @ts-expect-error -> remove this comment
        type={type}
       {...rest}
      >
      <Title>{title}</Title>
    </Container>
  )
}
