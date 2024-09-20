import express from 'express';
import db from '../ConnectDatabase/index.js'; // PostgreSQL connection module
import queryStatement from '../ConnectDatabase/queryStatement.js'; // SQL queries module

const router = express.Router(); // Create a router instance

// GET /getdata route
router.get('/getdata', async (req, res) => {
  try {
    // Query the database
    const rs = await db.query(queryStatement.selectChiSoDat());
    
    // Check if rows are returned from the database
    if (rs.rowCount > 0) {
      return res.json(rs.rows); // Return the rows as JSON if data is found
    } else {
      // Return default data if no rows are found
      return res.json([]);
    }

    // res.json({})
  } catch (error) {
    // Log the error and return a server error response
    console.error('Database query failed:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
