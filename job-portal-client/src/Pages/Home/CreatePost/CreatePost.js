import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Card } from "@mui/material";
import useStyles from "../../../Styles/Styles";


const CreatePost = () => {
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const postName = e.target.postName.value;
    const companyName = e.target.companyName.value;
    const numberOfVacancy = e.target.numberOfVacancy.value;
    const jobDescription = e.target.jobDescription.value;
    const jobRequirements = e.target.jobRequirements.value;
    const jobBenefits = e.target.jobBenefits.value;
    const howToApply = e.target.howToApply.value;

    const post = {
      postName,
      companyName,
      numberOfVacancy,
      jobDescription,
      jobRequirements,
      jobBenefits,
      howToApply
    }

    console.log(post);

    e.target.reset();
  };

  return (
    <React.Fragment>
      <div className={classes.MakePost}>
        <Card className={classes.MakePostCard}>
          <Typography mb={5} variant="h6" align="center" gutterBottom>
            Create Job Post
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="postName"
                  name="postName"
                  label="Post name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="companyName"
                  name="companyName"
                  label="Company name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="numberOfVacancy"
                  name="numberOfVacancy"
                  label="Number of vacancy"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="standard-multiline-static"
                  name="jobDescription"
                  label="Job Description"
                  multiline
                  rows={4}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                required
                id="standard-multiline-static"
                label="Job Requirements"
                name="jobRequirements"
                multiline
                rows={4}
                fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                required
                id="standard-multiline-static"
                label="Job Benefits"
                name="jobBenefits"
                multiline
                rows={4}
                fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                required
                id="standard-multiline-static"
                label="How to Apply"
                name="howToApply"
                multiline
                rows={4}
                fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={12} align="center">
                <Button type="submit" variant="contained" align="center" color="primary">
                  Create Post
                </Button>
              </Grid>
            </Grid>
          </form>
        </Card>
                
  </div>
    </React.Fragment>
  );
};

export default CreatePost;
