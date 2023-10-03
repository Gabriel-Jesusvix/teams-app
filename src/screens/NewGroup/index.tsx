import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Container, Content, Icon } from './styles'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { Header } from '@components/Header'

export function NewGroup () {
  const { navigate } = useNavigation()
  const [group, setGroup] = useState('')
  function handleNewGroup () {
    navigate('players', {
      group
    })
  }
  return (
    <Container>
      <Header showBackButton />
      <Content>
      <Icon />
      <Highlight
        title="Nova turma"
        subtitle="crie uma turma para adicionar pessoas"
      />
      <Input
        placeholder='Nova turma'
        onChangeText={(group) => {
          setGroup(group)
        }}
      />

      <Button
        title='Criar '
        type='PRIMARY'
        style={{ marginTop: 24 }}
        onPress={handleNewGroup}
      />
      </Content>

    </Container>
  )
};
