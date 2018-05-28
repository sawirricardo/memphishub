import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { Container, Button, Header, Divider } from 'semantic-ui-react';

const About = () => {
    return (
      <React.Fragment>
        <Layout title="About MemphisHub">
          <Container text>
            <Header as="h1">About MemphisHub</Header>
            <p>
              We are a group of unconventional urbanists, coming from many
              backgrounds and places, who believe that thriving will not be
              found through the usual strategies and tactics involving
              technology, money, and policy alone, but rather by situating
              these critical mechanisms in the context of history, culture,
              geography, and power. In short, we aim to fill a gap in urban
              thinking and practice summed up by the question: “What do the
              humanities have to say to the urban practitioner?” Out of this
              perspective, we are creating a conceptual paradigm for urban
              assessment and a toolkit for putting that paradigm into action.
              We believe working for the thriving of our communities is not
              only an empirical science, but also a moral, civic, and
              political art.
            </p>
            <Divider />
            <Header as="h1">WHO IS THIS FOR?</Header>
            <p>
              Everyone. Thriving Cities is for all of the stakeholders working
              on and for the common good of their cities. However, it is
              especially committed to finding ways to bridge the many deep and
              abiding differences that characterize most urban communities
              today. Where much conventional urbanism focuses on issues of
              structural complexity—traffic, housing, poverty, jobs, etc.—our
              unconventional urbanism aspires to engage one of the thorniest
              urban challenges of all: the problem of pluralism. The Thriving
              Cities framework and toolkit are intended to create
              opportunities for fostering “unusual coalitions” of citizens
              across religious, racial, and ideological divisions. This, we
              believe, is essential for forging any genuine and lasting
              possibility for thriving in our cities.
            </p>
            <Link href={`/contactus`} prefetch passHref>
              <Button>
                Give us a shout!
              </Button>
            </Link>
          </Container>
        </Layout>
      </React.Fragment>
    );
}

export default About;