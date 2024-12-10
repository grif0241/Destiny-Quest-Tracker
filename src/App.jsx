// this actually works
import PWABadge from './PWABadge.jsx';
import { Container, Box } from '@mui/material';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav.jsx';
import Characters from './pages/Characters.jsx';
import Abilities from './pages/Abilities.jsx';
import Items from './pages/Items.jsx';
import CharacterDetail from './pages/CharacterDetail.jsx';
import EditCharacterDetail from './pages/EditCharacterDetail.jsx'
import NotFound from './pages/NotFound.jsx';
import Settings from './pages/Settings.jsx';
import Credits from './pages/Credits.jsx';
import { CharactersProvider } from './contexts/CharactersContext.jsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  // Add your theme configuration here
});

function App() {

  return (
    <CharactersProvider>
      {/* app container */}
      <Box
        sx={{ 
          margin: '0 auto',
          paddingBottom:5,          
          width: '100%', 
          maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: 1200 },
          // marginTop: { lg:'10vh'},
          // border: '2px solid black', // TODO: remove after
        }}
      >
        {/* <Nav /> */}
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/characters" replace />} />
            <Route exact path="/characters" element={<Characters />} />
            <Route path="/characters/:id" element={<CharacterDetail />} />
            <Route path="/characters/:id/edit" element={<EditCharacterDetail />} />
            <Route path="/items" element={<Items />} />
            <Route path="/abilities" element={<Abilities />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/credits" element={<Credits />} />
            <Route element={NotFound} />
          </Routes>
        </div>
        <PWABadge />
      </Box>
    </CharactersProvider>
  )
}

export default App
