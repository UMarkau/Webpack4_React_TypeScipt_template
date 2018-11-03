import * as React from 'react'

class Message extends React.Component<MessageProps> {
    render() {
        const {from, body} = this.props;
        return (
            <div>
                {`You got a new message from ${from}: ${body}`}
            </div>
        );
    };
};

interface MessageProps {
    body: string
    from: string
};

export default Message;