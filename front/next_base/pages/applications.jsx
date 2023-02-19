import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Applications() {
  return (
    <>
    <div class ="card_wrapper">
        <div class ="card_box">
            <Link href="/read_csv">
                <Card sx={{ minWidth: 275 }} >
                    <CardContent >
                        <div class = "card_category">
                            <p>Read CSV</p>
                        </div>
                        <div class = "card_title">
                            <p>You can use csv files</p>
                        </div>
                        <div class = "card_subcategory">
                            <p>CSV</p>
                        </div>
                        <div class = "card_body">
                            <p class = "card_body--content">This is read csv and table style output.</p>
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Link>
        </div>
        <div class ="card_box">
            <Link href="/read_sql">
                <Card sx={{ minWidth: 275 }} >
                    <CardContent >
                       <div class = "card_category">
                            <p>Read SQL</p>
                        </div>
                        <div class = "card_title">
                            <p>You can use Database</p>
                        </div>
                        <div class = "card_subcategory">
                            <p>SQL</p>
                        </div>
                        <div class = "card_body">
                            <p class = "card_body--content">This is read database and table output.</p>
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Link>
        </div>
        <div class ="card_box">
            <Link href="/read_csv">
                <Card sx={{ minWidth: 275 }} >
                    <CardContent >
                        <div class = "card_category">
                            <p>Read CSV</p>
                        </div>
                        <div class = "card_title">
                            <p>You can use csv files</p>
                        </div>
                        <div class = "card_subcategory">
                            <p>adjective</p>
                        </div>
                        <div class = "card_body">
                            <p class = "card_body--content">This is read csv and table output.</p>
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Link>
        </div>
        <div class ="card_box">
            <Link href="/read_csv">
                <Card sx={{ minWidth: 275 }} >
                    <CardContent >
                        <div class = "card_category">
                            <p>Read CSV</p>
                        </div>
                        <div class = "card_title">
                            <p>You can use csv files</p>
                        </div>
                        <div class = "card_subcategory">
                            <p>adjective</p>
                        </div>
                        <div class = "card_body">
                            <p class = "card_body--content">This is read csv and table output.</p>
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Link>
        </div>
        <div class ="card_box">
            <Link href="/read_csv">
                <Card sx={{ minWidth: 275 }} >
                    <CardContent >
                       <div class = "card_category">
                            <p>Read CSV</p>
                        </div>
                        <div class = "card_title">
                            <p>You can use csv files</p>
                        </div>
                        <div class = "card_subcategory">
                            <p>adjective</p>
                        </div>
                        <div class = "card_body">
                            <p class = "card_body--content">This is read csv and table output.</p>
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Link>
        </div>

    </div>
    </>

);
}