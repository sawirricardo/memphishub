import React from 'react';
import { Button, Form, Header, Grid, Input, Message, Container } from 'semantic-ui-react'
import jsonp from "jsonp"
import PropTypes from 'prop-types';

class MailchimpContactUs extends React.Component {
    constructor(props) {
        super(props)
        this.state = { loadingStatus: false, errorStatus: false };
    };

    handleSubmit(evt) {
        evt.preventDefault();
        const { fields, action } = this.props;
        const values = fields.map(field => {
            return `${field.name}=${encodeURIComponent(this.state[field.name])}`;
        }).join("&");
        const path = `${action}&${values}`;
        const url = path.replace('/post?', '/post-json?');
        const regex = /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/;
        const email = this.state['EMAIL'];
        (!regex.test(email)) ? this.setState({ status: "empty" }) : this.sendData(url);
    };

    sendData(url) {
        this.setState({ status: "sending", loadingStatus: true });
        jsonp(url, { param: "c" }, (err, data) => {
            if (data.msg.includes("already subscribed")) {
                this.setState({ status: 'duplicate', errorStatus: true, loadingStatus: false });
            } else if (err) {
                this.setState({ status: 'error', errorStatus: true, loadingStatus: false });
            } else if (data.result !== 'success') {
                this.setState({ status: 'error', errorStatus: true, loadingStatus: false });
            } else {
                this.setState({ status: 'success' });
                Router.push(`/browsecategories`);
            };
        });
    }

    render() {
        const { messages, fields, styles, className } = this.props;
        const { status, loadingStatus, errorStatus } = this.state;
        return (
            
            <Form onSubmit={this.handleSubmit.bind(this)} className={className} size="large" loading={loadingStatus} error={errorStatus}>
                {fields.map(input =>
                    <Form.Field>
                    <Header as="h3" key={Math.random()}>{input.name}</Header>
                    <Input key={Math.random()}
                        onBlur={({ target }) => this.setState({ [input.name]: target.value })}
                        placeholder={input.placeholder}
                        name={input.name}
                        type={input.type}
                        defaultValue={this.state[input.name]} 
                        size="large"
                    />
                    </Form.Field>
                )}
                <Container textAlign='center'>
                    <Button
                        color="green"
                        disabled={status === "sending" || status === "success"}
                        type="submit"
                    >
                        {messages.button}
                    </Button>

                    <Message error>
                        <Message.Header>Error!</Message.Header>
                        {status === "duplicate" && <p>{messages.duplicate}</p>}
                        {status === "empty" && <p>{messages.empty}</p>}
                        {status === "error" && <p>{messages.error}</p>}
                    </Message>
                </Container>
            </Form>
            
        );
    }
}

MailchimpContactUs.defaultProps = {
    messages: {
        error: "An unexpected internal error has occurred.",
        empty: "You haven't completed the form yet",
        duplicate: "Too many attempts for this email address",
        button: 'Send!'
    }
}

MailchimpContactUs.propTypes = {
    action: PropTypes.string,
    messages: PropTypes.object,
    fields: PropTypes.array,
    styles: PropTypes.object,
    className: PropTypes.string
};

export default MailchimpContactUs;