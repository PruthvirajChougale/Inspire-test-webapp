// src/config/db.js
// import {PrismaClient} from '@prisma/client';

// config/db.js
import pkg from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import 'dotenv/config';

const { PrismaClient } = pkg;

// Create PostgreSQL connection pool using pg
const pool = new pg.Pool({
  connectionString: process.env.PGURI,
});

// Initialize Prisma PostgreSQL Adapter
const adapter = new PrismaPg(pool);

// Instantiate PrismaClient with the adapter
const prisma = new PrismaClient({ adapter });

export default prisma;
