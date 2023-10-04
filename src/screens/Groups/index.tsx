import { Header } from '@components/Header'
import { Container } from './styles'
import { Highlight } from '@components/Highlight'
import { GroupCard } from '@components/GroupCard'
import { useCallback, useState } from 'react'
import { FlatList } from 'react-native'
import { ListEmpty } from '@components/ListEmpty'
import { Button } from '@components/Button'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { getAllGroups } from '@storage/group/getAllGroups'

export function Groups () {
  const [groups, setGroups] = useState<string[]>([])
  const { navigate } = useNavigation()
  const isEmpty = groups.length === 0

  function handleNewGroup () {
    navigate('new')
  }
  async function getGroupsStorage () {
    try {
      const data = await getAllGroups()
      setGroups(data)
    } catch (error) {
      console.log(error)
    }
  }

  function handleOpenGroup (group: string) {
    navigate('players', { group })
  }

  useFocusEffect(useCallback(() => {
    getGroupsStorage()
  }, [groups]))

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
            onPress={() => { handleOpenGroup(item) }}
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
