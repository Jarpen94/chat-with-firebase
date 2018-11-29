import React from 'react'
import { ListItem } from 'material-ui'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import moment from 'moment'
import Avatar from 'material-ui/Avatar'

const MessagesList = (props) => (
    <div>

        {
            props.messages.map(message => (
                <ListItem
                    leftAvatar={
                        <Avatar
                            src={message.author.img}
                        />
                    }
                    primaryText={message.text}
                    secondaryText={`
                        ${moment(message.timestamp).format('DD-MM-YYYY hh:mm')}
                        ${message.author.displayName || message.author.email}
                        `}
                    key={message.key}
                    rightIconButton={
                        <IconButton
                            onClick={() => props.onDeleteMessageClickHandler(message.key)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    }
                />

            ))
        }
    </div>
)

export default MessagesList