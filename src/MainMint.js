import {useState} from 'react';
import React from 'react';
import ReactDOM from 'react-dom'
import {ethers, BigNumber} from 'ethers';
import {Box, Button, Flex, Input, Text} from '@chakra-ui/react';

//total amount should be connected to the smart contract
 //total amount of minted nft that should be connected to the smart contract

const MainMint = ({accounts, setAccounts}) => {
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(accounts[0]);

  const handleDecrement = () => {
    if (mintAmount <=1) return;
    setMintAmount(mintAmount - 1);
  };

  const handleIncrement = () => {
    if (mintAmount >=3) return;
    setMintAmount(mintAmount + 1);
  };


return (
  <Flex justify="center" align="center" height="700px" paddingBottom="150px">
    <Box width="520px">
      <div>
    <Text fontSize="68px" textShadow="0 5px #000000"> MINT A VAULT CARD!</Text>
    <Text
      marginTop="-25px"
      fontSize="20px"
      letterSpacing="-5.5%"
      fontFamily="Quicksand"
      textShadow="0 2px 2px #000000"
      color="white"
    > WITH A LIMITED SUPPLY OF 10,000 NFTS, THE HEXGO WILL GIVE EXCLUSIVE ACCESS TO EVERYTHING IN THE DIGITAL SPACE.</Text>
    <Text

      fontSize="20px"
      letterSpacing="-5.5%"
      fontFamily="Quicksand"
      textShadow="0 2px 2px #000000"
      color="white"
    >0/10000
  </Text>

    </div>

    {isConnected ? (
    <div>

        <Button
          backgroundColor="#117ACA"
          padding="10px"
          boxShadow="0px 2px 2px 1px #0F0F0F"
          color="white"
          fontSize="25px"
          cursor="pointer"
          fontFamily="inherit"
          marginTop="10px"
          onClick={''}>Mint Now
          </Button>
        </div>
      ) : (
        <p> You must be connected to Mint. </p>
    )}

      </Box>
    </Flex>
  );
};

export default MainMint;
