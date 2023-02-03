import styled from 'styled-components';
import TextField from '@mui/material/TextField';


export const TextField1 = () => {
    return (
      <>
        <Text>Подготовка копонента Input</Text>
        <Text>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
        </Text>
      </>
    )
}

const Text = styled.p`
  color: blue;
  width: fit-content;
  margin: 100px auto;
`
