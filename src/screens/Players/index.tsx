import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { ButtonIcon } from '@components/ButtonIcon'
import { Container, Content, Form } from './styles'

export function Players () {
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
