import React from 'react'

const NewMessageForm = (props) => (





    <div>
        <input
            type="text"
            value={props.newMessageText}
            onChange={props.onNewMessageTextChandler}
        />
        <button
            onClick={props.onNewMessageAddClickHandler}
        >
            Add message!
</button>

    </div>

)



export default NewMessageForm