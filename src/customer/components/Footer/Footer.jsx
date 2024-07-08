import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-alice-carousel'

const Footer = () => {
    return (
        <div>
            <Grid className="bg-black text-white text-center mt-10"
                container
                sx={{ bgcolor: "black", color: "white", py: 3 }}
            >
                <Grid item xs={12} sm={6} md={3}>

                    <Typography variant="h6" component="h2">Company</Typography>
                    <div>
                        <button className="pb-1" variant="h6" >About</button>
                    </div>
                    <div>
                        <button className="pb-1" variant="h6" >Blog</button>
                    </div>
                    <div>
                        <button className="pb-1" variant="h6" >Press</button>
                    </div>
                    <div>
                        <button className="pb-1" variant="h6" >Job</button>
                    </div>
                    <div>
                        <button className="pb-1" variant="h6" >Partner</button>
                    </div>

                </Grid>
                <Grid item xs={12} sm={6} md={3}>

                    <Typography variant="h6" component="h2">Solutions</Typography>
                    <div>
                        <button className="pb-1" variant="h6" >Marketing</button>
                    </div>
                    <div>
                        <button className="pb-1" variant="h6" >Analytics</button>
                    </div>
                    <div>
                        <button className="pb-1" variant="h6" >Commerce</button>
                    </div>
                    <div>
                        <button className="pb-1" variant="h6" >Insights</button>
                    </div>
                    <div>
                        <button className="pb-1" variant="h6" >Support</button>
                    </div>

                </Grid>
                <Grid item xs={12} sm={6} md={3}>

                    <Typography variant="h6" component="h2">Documentation</Typography>
                    <div>
                        <button className="pb-1" variant="h6" >Guides</button>
                    </div>
                    <div>
                        <button className="pb-1" variant="h6" >API Status</button>
                    </div>

                </Grid>
                <Grid item xs={12} sm={6} md={3}>

                    <Typography variant="h6" component="h2">Legal</Typography>
                    <div>
                        <button className="pb-1" variant="h6" >Claim</button>
                    </div>
                    <div>
                        <button className="pb-1" variant="h6" >Privacy</button>
                    </div>
                    <div>
                        <button className="pb-1" variant="h6" >Terms</button>
                    </div>

                </Grid>

                <Grid className="pt-14" item xs={12}>
                    <Typography variant="body2" component="p" align='center'>
                        &copy; 2024 My Website. All rights reserved.
                    </Typography>
                    <Typography variant="body2" component="p" align='center'>
                        Made with <span role="img" aria-label="heart">��️</span> by
                    </Typography>
                    <Typography variant="body2" component="p" align='center'>
                        Icons made by {' '} 
                        <Link href="https://www.freepik.com" color="inherit" underline="always">
                            Freepik
                        </Link>
                        {' '}from{' '}
                        <Link href="https://www.flaticon.com" color="inherit" underline="always">
                            www.flaticon.com
                        </Link>
                    </Typography>
                </Grid>

            </Grid>
        </div>
    )
}

export default Footer
