// src/models/userModel.js

// Import the existing prisma instance created in config/db.js
import prisma from '../config/db.js' 

export const createUser = async ({ username, email, passwordHash, batchId }) => {
  // Use the imported prisma instance to run raw SQL or Prisma methods
  const result = await prisma.$queryRaw`
    INSERT INTO users (username, email, password_hash, batch_id)
    VALUES (${username}, ${email}, ${passwordHash}, ${batchId})
    RETURNING id, username, email;
  `;
  
  return result[0];
};
