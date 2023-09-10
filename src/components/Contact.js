import React from 'react'
import { Card, Container } from '@mui/material';

export default function Contact() {
    return (
        <Container
        >
            <Card sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", textAlign: "center" }}>

                <div class="container-fluid">
                    <section class="mb-4 border border-dark p-4 text-left">


                        <h2 class="h1-responsive font-weight-bold text-center my-4 section-heading">Contact Me</h2>


                        <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact me
                            directly.</p>

                        <div class="row">


                            <div class="col-md-12 mb-md-0 mb-5">
                                <form id="contact-form" action="https://formsubmit.co/nishantphule08@gmail.com" method="POST">


                                    <div class="row">


                                        <div class="col-md-6">
                                            <div class="md-form mb-0">
                                                <input type="text" id="name" name="name" class="form-control" required />
                                                <label for="name" class="col-form-label">Your name</label>
                                            </div>
                                        </div>


                                        <div class="col-md-6">
                                            <div class="md-form mb-0">
                                                <input type="email" id="email" name="email" class="form-control" required />
                                                <label for="email" class="col-form-label">Your email</label>
                                            </div>
                                        </div>


                                    </div>



                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="md-form mb-0">
                                                <input type="text" id="subject" name="subject" class="form-control" />
                                                <label for="subject" class="col-form-label">Subject</label>
                                            </div>
                                        </div>
                                    </div>



                                    <div class="row">


                                        <div class="col-md-12">

                                            <div class="md-form">
                                                <textarea type="text" id="message" name="message" rows="2"
                                                    class="form-control md-textarea"></textarea>
                                                <label for="message">Your message</label>
                                            </div>

                                        </div>
                                        <input type="hidden" name="_next" value="http://localhost:3000/" />
                                    </div>
                                    <div class="text-center text-md-left">
                                        <button class="btn btn-primary" type="submit">Send</button>
                                    </div>
                                </form>


                            </div>
                        </div>

                    </section>

                    <a href="https://www.linkedin.com/in/nishant-phule-b274ba1b7/"><i
                        class="fa-brands fa-linkedin socials fa-lg"></i></a>
                    <a href="https://twitter.com/phule_nishant"><i class="fa-brands fa-twitter socials fa-lg"></i></a>
                    <a href="https://github.com/Nishantphule"><i class="fa-brands fa-github socials fa-lg"></i></a>
                    <a href="mailto:nishantphule12@gmail.com"><i class="fa-sharp fa-solid fa-envelope socials fa-lg"></i></a>
                    <p>© Copyright 2023 @Nishant</p>
                </div>

            </Card>
        </Container>
    )
}
