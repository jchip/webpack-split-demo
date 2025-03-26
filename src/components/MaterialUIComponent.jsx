import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const MaterialUIComponent = () => (
  <div style={{ padding: '20px', backgroundColor: '#f0f0f0', margin: '20px' }}>
    <Typography variant="h4" gutterBottom>
      Material UI Component
    </Typography>
    <Typography variant="body1" paragraph>
      This component was loaded on demand!
    </Typography>
    <Grid container spacing={2}>
      {Array.from({ length: 100 }).map((_, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h6">Item {index + 1}</Typography>
              <Typography variant="body2" color="textSecondary">
                This is a dynamically loaded card component
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </div>
);

export default MaterialUIComponent; 