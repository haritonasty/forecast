import styled from 'styled-components';
import { colorTheme } from '../../utils/style';

export const Wrapper = styled.div`
  height: 380px;
  overflow-y: auto;
  width: 100%;
  padding-right: 10px;
  &::-webkit-scrollbar {
    height: 4px;
    width: 4px;
  }

  &::-webkit-scrollbar-track-piece {
    background-color: ${colorTheme.border};
  }

  &::-webkit-scrollbar-thumb {
    background: ${colorTheme.primary};
    border-radius: 4px;
  }
`;

export const CitiesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

export const Container = styled.div`
  width: 100%;
  @media (max-width: 700px) {
    display: none;
  }
`;
