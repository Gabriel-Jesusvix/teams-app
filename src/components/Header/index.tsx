import { useNavigation } from '@react-navigation/native'
import { BackIcon, Container, BackButton, Logo } from './styles'
import logo from '@assets/logo.png'

interface Props {
  showBackButton?: boolean
}

export function Header ({ showBackButton = false }: Props) {
  const { navigate } = useNavigation()

  function handleGoBack () {
    navigate('groups')
  }
  return (
    <Container>
      {
        showBackButton && <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      }

      <Logo
        source={logo}
      />
    </Container>
  )
};
