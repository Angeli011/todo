import { useState } from 'react';
import * as Component from './App.styles';
import { ListItem } from './components/ListItem';
import {Item} from './types/Item';

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'buy string', done: false},
    { id: 2, name: 'buy cake', done: true}
  ]);

  return (
    <Component.Container>
      <Component.Area>
        <Component.Header>Lista de Tarefas</Component.Header>

        {list.map((item, index)=>(
          <ListItem key={index} item={item} />
        ))}
      </Component.Area>
    </Component.Container>
  );
}

export default App;