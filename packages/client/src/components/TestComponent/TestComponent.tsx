import styled from 'styled-components'

export const TestComponent = () => {
  return <Text>Тестовый компонент</Text>
}

const Text = styled.p`
  color: red;
  width: fit-content;
  margin: 100px auto;
`
