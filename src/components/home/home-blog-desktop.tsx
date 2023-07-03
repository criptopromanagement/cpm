import React, { useState, useEffect, useCallback, useMemo } from 'react';
import type { Post } from 'src/types/blog';
import { blogApi } from 'src/__next-api__/blog-api';
import { Box, Typography, } from '@mui/material';
import { Carousel } from '../carousel';
export const HomeBlogDesktop = () => {
    const [posts, setPosts] = useState<Post[]>([]);

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

    const memoizedPosts = useMemo(() => [...posts, ...posts], [posts]);

    return (
        <>
            <Box margin='8rem 0 5rem 7.5rem'>
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
            <Carousel posts={memoizedPosts} />
        </>
    );
};
