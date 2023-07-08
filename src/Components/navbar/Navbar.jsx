import './Navbar.css';
import { useUser } from '../../Context/user-context'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import logo from '../../images/logo.png'
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,

} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const { user } = useUser();


  const searchUsername = (e) => {
    setInput(e.target.value);
  };
  let filteredUsername = user.filter(data => data.username.toLowerCase().includes(input.toLocaleLowerCase()))
  if (filteredUsername.length === 0) {
    filteredUsername = [];
  }

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} id='navbar-theme' >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box id='socialvibes-logo'><span id='social'>Social</span><span id='vibes'>Vibes</span></Box>
          {/* <img src={logo} alt="" width='80px' /> */}
          <Box><input type='text' name='search' value={input} placeholder='search users' id='search-field' onChange={searchUsername} /></Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

            </Stack>
          </Flex>
        </Flex>

        <div id='user-search'>
          <div id='search-by-username'>
            {
              input && filteredUsername.length > 0 ? filteredUsername.map((item) => {
                return (
                  <div id='blur-search-field'>
                    <div key={item._id} onClick={() => navigate(`/userprofile/${item?.username}`)}  >
                      <span ><img src={item.avatarUrl} alt="profile" className='h-[40px] w-[40px] rounded-full' />
                        {item.username}
                        </span>
                    </div>
                  </div>
                )
              }) : null
            }
          </div>
        </div>
      </Box>
    </>
  );
}