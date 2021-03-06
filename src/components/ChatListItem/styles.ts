import styled from 'styled-components';

import DefaultAvatar from 'ui/Avatar';

export const Container = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  height: 70px;

  &:hover {
    background-color: var(--white-100);
  }

  &.active {
    background-color: var(--gray);
  }
`;

export const Avatar = styled(DefaultAvatar).attrs({
  width: 50,
  height: 50,
})`
  margin-left: 15px;
`;

export const Lines = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid var(--white-200);
  padding-right: 15px;
  margin-left: 15px;
  flex-wrap: wrap;
  min-width: 0;
  height: 100%;

  ${Container}.active & {
    border-bottom-color: var(--gray);
  }
`;

export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Name = styled.div`
  font-size: 17px;
  color: var(--black);
`;

export const LastMessageDate = styled.div`
  font-size: 12px;
  color: var(--gray-dark);
`;

export const LastMessage = styled.div`
  font-size: 14px;
  color: var(--gray-dark);
  display: flex;
  width: 100%;

  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
  }
`;
