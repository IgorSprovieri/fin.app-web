import { Flex } from '@chakra-ui/react'

export const ListItems = ({ list, Render, flexDir, marginTop, lines }) => {
  const rowLength = Math.abs(list?.length / lines)

  const Row = ({ min, max }) => {
    return (
      <Flex flexDir={flexDir} marginTop={'4px'} w={'max-content'}>
        {list.slice(min, max).map((element) => (
          <Render key={element.id} id={element.id} element={element}></Render>
        ))}
      </Flex>
    )
  }
  return (
    <Flex overflow={'scroll'} marginTop={marginTop} flexDir={'column'}>
      {[...Array(lines)].map((e, i) => (
        <Row
          key={i}
          min={rowLength * i}
          max={i - 1 === list.length ? i : rowLength * (i + 1)}
        ></Row>
      ))}
    </Flex>
  )
}
