import {
  Button,
  Card,
  CardActions,
  CardMedia,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { Plan } from "src/types/plan";
import NextLink from "next/link";
interface Props {
  plan: Plan
}
const BlogPostCardMediaWrapper = styled("div")({
  paddingTop: "calc(100% * 4 / 4)",
  position: "relative",
});
export const CardPlan = ({ plan }: Props) => (
  <Grid 
    item 
    md={4} 
    xs={12}
  >
    <Card
      sx={{
        height: "100%",
        p: 2,
      }}
    >
      <BlogPostCardMediaWrapper>
        <CardMedia
          image={plan.cover}
          sx={{
            height: "100%",
            position: "absolute",
            top: 0,
            width: "100%",
          }}
        />
      </BlogPostCardMediaWrapper>
      <Box sx={{ mt: 2 }}>
        <Link variant="h5">{plan.title}</Link>
        <Typography
          color="textSecondary"
          sx={{
            height: 72,
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
            height: 92,
            mt: 1,
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
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          pt={2}
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
);
