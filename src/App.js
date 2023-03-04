import * as React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Data from './assets/data.json';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function App() {
  const [value, setValue] = React.useState(0)
  const [value2, setValue2] = React.useState(0)
  const cardlist = Data.data

  const packids = Array.from(new Set(cardlist.map((obj) => obj.packid)))
  const civs = Array.from(new Set(cardlist.map((obj) => obj.civ)))
  console.log(civs)

  const getUrls = (packid) => {
    return cardlist.filter((item, index) => {
      if (item.packid == packid ) return true;
    }).map((obj) => obj.cardimgurl);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange2 = (event, newValue2) => {
    setValue2(newValue2);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs 
              value={value} 
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              textColor="main"
            >
              {packids.map((packid, index) => {
                return (
                  <Tab label={packid} {...a11yProps(index)} />
                );
              })}
            </Tabs>
          </Box>
          {packids.map((packid, index) => {
            return (
              <TabPanel value={value} index={index}>
                <div className="photo-list">
                  {getUrls(packid).map((url) => {
                    return (
                      <img src={url} className="photo-list-img"/>
                    );
                  })}
                </div>
              </TabPanel>
            );
          })}
        </Box>
      </header>
    </div>
  );
}

export default App;
