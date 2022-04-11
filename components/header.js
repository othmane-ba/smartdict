import { MenuItem, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import { debounce } from 'lodash';
import categories from '../data/category';

const Title = styled.span`
  font-size: 7vw;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: 35vh;
  width: 100%;
`;
const Input = styled.div``;
const header = ({ category, setCategory, word, setWord, LightMode }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: LightMode ? '#000' : '#fff',
      },
      mode: LightMode ? 'light' : 'dark',
    },
  });
  const handleChange = (language) => {
    setCategory(language);
    setWord('');
  };
  const handleText = debounce((text) => {
    setWord(text);
  }, 1000);
  return (
    <Header>
      <Title>{word ? word : 'Smart Dict'}</Title>
      <Input>
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            variant="standard"
            style={{ minWidth: 200 }}
            sx={{ mr: '4rem' }}
            label="Search Word"
            onChange={(e) => handleText(e.target.value)}
          />
          <TextField
            className="select"
            select
            style={{ minWidth: 200 }}
            label="Language"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
            variant="standard"
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </Input>
    </Header>
  );
};

export default header;
