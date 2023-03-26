import {useEffect, useState } from 'react';
import './App.css';
import messagesList from './data/messagesList';
import { READ, UNREAD } from './constants';

import Controls from './components/Controls';
import List from './components/List';

function App() {
  const [messages, setMessages] = useState(messagesList);

  useEffect(() => {
    const isAllMessagesRead = messages.every(({ status }) => status === READ);
  
    if (isAllMessagesRead) {
      alert('Parabéns! Você leu todas suas mensagens!');
    }
  }, [messages]);
//   O useEffect recebe dois parâmetros: uma função como primeiro parâmetro e um array com dependências como segundo parâmetro. Sempre que há alguma alteração em algum dos itens desse array, a função passada no primeiro parâmetro é executada.
// Em nosso código, toda vez que a lista de e-mails for alterada, é feita uma verificação para saber se todos e-mails são lidos, usando o método every. Caso todos os e-mails estejam lidos, um alert é disparado.

  const setMessageStatus = (messageId, newStatus) => {
    const updatedMessages = messages.map((currentMessage) => {
      if (currentMessage.id === messageId) {
        return { ...currentMessage, status: newStatus };
      }
      return currentMessage;
    });

    setMessages(updatedMessages);

      
//     A função setMessageStatus passa por cada item da lista de mensagens salva no estado por meio do método .map. Caso o item iterado tenha o id que é recebido pelo parâmetro messageId, um novo objeto é retornado com o novo status definido pelo parâmetro newStatus. Caso contrário, o item é retornado sem modificações.

// Ao final do .map, temos uma nova lista, com somente o item selecionado alterado. Essa nova lista é salva no estado, usando a função setMessages.
  };
  const markAllAsRead = () => {
    const allAsRead = messages.map((m) => ({ ...m, status: READ }));
    setMessages(allAsRead);
  };

  const markAllAsUnread = () => {
    const allAsRead = messages.map((m) => ({ ...m, status: UNREAD }));
    setMessages(allAsRead);
  };
  return (
    <div className="App">
      <header>
        <h1>TrybeMail</h1>
      </header>
     <List
        messages={ messages }
        setMessageStatus={ setMessageStatus }
      />
      <Controls
        markAllAsRead={ markAllAsRead }
        markAllAsUnread={ markAllAsUnread }
      />
    </div>
  );
}

export default App;
