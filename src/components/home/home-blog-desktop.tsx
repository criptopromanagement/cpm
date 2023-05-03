import React, { useState, useEffect, useCallback } from 'react';
import type { Post } from 'src/types/blog';
import { blogApi } from 'src/__next-api__/blog-api';
import NextLink from 'next/link';
import { format } from 'date-fns';
import { Avatar, Box, Card, CardContent, Chip, Link, Typography, Grid, Button } from '@mui/material';
import { getInitials } from '../../utils/get-initials';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { styled } from '@mui/material/styles';

const HomeBlogCard = styled(Card)`
  ${({ theme }) => `
    transition: ${theme.transitions.create(['transform'], {
    duration: theme.transitions.duration.standard
})};
  &:hover {
      transform: scale(1.1);
      
  }
  `}
`;

export const HomeBlogDesktop = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [startIndex, setStartIndex] = useState(0);
    const postsInfinito = [...posts, ...posts, ...posts]
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

    const handleNext = () => {
        setStartIndex((prevIndex) => {
            if (prevIndex === postsInfinito.length - 3) {
                return 0;
            } else {
                return prevIndex + 1;
            }
        });
    };

    const handleBack = () => {
        setStartIndex((prevIndex) => {
            if (prevIndex === 0) {
                return postsInfinito.length - 3;
            } else {
                return prevIndex - 1;
            }
        });
    };



    return (
        <>
            <Box marginLeft={'100px'} marginBottom={5}>
                <Typography align="left"
                    variant="h1">
                    Blog e investigación
                </Typography>
                <Typography
                    align="left"
                    variant="subtitle2"
                    sx={{ py: 1 }}
                >
                    Qué está pasando en el mundo cripto y por qué es importante. Conocé mas sobre las últimas investigaciones del equipo de CPM.
                </Typography>
            </Box>
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
                    onClick={handleBack}
                >

                    <ArrowBackIcon
                        fontSize='large'
                        sx={{
                            border: "thin solid white",
                            borderRadius: "50%"
                        }}

                    />
                </Button>

                {postsInfinito.slice(startIndex, startIndex + 3).map((content, index) => (

                    <Grid
                        item
                        xs={3}
                        key={index}
                        padding="12px"
                    >
                        <HomeBlogCard
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
                                    {content.shortDescription.length > 250 ? `${content.shortDescription.substring(0, 300)}...` : content.shortDescription}
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
                                            {content.author.name.length > 12 ? `${content.author.name.substring(0, 12)}...` : content.author.name}
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

                        </HomeBlogCard>
                    </Grid>
                ))}
                <Button
                    sx={{
                        height: "52px",
                        top: 200,
                        color: "white",
                        marginLeft: "16px"
                    }}
                    onClick={handleNext}
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
        </>
    );
};

