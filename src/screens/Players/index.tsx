import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { ButtonIcon } from '@components/ButtonIcon'
import { Container, Content, Form, HeaderList, NumbersOfPlayers } from './styles'
import { Filter } from '@components/Filter'
import { FlatList } from 'react-native'
import { useState } from 'react'

export function Players () {
  const [team, setTeam] = useState('Time A')
  const [players, setPLayers] = useState(['1'])
  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />
      <Form>
        <Input
          placeholder='Nome da pessoa'
          autoCorrect={false}
        />
        <ButtonIcon
          icon='add'
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
      <NumbersOfPlayers>{players}</NumbersOfPlayers>
      </HeaderList>

      <Content>
        <Button
          title='Criar'
          type='PRIMARY'
          style={{ marginTop: 24 }}
        />
      </Content>

    </Container>
  )
};
