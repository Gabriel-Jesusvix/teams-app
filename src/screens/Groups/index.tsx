import { Header } from '@components/Header'
import { Container } from './styles'
import { Highlight } from '@components/Highlight'
import { GroupCard } from '@components/GroupCard'
import { useState } from 'react'
import { FlatList } from 'react-native'
import { ListEmpty } from '@components/ListEmpty'
import { Button } from '@components/Button'
import { useNavigation } from '@react-navigation/native'

export function Groups () {
  const [groups] = useState<string[]>([])
  const { navigate } = useNavigation()
  const isEmpty = groups.length === 0

  function handleNewGroup () {
    navigate('new')
  }
  return (
    <Container>
      <Header />
      <Highlight
        title="Turmas"
        subtitle="jogue com a sua turma"
      />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
          />
        )}
        contentContainerStyle={isEmpty && {
          flex: 1
        }}
        ListEmptyComponent={
          () => (
            <ListEmpty
              message='Que tal cadastrar a primeira turma?!'
            />
          )
        }
        showsHorizontalScrollIndicator={false}
      />

      <Button
        title='Criar nova turma'
        type='PRIMARY'
        onPress={handleNewGroup}
      />

    </Container>
  )
};
