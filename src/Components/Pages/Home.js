import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { getAllImages } from '../../Services/imageAxiosApi';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { getAllSideImages } from '../../Services/sidebannerAxiosApi';

const Home = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const [images, setImages] = useState([]);
    const [sideImages, setSideImages] = useState(null);

    const fetchImages = async () => {
        try {
            const response = await getAllImages();
            console.log('API Response:', response);

            // Access the images array within the data property
            const imagesData = response;
            console.log('imagesData:', imagesData);

            // Check if images array exists
            if (imagesData && Array.isArray(imagesData)) {
                setImages(imagesData);
            } else {
                console.error('No images data found in the API response.');
            }
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    }
    const fetchSideImages = async () => {
        try {
            const response = await getAllSideImages();
            console.log('API Response:', response);

            // Access the images array within the data property
            const imagesData = response;
            console.log('imagesData:', imagesData);

            // Check if images array exists
            if (imagesData && Array.isArray(imagesData)) {
                setSideImages(imagesData);
            } else {
                console.error('No images data found in the API response.');
            }
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    }



    useEffect(() => {
        // Call the fetchData function when the component mounts
        fetchImages();
        fetchSideImages();
    }, []);


    return (
        <div>
            <Container style={{ height: '70vh' }}>
                <Carousel showArrows={true}
                    showStatus={false}
                    showThumbs={false}
                    infiniteLoop={true}
                    emulateTouch={true}
                    autoPlay={true}
                    interval={5000}
                    stopOnHover={false}>

                    {images && images.map((image, index) => (
                        <img
                            key={index}
                            src={image.imageUrl}
                            alt={`Banner ${index + 1}`}
                            style={{
                                width: '100%', height: '450px', objectFit: 'cover', margin: '3px', // Clear any default margins
                                padding: 0,
                            }}
                        />
                    ))}

                </Carousel>
            </Container>
            <Typography variant="h3" sx={{ marginTop: '10px' }}>
                Why you choose us

            </Typography>

            <Container margin="dense" sx={{ marginTop: '20px' }}>
                <Box >
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <div style={{ borderRadius: '4px', overflow: 'hidden' }}>
                                {sideImages && sideImages.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image.imageUrl}
                                        alt={`Banner ${index + 1}`}
                                        style={{
                                            width: '90%', height: '80%', objectFit: 'cover', margin: '3px', // Clear any default margins
                                            padding: 0,
                                        }}
                                    />
                                ))}
                            </div>
                        </Grid>
                        <Grid xs={6}>
                            <Typography variant="body1" sx={{ marginTop: '10px' }}>Leading Designers for your project</Typography>

                            <Typography paragraph sx={{ textAlign: 'justify', textJustify: 'inter-word', lineHeight: '1.6' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra mauris ut justo laoreet, sit amet feugiat nisl feugiat. Nam vitae suscipit turpis. Vivamus nec augue sit amet quam sagittis venenatis vel at nulla. Aliquam erat volutpat. Aenean quis leo ac sapien sollicitudin bibendum. Curabitur ac lacinia nulla. Nulla at vestibulum urna. Fusce dapibus odio non felis ullamcorper, in suscipit libero rhoncus.

                                Sed interdum felis ut luctus fermentum. Nam eget metus eu turpis facilisis pharetra. Etiam eu est eu felis iaculis feugiat a id justo. Integer gravida libero a luctus fermentum. Duis eu rhoncus lacus. Suspendisse potenti. Pellentesque vel volutpat est. Phasellus ullamcorper enim ac justo malesuada, nec ullamcorper erat convallis. Integer sit amet varius arcu. Mauris ut arcu eget orci bibendum varius ac a purus.

                                Vestibulum in lacinia nunc. Integer convallis mauris vel arcu facilisis suscipit. Suspendisse potenti. Sed in lorem id quam eleifend euismod. Morbi in nulla a arcu lacinia egestas. Integer a ultricies libero. Fusce vel justo in urna interdum gravida. Proin nec orci vel ex viverra feugiat.

                                Donec eget turpis nec ligula ultrices sagittis et non lacus. Fusce facilisis felis a risus dapibus ullamcorper. Nullam euismod enim a sapien tristique, vel pharetra est ullamcorper. Curabitur sit amet quam at enim ultrices gravida. Maecenas vel dolor in orci pharetra varius vitae eu velit. Phasellus a pharetra enim, non tincidunt ipsum.

                                Praesent ac mi vitae justo auctor iaculis non in odio. Integer lacinia turpis at tortor hendrerit feugiat. Curabitur eu purus eu urna fermentum dictum eu nec quam. Nullam ultricies dui ut dui maximus, at consectetur quam fermentum. Aliquam erat volutpat. Suspendisse cursus velit a fermentum gravida. Aliquam erat volutpat. Sed efficitur arcu non turpis pharetra, ac varius quam eleifend.

                                .</Typography>


                        </Grid>
                    </Grid>
                </Box>
            </Container>


        </div >
    )
}

export default Home