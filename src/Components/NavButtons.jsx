//== React Libs
import React from 'react';
import { useNavigate } from 'react-router-dom';
//== Material Ui
import { IconButton, Stack } from '@mui/material';

/*
Component Description:
    NavButtons :- This component displays the navigation buttons used in the HomePage. Uses the list of buttons in 
    the parameter.
*/

function NavButtons({ buttonData }) {
  const navigate = useNavigate();

  return (
    <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
      {buttonData.map(({ icon, link }, index) => (
        <IconButton key={index} onClick={() => navigate(link)}>
          {React.createElement(icon, { fontSize: 'large' })}
        </IconButton>
      ))}
    </Stack>
  );
}

export default NavButtons;
