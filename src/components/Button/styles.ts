/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type ButtonProps = {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity) <ButtonProps>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }) =>
    type === 'SECONDARY' ? theme.COLORS.RED_DARK : theme.COLORS.GREEN_700};

  border-radius: 6px;

  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`
