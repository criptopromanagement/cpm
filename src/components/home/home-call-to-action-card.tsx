import {
    Button,
    Card,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import NextLink from "next/link";
import { styled } from "@mui/material/styles";
import { Plan } from "../../types/plan"
interface Props {
    plan: Plan
}


const BlogPostCardMediaWrapper = styled("div")({
    paddingTop: "calc(50% * 4 / 4)",
    position: "relative"
});

export const HomeCallCard = ({ plan }: Props) => (
    <Grid
        item
        md={4}
        xs={12}
    >
        <Card
            sx={{
                borderRadius: "unset",
            }}
        >
            <BlogPostCardMediaWrapper>
                <CardMedia
                    image={plan.cover}
                    sx={{
                        height: "100%",
                        width: "100%",
                        position: "absolute",
                        top: 0,
                        transform: "rotateY(180deg)",
                    }}
                />
                <Typography
                    color="textSecondary"
                    align="center"
                    position="relative"
                    sx={{
                        height: 72,
                        mt: 1,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,

                    }}

                    style={{
                        fontWeight: "650",
                        bottom: "100px",
                        color: "white"
                    }}
                    variant="body1"
                >
                    {plan.description}
                </Typography>

                <NextLink
                    href={plan.investmentLink}
                    passHref
                >
                    <Button
                        style={{
                            width: "25%",
                            marginLeft: '35%',
                            bottom: "100px"
                        }}
                        component="a"
                        size="large"
                        variant="contained"
                    >
                        Invertir
                    </Button>
                </NextLink>
            </BlogPostCardMediaWrapper>
        </Card>
    </Grid >
);