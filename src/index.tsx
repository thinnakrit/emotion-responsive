import styled from '@emotion/styled'

interface ColProps {
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  xxl?: number
  xxxl?: number
}

interface RowProps {
  gap?: number
}

interface ContainerProps {
  innerWidth?: number
  maxWidth?: number
}

const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: ${(props) => (props.maxWidth || 1280) - (props.innerWidth || 0)}px;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${(props) => props.innerWidth || 0}px;
  padding-right: ${(props) => props.innerWidth || 0}px;
`

const Row = styled.div<RowProps>`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.gap || 0}px;
  --gap: ${(props) => props.gap || 0}px;
`

const Col = styled.div<ColProps>`
  position: relative;
  flex: 0 0 auto;
  width: ${(1 * 100) / 12}%;

  ${(props) => props.xs && `width: calc(${(props.xs * 100) / 12}% - var(--gap));`};
  @media (min-width: 640px) {
    ${(props) => props.sm && `width: calc(${(props.sm * 100) / 12}% - var(--gap));`}
  }

  @media (min-width: 768px) {
    ${(props) => props.md && `width: calc(${(props.md * 100) / 12}% - var(--gap));`}
  }

  @media (min-width: 1024px) {
    ${(props) => props.lg && `width: calc(${(props.lg * 100) / 12}% - var(--gap));`}
  }

  @media (min-width: 1280px) {
    ${(props) => props.xl && `width: calc(${(props.xl * 100) / 12}% - var(--gap));`}
  }

  @media (min-width: 1440px) {
    ${(props) => props.xxl && `width: calc(${(props.xxl * 100) / 12}% - var(--gap));`}
  }

  @media (min-width: 1920px) {
    ${(props) => props.xxxl && `width: calc(${(props.xxxl * 100) / 12}% - var(--gap));`}
  }
`

export { Container, Row, Col }
