# MedRec MD System

Brief description of your project.

## Prerequisites

### 1. To install NodeJS

- Node.js: Make sure you have Node.js installed on your machine. You can download it [here](https://nodejs.org/).

### 2. To install MySQL

### 3. To install Prisma in Backend

1. Install Prisma globally:
   ```bash
   npm install -g prisma
   ```
2. Create a new Prisma configuration file:
   ```bash
   npx prisma init
   ```
3. Configure your database connection in `prisma/.env`:
   ```bash
   DATABASE_URL="mysql://your-username:your-password@localhost:3306/your-database"
   ```
4. Migrate your database:
   ```bash
   npx prisma migrate dev --name init
   ```

## Install the program

1. Clone the repository:

   ```bash
   git clone https://github.com/DannieAU/MedRecMD_System.git

   ```

2. Navigate to the project directory:
   ```bash
   cd MedRecMD_System
   ```

## Install Backend

1. Navigate to the backend directory:
   ```bash
   cd prisma-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. To Run the backend
   ```bash
   npm run start
   ```

## Install Front-end or UI

1. Navigate to the backend directory:
   ```bash
   cd ui
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. To Run the backend
   ```bash
   npm run dev
   ```

## For more details and inquiries send email to: 22101555@usc.edu.ph
