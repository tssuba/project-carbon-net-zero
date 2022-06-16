import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { Button } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <main>
      <Box>
        sx = {{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
        <Container>
          <ButtonGroup disableElevation variant="contained">
              <Button startIcon={<HomeIcon />}></Button>
              <Button>Two</Button>
            </ButtonGroup>
          </Container>
      </Box>
      </main> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
