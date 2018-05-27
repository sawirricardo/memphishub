import React from 'react';
import Layout from '../components/Layout';
import MailchimpContactUs from '../components/MailchimpForContactUs';


const ContactUsPage = () => {
    return (
        <Layout title="Contact Us | MemphisHub">
            <MailchimpContactUs
                action="https://github.us18.list-manage.com/subscribe/post?u=fb17d3eb8c27deaae717f1c3f&amp;id=db46e57571"
                fields={[
                    {
                        name: 'EMAIL',
                        placeholder: 'Youremail@email.com',
                        type: 'email',
                        required: true
                    },
                    {
                        name: 'NAME',
                        placeholder: 'Your Full Name',
                        type: 'text',
                        required: true
                    },
                    {
                        name: 'MESSAGE',
                        placeholder: 'Tell us',
                        type: 'text',
                        required: true
                    }
                ]}
            />
        </Layout>
    )
}

export default ContactUsPage;