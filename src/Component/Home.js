import React from "react";
import { Button, Grid, Box } from "@mui/material";

function Home({ onQuizStart }) {
 
  return (
    <>
    <Box>
    <Grid container spacing={5} style={{ marginTop: "2rem" }}>
      <Grid item xs={12} md={6}>
        <span
          style={{
            fontFamily: "sans-serif",
            textAlign: "center",
            wordSpacing: "5px",
            whiteSpace: "nowrap",
          }}
        >
          <h1>Quizzes are a powerful tool for engagement,</h1>
          <h1>and wildly underrated for bringing in more customers.</h1>
          <h1>Take yours to the next level with Typeform.</h1>
          <h1>Quizzes are a powerful tool for engagement,</h1>
          <h1>and wildly underrated for bringing in more customers.</h1>
        </span>
        <Button
          style={{
            backgroundColor: "blue",
            color: "white",
            fontSize: "1rem",
          }}
          onClick={onQuizStart}
        >
          Start Quiz
        </Button>
      </Grid>
     
     
      <Grid item xs={12} md={6} >
        <img
          src={require("../Assest/quiz.jpg")}
          alt=""
        />
      </Grid>
    </Grid>
  </Box>
   
    
    </>
  );
}

export default Home;
