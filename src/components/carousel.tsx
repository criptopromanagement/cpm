import React, { useState } from "react";
import { FC } from "react";
import { Avatar, Box, Card, CardContent, Chip, Link, Typography, Grid, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import NextLink from 'next/link';
import { format } from "date-fns"
import { getInitials } from "src/utils/get-initials";
import type { Post } from 'src/types/blog';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';


const carouselItemStyles = {

    active: {
        border: "thin white solid",
        scale: "1.1",
    }

};


export const Carousel: FC<{ posts: Post[] }> = ({ posts }) => {
    const theme = useTheme();
    const postsInfinito = [...posts, ...posts, ...posts];
    const [activeIndex, setActiveIndex] = useState(0);

    const handleChangeIndex = (index: number) => {
        setActiveIndex(index);
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % (Math.ceil(postsInfinito.length / 3) - 1));
    };

    const handleBack = () => {
        setActiveIndex((prevIndex) =>
            (prevIndex - 1 + (Math.ceil(postsInfinito.length / 3) - 1)) % (Math.ceil(postsInfinito.length / 3) - 1)
        );
    };

    return (
        <>
            <Box
                component="div"
                display="flex"
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

                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeIndex}
                    onChangeIndex={handleChangeIndex}
                    enableMouseEvents
                >
                    {(() => {
                        const slides: JSX.Element[] = []
                        const numSlides = Math.ceil(postsInfinito.length / 3)
                        let startIndex = activeIndex

                        for (let i = 0; i < numSlides; i++) {
                            slides.push(
                                <Grid
                                    container
                                    spacing={3}
                                    justifyContent="center"
                                    mb={5}
                                    mt={2}
                                >
                                    {postsInfinito.slice(startIndex, startIndex + 3).map((post, index) => (
                                        <Grid
                                            item xs={4}
                                            key={index}
                                            padding="12px">

                                            <Card
                                                elevation={0}
                                                sx={{
                                                    backgroundColor: "#1c1c1c",
                                                }}
                                                style={{
                                                    ...(index === 1 ? carouselItemStyles.active : {}),
                                                }}
                                            >
                                                <NextLink
                                                    href="/blog/1"
                                                    passHref
                                                >
                                                    <Box
                                                        component="img"
                                                        src={post.cover}
                                                        alt={post.title}
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
                                                        <Chip label={post.category} />
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
                                                            {post.title}
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
                                                        {post.shortDescription.length > 250 ? `${post.shortDescription.substring(0, 250)}...` : post.shortDescription}
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
                                                                src={post.author.avatar}
                                                                sx={{ mr: 2 }}
                                                            >
                                                                {getInitials(post.author.name)}
                                                            </Avatar>
                                                            <Typography variant="subtitle2">
                                                                By
                                                                {' '}
                                                                {post.author.name.length > 12 ? `${post.author.name.substring(0, 12)}...` : post.author.name}
                                                                {' '}
                                                                •
                                                                {' '}
                                                                {format(post.publishedAt, 'MMM d, yyyy')}
                                                            </Typography>
                                                        </Box>
                                                        <Typography
                                                            align="right"
                                                            color="textSecondary"
                                                            sx={{ flexGrow: 1 }}
                                                            variant="body2"
                                                        >
                                                            {`${post.readTime} read`}
                                                        </Typography>
                                                    </Box>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                            )
                            startIndex += 3
                        }
                        return slides
                    })()}
                </SwipeableViews>
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
            </Box>
        </>
    )
}

