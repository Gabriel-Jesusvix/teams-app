import { useEffect, useState, useRef } from 'react'
import { Alert, FlatList, type TextInput } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
import { ButtonIcon } from '@components/ButtonIcon'
import { Filter } from '@components/Filter'
import { PlayerCard } from '@components/PlayerCard'
import { ListEmpty } from '@components/ListEmpty'
import { Button } from '@components/Button'
import { AppError } from '@utils/AppError'

import { playerAddByGroup } from '@storage/player/playerAddByGroup'
import { playersGetByGroupAndTeam } from '@storage/player/playersGetByGroupAndTeam'
import { type PLayerStorageDTO } from '@storage/player/PLayerStorageDTO'

import { Container, Form, HeaderList, NumbersOfPlayers } from './styles'
import { playerRemoveByGroup } from '@storage/player/playerRemoveByGroup'
import { removeGroupByName } from '@storage/group/removeGroupByName'

interface RouteParams {
  group: string
}

export function Players () {
  const [team, setTeam] = useState('Time A')
  const [newPlayerName, setNewPlayerName] = useState('')
  const [players, setPlayers] = useState<PLayerStorageDTO[]>([])
  const route = useRoute()
  const inputRef = useRef<TextInput>(null)
  const { navigate } = useNavigation()
  const { group } = route.params as RouteParams

  async function handleAddPlayer () {
    if (newPlayerName.trim().length === 0) {
      Alert.alert('Nova Pessoa', 'Informe o nome da pessoa para adiconar')
    }

    const newPlayer = {
      name: newPlayerName,
      team
    }

    try {
      await playerAddByGroup(newPlayer, group)
      inputRef.current?.blur()
      setNewPlayerName('')
      fetchPlayerBytTeam()
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova Pessoa', error.message)
      } else {
        console.error(error)
        Alert.alert('Nova Pessoa', 'Não foi possivel adicionar ')
      }
    }
  }

  async function fetchPlayerBytTeam () {
    try {
      const playersByTeam = await playersGetByGroupAndTeam(group, team)

      setPlayers(playersByTeam)
    } catch (error) {
      console.log(error)
      Alert.alert('Players', 'Não foi possivel carregar as pessoas do time selecionado.')
    }
  }

  async function handleRemovePlayer (playerName: string) {
    try {
      await playerRemoveByGroup(playerName, group)
      fetchPlayerBytTeam()
    } catch (error) {
      console.log(error)
      Alert.alert('Remover', 'Não foi possivel remover o player, tente novamente mais tarde,')
    }
  }

  async function groupRemove () {
    try {
      await removeGroupByName(group)
      navigate('groups')
    } catch (error) {
      console.log(error)
      Alert.alert('Remover Grupo', 'Não foi possivel remover o grupo')
    }
  }

  async function handleGroupRemove () {
    Alert.alert(
      'Remover',
      'Deseja remover o grupo?',
      [
        {
          text: 'Não', style: 'cancel'
        },
        {
          text: 'Sim', onPress: async () => { await groupRemove() }
        }
      ]
    )
  }
  useEffect(() => {
    fetchPlayerBytTeam()
  }, [team])

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title={group}
        subtitle="adicione a galera e separe os times"
      />
      <Form>
        <Input
          inputRef={inputRef}
          placeholder='Nome da pessoa'
          autoCorrect={false}
          value={newPlayerName}
          onChangeText={(newPLayerName) => { setNewPlayerName(newPLayerName) }}
          onSubmitEditing={handleAddPlayer}
          returnKeyType='done'
        />
        <ButtonIcon
          icon='add'
          onPress={handleAddPlayer}
        />
      </Form>

      <HeaderList>

        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => { setTeam(item) }}
            />
          )}
          horizontal
        />
        <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <PlayerCard
            name={item.name}
            onRemove={async () => { await handleRemovePlayer(item.name) }}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message='Não há pessoas nesse time, vamos começar?' />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 }
        ]}
      />

      {
        players.length > 0 && (
          <Button
            type='SECONDARY'
            title='Remover Turma'
            onPress={handleGroupRemove}
          />
        )
      }

    </Container>
  )
};
