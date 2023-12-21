import axios, { AxiosInstance, AxiosResponse } from 'axios';

const API_BASE_URL = 'http://localhost:8000';
const SAND_ROUND = 10;

export interface Doctor {
    id?:number;
    name: string;
    specialty: string;
    degree: string;
    description: string;
    contactNumber: string;
    email: string;
    image: string; 
}

export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface Insurance {
  id?: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  insuranceProvider: string;
  policyNumber: string;
}

const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // You can add other headers if needed
  },
});

export const getDoctors = async (): Promise<Doctor[]> => {
  try {
    const response: AxiosResponse<Doctor[]> = await api.get('/doctors');
    return response.data;
  } catch (error) {
    console.error('Error fetching doctors:', error);
    throw error;
  }
};

export const getUser = async (email:string): Promise<User> => {
  try {
    const response: AxiosResponse<User> = await api.get(`/users/${email}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching doctors:', error);
    throw error;
  }
};

export const createUser = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
): Promise<User> => {
  try {
    const response: AxiosResponse<User> = await api.post('/users', {
      firstName,
      lastName,
      email,
      password,
    });

    if (response.status === 200 || response.status === 201) {
      return response.data; // Assuming a successful creation returns a status code of 201
    } else {
      console.error('Unexpected status code:', response.status);
      throw new Error('Failed to create user');
    }
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Failed to create user');
  }
};

export const createDoctor = async (
  doctorData:Doctor
): Promise<Doctor> => {
  try {
    const response: AxiosResponse<Doctor> = await api.post('/doctors', {
      name: doctorData.name,
      specialty: doctorData.specialty,
      degree: doctorData.degree,
      description: doctorData.description,
      contactNumber: doctorData.contactNumber,
      email: doctorData.email,
      image: doctorData.image,
    });

    if (response.status === 200) {
      return response.data; // Assuming a successful creation returns a status code of 201
    } else {
      console.error('Unexpected status code:', response.status);
      throw new Error('Failed to create doctor');
    }
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Failed to create doctor');
  }
};

export const getInsurances = async (): Promise<Insurance[]> => {
  try {
    const response: AxiosResponse<Insurance[]> = await api.get('/insurances');
    return response.data;
  } catch (error) {
    console.error('Error fetching insurance:', error);
    throw error;
  }
};

export const createInsurance = async (
  insuranceData:Insurance
): Promise<Insurance> => {
  try {
    const response: AxiosResponse<Insurance> = await api.post('/insurances', {
      firstName: insuranceData.firstName,
      lastName: insuranceData.lastName,
      dateOfBirth: new Date(insuranceData.dateOfBirth),
      insuranceProvider: insuranceData.insuranceProvider,
      policyNumber: insuranceData.policyNumber,
    });

    if (response.status === 200) {
      return response.data; // Assuming a successful creation returns a status code of 201
    } else {
      console.error('Unexpected status code:', response.status);
      throw new Error('Failed to create insurance');
    }
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Failed to create insurance');
  }
};

export const deleteInsurance = async (id:number | undefined): Promise<string> => {
  try {
    const response: AxiosResponse<string> = await api.delete(`/insurances/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting Insurance:', error);
    throw error;
  }
};

export const deleteDoctor = async (id:number | undefined): Promise<string> => {
  try {
    const response: AxiosResponse<string> = await api.delete(`/doctors/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting doctor:', error);
    throw error;
  }
};

export const updateDoctor = async (
  doctorData:Doctor
): Promise<Doctor> => {
  try { 
    const response: AxiosResponse<Doctor> = await api.put(`/doctors/${doctorData.id}`, {
      name: doctorData.name,
      specialty: doctorData.specialty,
      degree: doctorData.degree,
      description: doctorData.description,
      contactNumber: doctorData.contactNumber,
      email: doctorData.email,
      image: doctorData.image,
    });

    if (response.status === 200) {
      return response.data; // Assuming a successful creation returns a status code of 201
    } else {
      console.error('Unexpected status code:', response.status);
      throw new Error('Failed to create doctor');
    }
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Failed to create doctor');
  }
};

export const updateInsurance = async (
  insuranceData:Insurance
): Promise<Insurance> => {
  try { 
    const newDateOfBirth=new Date(insuranceData.dateOfBirth)
    const response: AxiosResponse<Insurance> = await api.put(`/insurances/${insuranceData.id}`, {
      firstName: insuranceData.firstName,
      lastName: insuranceData.lastName,
      dateOfBirth: newDateOfBirth,
      insuranceProvider: insuranceData.insuranceProvider,
      policyNumber: insuranceData.policyNumber,
    });

    if (response.status === 200) {
      return response.data; // Assuming a successful creation returns a status code of 201
    } else {
      console.error('Unexpected status code:', response.status);
      throw new Error('Failed to create insurance');
    }
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Failed to create insurance');
  }
};

export default api