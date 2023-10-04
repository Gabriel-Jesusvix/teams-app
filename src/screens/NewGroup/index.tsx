/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Container, Content, Icon } from './styles'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { Header } from '@components/Header'
import { groupCreate } from '@storage/group/groupCreate'
import { AppError } from '@utils/AppError'
import { Alert } from 'react-native'

export function NewGroup () {
  const { navigate } = useNavigation()
  const [group, setGroup] = useState('')

  async function handleNewGroup () {
    try {
      if (group.trim().length === 0) {
        Alert.alert('Novo Grupo', 'Informe o nome da turma'); return
      }
      await groupCreate(group)
      navigate('players', {
        group
      })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo Grupo', error.message)
      } else {
        Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo')
        console.log(error)
      }
    }
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
