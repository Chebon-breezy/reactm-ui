import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonGroup>
          <Button
            size="large"
            startIcon={<SaveIcon />}
            variant="contained" color="primary">
            Save
          </Button>

          <Button
            size="large"
            startIcon={<DeleteIcon />}
            variant="contained" color="secondary">
            Discard
          </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
