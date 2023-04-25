import React, { useState, useEffect, useCallback } from 'react';
import type { Post } from 'src/types/blog';
import { blogApi } from 'src/__next-api__/blog-api';
import NextLink from 'next/link';
import { format } from 'date-fns';
import { Avatar, Box, Card, CardContent, Chip, Link, Typography, Grid, Button } from '@mui/material';
import { getInitials } from '../../utils/get-initials';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import type { FC } from "react";
// import PropTypes from "prop-types";

// interface HomeBlogDesktopProps {
//     next?: () => void;
//     forward?: () => void;

// }

export const HomeBlogDesktop = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    // const { next, forward } = props;
    const getPosts = useCallback(async () => {
        try {
            const result = await blogApi.getPosts();
            setPosts(result)
        } catch (err) {
            console.error(err);
        }
    }, []);

    useEffect(() => {
        getPosts();
    }, [getPosts]);



    return (

        <Grid
            container
            spacing={3}
            justifyContent="center"
            mb={3}
        >
            <Button
                sx={{
                    height: "52px",
                    top: 200,
                    color: "white",

                }}
            // onClick={forward}
            >

                <ArrowBackIcon
                    fontSize='large'
                    sx={{
                        border: "thin solid white",
                        borderRadius: "50%"
                    }}

                />
            </Button>
            {posts.map((content) => {
                return (
                    <Grid
                        item
                        xs={3}
                        key={content.id}
                    >
                        <Card
                            sx={{
                                backgroundColor: "#1c1c1c",
                                border: "thin white solid",
                            }}

                        >
                            <NextLink
                                href="/blog/1"
                                passHref
                            >
                                <Box
                                    component="img"
                                    src={content.cover}
                                    alt={content.title}
                                    sx={{
                                        height: "150px",
                                        display: "block",
                                        maxWidth: "100%",
                                        overflow: "hidden",
                                        width: "100%",

                                    }}
                                />
                            </NextLink>
                            <CardContent>
                                <Box sx={{ mb: 2 }}>
                                    <Chip label={content.category} />
                                </Box>
                                <NextLink
                                    href="/blog/1"
                                    passHref
                                >
                                    <Link
                                        color="textPrimary"
                                        component="a"
                                        variant="h5"
                                    >
                                        {content.title}
                                    </Link>
                                </NextLink>
                                <Typography
                                    color="textSecondary"
                                    sx={{
                                        mt: 1,
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 2
                                    }}
                                    variant="body1"
                                >
                                    {content.shortDescription}
                                </Typography>
                                <Box
                                    sx={{
                                        alignItems: 'center',
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        mt: 2
                                    }}
                                >
                                    <Box
                                        sx={{
                                            alignItems: 'center',
                                            display: 'flex'
                                        }}
                                    >
                                        <Avatar
                                            src={content.author.avatar}
                                            sx={{ mr: 2 }}
                                        >
                                            {getInitials(content.author.name)}
                                        </Avatar>
                                        <Typography variant="subtitle2">
                                            By
                                            {' '}
                                            {content.author.name}
                                            {' '}
                                            •
                                            {' '}
                                            {format(content.publishedAt, 'MMM d, yyyy')}
                                        </Typography>
                                    </Box>
                                    <Typography
                                        align="right"
                                        color="textSecondary"
                                        sx={{ flexGrow: 1 }}
                                        variant="body2"
                                    >
                                        {`${content.readTime} read`}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                )
            })}
            <Button
                sx={{
                    height: "52px",
                    top: 200,
                    color: "white",

                }}
            // onClick={next}
            >

                <ArrowForwardIcon
                    fontSize='large'
                    sx={{
                        border: "thin solid white",
                        borderRadius: "50%"
                    }}
                />
            </Button>
        </Grid>
    );
};

// HomeBlogDesktop.propTypes = {
//     next: PropTypes.func,
//     forward: PropTypes.func,

// } 