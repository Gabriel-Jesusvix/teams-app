import { Container, Icon, Message } from './styles'
import { type TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {
  message: string
}
export function ListEmpty ({ message }: Props) {
  return (
    <Container >
      <Icon/>
      <Message>
        {message}
      </Message>
    </Container>
  )
};
