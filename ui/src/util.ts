import bcrypt from 'bcryptjs';

const saltRounds = 10;

// Function to hash a password
export const hashPassword = async (password: string): Promise<string> => {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw new Error('Error hashing password');
  }
};

// Function to check if a password matches a hashed value
export const checkPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  try {
    const passwordMatch = await bcrypt.compare(password, hashedPassword);
    return passwordMatch;
  } catch (error) {
    throw new Error('Error comparing passwords');
  }
};