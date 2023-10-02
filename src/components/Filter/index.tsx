import { type TouchableOpacityProps } from 'react-native'

import { Container, Title, type FilterStyleProps } from './styles'

type Props = TouchableOpacityProps & FilterStyleProps & {
  title: string
}

export function Filter ({ title, isActive = false, ...rest }: Props) {
  return (
    <Container
      // @ts-expect-error -> remove line
      isActive={isActive}
      {...rest}
    >
      <Title>
        {title}
      </Title>
    </Container>
  )
}
