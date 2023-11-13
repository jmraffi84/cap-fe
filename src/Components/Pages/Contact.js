import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import { postContactForm } from '../../Services/contactAxiosApi';
import * as yup from "yup"
import { useFormik, useFormikContext } from 'formik'

export const contactFormSchema = yup.object({
    name: yup.string().required("please fill the name"),
    email: yup.string().required("Invalid email address").required('Email is required'),
    phone: yup.string().required("Please specify your phone no"),
    areaCode: yup.string().required("Please select your areaCode"),
    country: yup.string().required("Please fill country"),
    business: yup.string().required("It is not bad to tell you business name"),
})


const Contact = () => {


    // postContactForm
    const { values, handleChange, handleSubmit, handleBlur, errors, touched, resetForm } = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            areaCode: "",
            country: "",
            business: ""
        },
        validationSchema: contactFormSchema,
        onSubmit: async (values, { resetForm }) => {
            await formSubmit(values, { resetForm });
        }
    })

    const categories = ["+91", "+65", "+96", "+1"];

    const formSubmit = async (formData, { resetForm }) => {
        try {

            // Call the service to submit the form data
            const response = await postContactForm(formData);
            console.log('Form submitted successfully:', response);
            // Handle success, e.g., show a success message or redirect
            resetForm();
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error, e.g., show an error message to the user
        }

    };

    return (

        <Paper elevation={3} sx={{ marginRight: "15%", marginLeft: "15%", marginTop: "15px", marginBottom: "20px" }}>
            <Typography>Contact  Us</Typography>

            <Box sx={{ padding: 5 }}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={2}>
                            <InputLabel
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    fontWeight: 700
                                }}
                            >
                                Name
                            </InputLabel>

                        </Grid>

                        <Grid item xs={12} sm={10}>
                            <TextField
                                required

                                name="name"
                                label="Enter your name"
                                fullWidth
                                size="small"
                                autoComplete="off"
                                variant="outlined"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.name && errors.name ? <span style={{ color: "crimson" }}>
                                {errors.name}
                            </span> : ""}
                        </Grid>

                        <Grid item xs={12} sm={2}>
                            <InputLabel
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    fontWeight: 700
                                }}
                            >
                                Email
                            </InputLabel>
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <TextField
                                required

                                name="email"
                                label="Enter your email"
                                fullWidth
                                size="small"
                                autoComplete="off"
                                variant="outlined"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}

                            />
                            {touched.email && errors.email ? <span style={{ color: "crimson" }}>
                                {errors.email}
                            </span> : ""}
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <InputLabel
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    fontWeight: 700
                                }}
                            >
                                Country
                            </InputLabel>
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <TextField
                                required
                                name="country"
                                label="Enter your country"
                                fullWidth
                                size="small"
                                autoComplete="off"
                                variant="outlined"
                                value={values.country}
                                onChange={handleChange}
                                onBlur={handleBlur}

                            />
                            {touched.country && errors.country ? <span style={{ color: "crimson" }}>
                                {errors.country}
                            </span> : ""}
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <InputLabel
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    fontWeight: 700
                                }}
                            >
                                Business
                            </InputLabel>
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <TextField
                                required

                                name="business"
                                label="Enter your business name"
                                fullWidth
                                size="small"
                                autoComplete="off"
                                variant="outlined"
                                value={values.business}
                                onChange={handleChange}
                                onBlur={handleBlur}

                            />
                            {touched.business && errors.business ? <span style={{ color: "crimson" }}>
                                {errors.business}
                            </span> : ""}
                        </Grid>

                        {/*  */}
                        <Grid item xs={12} sm={2}>
                            <InputLabel
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    fontWeight: 700
                                }}
                            >
                                Area Code
                            </InputLabel>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth size="small">
                                <InputLabel id="demo-simple-select-label">Code</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"

                                    label="areaCode"
                                    name="areaCode"
                                    value={values.areaCode || ''}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                    {categories.map((item, idx) => (
                                        <MenuItem key={idx} value={item}>{item}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <InputLabel
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    fontWeight: 700
                                }}
                            >
                                Phone No
                            </InputLabel>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                required

                                name="phone"
                                label="phone"
                                fullWidth
                                size="small"
                                autoComplete="off"
                                variant="outlined"
                                value={values.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.phone && errors.phone ? <span style={{ color: "crimson" }}>
                                {errors.phone}
                            </span> : ""}
                        </Grid>

                        <Grid item xs={12} sm={6} />
                        <Grid item xs={12} sm={5} />
                        <Grid item xs={12} sm={4}>
                            <Button type="submit" variant="contained" sx={{ color: "#ff781f", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                save
                            </Button>

                            <Typography variant="caption" color="error" mt={1}>

                            </Typography>

                        </Grid>

                    </Grid>
                </form>
            </Box>
        </Paper >
    );
}

export default Contact;