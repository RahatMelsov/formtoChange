import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { Checkbox, Form } from 'semantic-ui-react'
import { connect } from 'react-redux';
import {addusersDataAC, updateusersDataAC, updateusermonthAC, updateuserslastnameAC, updateusersdayAC, updateusersyearAC, updateuserslocationcityAC, updateuserslocationcowntryAC} from './state'

function ModalExampleCloseIcon(props) {

    const [open, setOpen] = React.useState(false)

    let newName = React.createRef();
    let newLastName = React.createRef();
    let newMonth = React.createRef();
    let newDay = React.createRef();
    let newYear = React.createRef();
    let newCity = React.createRef();
    let newCowntry = React.createRef();



    let updatePost = () => {
        props.store.dispatch(addusersDataAC());
    }
    let onPostChange = (ref, id) => {
        let text = ref.current.value;
        switch(ref) {
            case newName: {
                props.store.dispatch(updateusersDataAC(text, id))
            }
            case newLastName: {
                props.store.dispatch(updateuserslastnameAC(text, id))
            }
            case newMonth: {
                props.store.dispatch(updateusermonthAC(text, id))
            }
            case newDay: {
                props.store.dispatch(updateusersdayAC(text, id))
            }
            case newYear: {
                props.store.dispatch(updateusersyearAC(text, id))
            }
            case newCity: {
                props.store.dispatch(updateuserslocationcityAC(text, id))
            }
            case newCowntry: {
                props.store.dispatch(updateuserslocationcowntryAC(text, id))
            }
        }
        
    }

    return (
        <Modal
            closeIcon
            open={open}
            trigger={<Button icon>
                <Icon name='pencil alternate' />
            </Button>}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        >
            <Header icon='archive' content='Archive Old Messages' />
            <Modal.Content>
                <Form>
                    <Form.Field>
                        <label>First Name</label>
                        <input value={props.user.named} onChange={() => onPostChange(newName, props.user.id)} ref={newName}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input value={props.user.lastName}  onChange={() => onPostChange(newLastName, props.user.id)} ref={newLastName}/>
                    </Form.Field>
                    <Form.Field>
                        <label>City</label>
                        <input value={props.user.location.city}  onChange={() => onPostChange(newCity, props.user.id)} ref={newCity}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Cowntry</label>
                        <input value={props.user.location.cowntry}  onChange={() => onPostChange(newCowntry, props.user.id)} ref={newCowntry}/>
                    </Form.Field>
                    <Form.Group widths='equal'>
                        <Form.Field>
                            <label>Birth day</label>
                            <input value={props.user.DateOfBirth[2]} fluid label='day' placeholder='day' width={2} type='number' min={1} max={31} onChange={() => onPostChange(newDay, props.user.id)} ref={newDay} />
                        </Form.Field>
                        <Form.Field>
                            <label>Birth month</label>
                            <input value={props.user.DateOfBirth[1]} fluid label='month' placeholder='month' width={2} type='number' min={1} max={12} onChange={() => onPostChange(newMonth, props.user.id)} ref={newMonth} />
                        </Form.Field>
                        <Form.Field>
                            <label>Birth year</label>
                            <input value={props.user.DateOfBirth[0]} fluid label='year' placeholder='year' width={6} type='number' min={1920} max={2010} onChange={() => onPostChange(newYear, props.user.id)} ref={newYear} />
                        </Form.Field>
                    </Form.Group>
                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button color='red' onClick={() => setOpen(false)}>
                    <Icon name='remove' /> No
        </Button>
                <Button color='green' onClick={() => {
                    updatePost()
                    setOpen(false)
                    }
                    }>
                    <Icon name='checkmark' /> Yes
        </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default connect()(ModalExampleCloseIcon);