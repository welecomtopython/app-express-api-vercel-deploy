import { Box, Card, Inset, Strong,Text } from '@radix-ui/themes';
import React from 'react'

function CardeBox() {
  return (
    <div className=' max-w-xs'>
      <Box>
        <Card size="2">
          <Inset side="top" pb="current">
            <img
              src={require('./log.png')}
              alt="Bold typography"
              style={{
                display: "block",
                objectFit: "cover",
                width: "100%",
                height: 140,
                backgroundColor: "var(--gray-5)",
              }}
            />
          </Inset>
          <Text as="p" size="3">
            <Strong>Typography</Strong> is the art and technique of arranging
            type to make written language legible, readable and appealing when
            displayed.
          </Text>
        </Card>
      </Box>
    </div>
  );
}

export default CardeBox
