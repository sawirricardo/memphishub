import React from 'react';
import Router from "next/router";
import { Button, Form, Header, Grid, Input, Segment, Message } from 'semantic-ui-react'
import jsonp from "jsonp"
import PropTypes from 'prop-types';

class MailchimpForRegisteringEvents extends React.Component {
    constructor(props) {
        super(props)
        this.state = {loadingStatus: false, errorStatus: false};
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
        console.log(email);
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
                Router.push(`/success?registereventid=${this.props.eventid}`);
            };
        });
    }



    render() {
        const { messages, fields, styles, className } = this.props;
        const { status, loadingStatus, errorStatus } = this.state;
        return (
            
                <Form onSubmit={this.handleSubmit.bind(this)} className={className} size="large" loading={loadingStatus} error={errorStatus}>
                    <input type="email" name="email" style={{display: "none"}} />
                    <input type="password" name="password" style={{display: "none"}} />
                        {fields.map(input =>
                            <Form.Field key={Math.random()} >
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
                    {/* <Form.Field className='msg-alert' >
                        {status === "sending" && <p style={styles.sendingMsg}>{messages.sending}</p>}
                        {status === "success" && <p style={styles.successMsg}>{messages.success}</p>}
                        {status === "duplicate" && <p style={styles.duplicateMsg}>{messages.duplicate}</p>}
                        {status === "empty" && <p style={styles.errorMsg}>{messages.empty}</p>}
                        {status === "error" && <p style={styles.errorMsg}>{messages.error}</p>}
                    </Form.Field> */}
                </Form>
            
        );
    }
}

MailchimpForRegisteringEvents.defaultProps = {
    messages: {
        sending: "Sending...",
        success: "Success!",
        error: "An unexpected internal error has occurred. Please try again later",
        empty: "You haven't completed the forms yet",
        duplicate: "Too many subscribe attempts for this email address",
        button: 'Submit!'
    },
    styles: {
        sendingMsg: {
            color: '#0652DD',
            textAlign:"center",
            paddingTop:"1.5em"
        },
        successMsg: {
            color: '#009432',
            textAlign: "center",
            paddingTop: "1.5em"
        },
        duplicateMsg: {
            color: '#EE5A24',
            textAlign: "center",
            paddingTop: "1.5em"
        },
        errorMsg: {
            color: '#ED4C67',
            textAlign: "center",
            paddingTop: "1.5em"
        }
    }
}

MailchimpForRegisteringEvents.propTypes = {
    action: PropTypes.string,
    messages: PropTypes.object,
    fields: PropTypes.array,
    styles: PropTypes.object,
    className: PropTypes.string
};

export default MailchimpForRegisteringEvents;