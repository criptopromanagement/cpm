import { useCallback, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import NextLink from 'next/link';
import { Box, Button, Card, Container, Divider, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { blogApi } from '../../__next-api__/blog-api';
import { BlogNewsletter } from '../../components/blog/blog-newsletter';
import { BlogPostCard } from '../../components/blog/blog-post-card';
import { useMounted } from '../../hooks/use-mounted';
import { ArrowLeft as ArrowLeftIcon } from '../../icons/arrow-left';
import { gtm } from '../../lib/gtm';
import type { Post } from '../../types/blog';
import { MainNavbar } from 'src/components/main-navbar';
import { MainSidebar } from 'src/components/main-sidebar';
import { Footer } from 'src/components/footer';

const BlogPostList: NextPage = () => {
    const isMounted = useMounted();
    const [posts, setPosts] = useState<Post[]>([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    useEffect(() => {
        gtm.push({ event: 'page_view' });
    }, []);

    const getPosts = useCallback(async () => {
        try {
            const data = await blogApi.getPosts();

            if (isMounted()) {
                setPosts(data);
            }
        } catch (err) {
            console.error(err);
        }
    }, [isMounted]);

    useEffect(() => {
        getPosts();
    }, [getPosts]);

    const handleOpenSideBar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }


    return (
        <>
            <Head>
                <title>
                    CPM | Blog
                </title>
            </Head>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8
                }}
            >
                <Container maxWidth="lg">
                    <MainNavbar onOpenSidebar={handleOpenSideBar} />
                    <MainSidebar
                        onClose={(): void => setIsSidebarOpen(false)}
                        open={isSidebarOpen}
                    />
                    <Typography
                        variant="h3"
                        sx={{ mt: 3 }}
                    >
                        Blog de Criptomonedas
                    </Typography>

                    <Typography
                        color="textSecondary"
                        variant="subtitle1"
                    >
                        Discover the latest news, tips and user research insights from Acme.
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="subtitle1"
                    >
                        You will learn about web infrastructure, design systems and devops APIs best
                        practices.
                    </Typography>
                    <Divider sx={{ my: 3 }} />
                    {posts.map((post) => (
                        <BlogPostCard
                            authorAvatar={post.author.avatar}
                            authorName={post.author.name}
                            category={post.category}
                            cover={post.cover}
                            key={post.title}
                            publishedAt={post.publishedAt}
                            readTime={post.readTime}
                            shortDescription={post.shortDescription}
                            title={post.title}
                        />
                    ))}
                    <Box
                        sx={{
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            mt: 4,
                            mb: 8
                        }}
                    >
                    </Box>
                    <Box sx={{ mt: 8 }}>
                        <BlogNewsletter />
                    </Box>
                    <Box
                        sx={{
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            mt: 4,
                            mb: 8
                        }}
                    >
                    </Box>

                </Container>
            </Box>
            <Footer />
        </>
    );
};

export default BlogPostList;
