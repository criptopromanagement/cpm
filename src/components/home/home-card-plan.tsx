import {
  Button,
  Card,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { Plan } from "src/types/plan";
import NextLink from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "src/store";
import { FC } from "react";
import Performance from "../indices/performance";
interface Props {
  plan: Plan
}
interface MediaWrapperProps {
  isMobile: boolean;
}
const BlogPostCardMediaWrapper = styled("div")<MediaWrapperProps>(({ isMobile }) => ({
  height: isMobile ? "300px" : "100%",
  position: "relative",
}));

export const CardPlan: FC<Props> = ({ plan }: Props) => {
  const isMobile = useSelector((state: RootState) => state.mobile.isMobile);
  return (
    <div>
      {isMobile ? (
        <Grid
          item
          md={4}
          xs={12}
        >
          <Card
            sx={{
              height: "100%",
              backgroundColor: "#1c1c1c",
              border: "thin white solid"
            }}
          >
            <BlogPostCardMediaWrapper isMobile={isMobile}>
              <CardMedia
                image={plan.cover}
                sx={{
                  height: "100%",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "100%",
                  borderRadius: "16px 0 0 16px",
                  objectFit: "cover",
                  objectPosition: "center center"
              }}
              />
            </BlogPostCardMediaWrapper>
            <Box sx={{ mt: 2, p: 2 }}>
              <Typography variant="h5">{plan.title}</Typography>
              <Typography
                color="textSecondary"
                sx={{
                  mt: 1,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                }}
                variant="body1"
              >
                {plan.description}
              </Typography>
              <Typography
                color="textSecondary"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                }}
                variant="body1"
              >
                {plan.subdescription}
              </Typography>
            </Box>
            <Box sx={{ height: '100%', p: 2 }}>
              <Typography
                variant="h5"
                sx={{ mt: 3, mb: 2 }}
              >
                Rendimiento
              </Typography>
              <Performance />
            </Box>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              p={2}
              justifyContent="space-between"
              alignItems="stretch"
            >
              <NextLink
                href={plan.informationLink}
                passHref
              >
                <Button
                  component="a"
                  size="large"
                  fullWidth
                  variant="outlined"
                >
                  Conocer más
                </Button>
              </NextLink>
              <NextLink
                href={plan.investmentLink}
                passHref
              >
                <Button
                  component="a"
                  size="large"
                  fullWidth
                  variant="contained"
                >
                  Invertir
                </Button>
              </NextLink>
            </Stack>
          </Card>
        </Grid>
      ) :
        (
          <Box sx={{ flexDirection: "column", border: "2px solid white", borderRadius: "16px", marginBottom: "24px" }}>
            <Grid container width={{ md: "800px", lg: "1000px", xl: "1400px" }}
            >
              <Grid
                item
                md={6}
                xs={12}
              >
                <BlogPostCardMediaWrapper isMobile={isMobile}>
                  <CardMedia
                    image={plan.cover}
                    sx={{
                      height: "100%",
                      position: "absolute",
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "16px 0 0 16px",
                    }}
                  />
                </BlogPostCardMediaWrapper>
              </Grid>
              <Grid item md={6} xs={12}>
                <Box sx={{ mt: 3, ml: 3, mr: 3 }}>
                  <Typography variant="h5">{plan.title}</Typography>
                  <Typography
                    color="textSecondary"
                    sx={{
                      mt: 1,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 2,
                    }}
                    variant="body1"
                  >
                    {plan.description}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 2,
                    }}
                    variant="body1"
                  >
                    {plan.subdescription}
                  </Typography>
                </Box>
                <Typography
                  variant="h5"
                  sx={{ mt: 3, mb: 2, ml: 3 }}
                >
                  Rendimiento
                </Typography>
                <Performance />
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  pt={2}
                  ml={3}
                  mr={3}
                  justifyContent="space-between"
                  alignItems="stretch"
                  marginBottom={"28px"}
                >
                  <NextLink
                    href={plan.informationLink}
                    passHref
                  >
                    <Button
                      component="a"
                      size="large"
                      fullWidth
                      variant="outlined"
                    >
                      Conocer más
                    </Button>
                  </NextLink>
                  <NextLink
                    href={plan.investmentLink}
                    passHref
                  >
                    <Button
                      component="a"
                      size="large"
                      fullWidth
                      variant="contained"
                    >
                      Invertir
                    </Button>
                  </NextLink>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        )}
    </div>
  )
};
