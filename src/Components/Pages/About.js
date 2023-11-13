import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const About = () => {
    // Generate 1000 words of Lorem Ipsum text for demonstration
    const loremIpsumText = Array(20).fill(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra mauris ut justo laoreet, sit amet feugiat nisl feugiat. Nam vitae suscipit turpis. Vivamus nec augue sit amet quam sagittis venenatis vel at nulla. Aliquam erat volutpat. Aenean quis leo ac sapien sollicitudin bibendum. Curabitur ac lacinia nulla. Nulla at vestibulum urna. Fusce dapibus odio non felis ullamcorper, in suscipit libero rhoncus. Sed interdum felis ut luctus fermentum. Nam eget metus eu turpis facilisis pharetra. Etiam eu est eu felis iaculis feugiat a id justo. Integer gravida libero a luctus fermentum. Duis eu rhoncus lacus. Suspendisse potenti. Pellentesque vel volutpat est. Phasellus ullamcorper enim ac justo malesuada, nec ullamcorper erat convallis. Integer sit amet varius arcu. Mauris ut arcu eget orci bibendum varius ac a purus.'
    ).join(' ');

    return (
        <Container maxWidth="md" sx={{ marginTop: '20px' }}>
            <Typography variant="h4" gutterBottom>
                About Us
            </Typography>
            <Typography paragraph sx={{ textAlign: 'justify', textJustify: 'inter-word', lineHeight: '1.6' }}>
                {loremIpsumText}
            </Typography>
        </Container>
    );
};

export default About;
