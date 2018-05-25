import React from 'react';
import { Container, Header, Button, Icon, Image } from 'semantic-ui-react';

const Jumbotron = () => (
    <Container style={{paddingTop: "10em", paddingBottom:"10em"}}>
        <Image src="" fluid/>
        <Container text>
            <Header
                as='h1'
                content='MemphisHub'
                textAlign="center"
            />
            <Header
                as='h2'
                content='Do whatever you want in Memphis'
                textAlign="center"
            />
        </Container>
    </Container>
)

export default Jumbotron;