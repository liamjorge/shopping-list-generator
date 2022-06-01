import "../css/App.css";
import Header from "./Header";
import Options from "./Options";
import { Grid }  from '@mui/material';

function App() {
  return <div className="App">
    <Grid container direction="column" justifyContent="flex-start" alignItems="center">
      <Header />
      <Options />
    </Grid>
  </div>;
}

export default App;
