import './App.css';
import 'semantic-ui-css/semantic.min.css'
import React from 'react'
import { Button, Table, Header, Icon } from 'semantic-ui-react'
import { makeDate } from './state'
import ModalExampleCloseIcon from './modal'

function App(props) {

  console.log(props.store.getState())

  return (
    <div>
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Evidence Rating</Table.HeaderCell>
            <Table.HeaderCell>Effect</Table.HeaderCell>
            <Table.HeaderCell>Efficacy</Table.HeaderCell>
            <Table.HeaderCell>Consensus</Table.HeaderCell>
          </Table.Row> 
        </Table.Header>

        <Table.Body>
          {props.store.getState().UsersPage.Users.map((u) => {
            return (
              <Table.Row>
                <Table.Cell>{u.named}</Table.Cell>
                <Table.Cell>{u.lastName}</Table.Cell>
                <Table.Cell>{makeDate(u.DateOfBirth)}</Table.Cell>
                <Table.Cell>{u.location.city} from {u.location.cowntry}</Table.Cell>
                <Table.Cell><ModalExampleCloseIcon store={props.store} user={u}/>
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>

    </div>

  );
}

export default App;
