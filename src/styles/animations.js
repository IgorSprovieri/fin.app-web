import { keyframes } from '@chakra-ui/react'

const fade = keyframes`
  0% { 
    opacity: 0%;
   }
  100% { 
    opacity: 100%;
   }
`

const scale = keyframes`
  0% { 
    transform: scale(0);
   }
  100% { 
    transform: scale(1);
   }
`

export const fadeAnimation = `${fade} 1.5s forwards`
export const scaleAnimation = `${scale} 0.5s forwards`
