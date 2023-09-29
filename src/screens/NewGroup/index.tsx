import { Header } from '@components/Header'
import { Container, Content, Icon } from './styles'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'
import { Input } from '@components/Input'

export function NewGroup () {
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
      />

      <Button
        title='Criar '
        type='PRIMARY'
        style={{ marginTop: 24 }}
      />
      </Content>

    </Container>
  )
};
