import { Box, Dialog, styled } from '@mui/material';
import React from 'react';
import Menu from './Menu/Menu'
import EmptyChat from './Chat/EmptyChat';

const dialogStyle = {
  height: '95%',

  width: '100%',
  margin: '1%',
  maxWidth: '100%',
  maxHeight: '100%',
  boxShadow: 'none',
  overFlow: 'none',
  borderRadius: 'none'
}


const Component = styled(Box)`
display: flex;
`

const LeftComponent = styled(Box)`
min-width:25%
`

const RightComponent = styled(Box)`
width:75%;
min-width: 300px;
height:100%;
border-left: 1px solid rgba(0,0,0,0.14);
`

function ChatDialog() {
  return (

    <Dialog
      open={true}
      PaperProps={{ sx: dialogStyle }}
      hideBackdrop={true}
      maxWidth={'md'}
    >
      <Component>
        <LeftComponent>
          <Menu />
        </LeftComponent>
        <RightComponent>
          <EmptyChat />
        </RightComponent>
      </Component>



    </Dialog>


  );
}

export default ChatDialog;
