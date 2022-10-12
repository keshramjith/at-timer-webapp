import React from 'react'

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ height: '100%', width: '100%' }}>{children}</div>
)

export default Container
