import styled from 'styled-components';

type ConstainerProps = {
  done: boolean;
}

export const Container = styled.div(({ done }: ConstainerProps)=>(
  `
  display: flex;
  background-color: #20212C;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;

  input {
    width: 20px;
    height: 20px;
  }

  label {
    color: #CCC;
    text-decoration: ${done ? 'line-through' : 'initial'};
  }
  `
));
