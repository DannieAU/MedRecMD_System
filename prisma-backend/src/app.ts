// src/app.ts

import { User } from "@prisma/client";
import cors from 'cors';
import express from "express";
import {
  createDoctor,
  deleteDoctor,
  getDoctorById,
  getDoctors,
  updateDoctor,
} from "./doctor";
import {
  createInsurance,
  deleteInsurance,
  getInsuranceById,
  getInsurances,
  updateInsurance,
} from "./insurance";
import { createUser, getUserByEmail, getUsers } from "./user";

const app = express();
app.use(cors());
app.use(express.json());

/* Users API ===================*/
app.post("/users", async (req, res) => {
  const userData: User = req.body;
  const user = await createUser(userData);
  res.json(user);
});

app.get("/users", async (req, res) => {
  const users = await getUsers();
  res.json(users);
});

app.get("/users/:email", async (req, res) => {
  const { email } = req.params;
  const doctors = await getUserByEmail(email);
  if (!doctors) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(doctors);
});


/* Doctor API ===================*/
app.post("/doctors", async (req, res) => {
  const doctor = await createDoctor(req.body);
  res.json(doctor);
});

app.get("/doctors", async (req, res) => {
  const doctors = await getDoctors();
  res.json(doctors);
});

app.get("/doctors/:id", async (req, res) => {
  const { id } = req.params;
  const doctors = await getDoctorById(parseInt(id));
  if (!doctors) {
    return res.status(404).json({ message: "Doctor not found" });
  }
  res.json(doctors);
});

app.put("/doctors/:id", async (req, res) => {
  const { id } = req.params;
  const updatedDoctor = await updateDoctor(parseInt(id), req.body);
  res.json(updatedDoctor);
});

app.delete("/doctors/:id", async (req, res) => {
  const { id } = req.params;
  await deleteDoctor(parseInt(id));
  res.json({ message: "Doctor deleted successfully" });
});


/* Insurance API ===================*/
app.post("/insurances", async (req, res) => {
    const insurance = await createInsurance(req.body);
    res.json(insurance);
  });
  
  app.get("/insurances", async (req, res) => {
    const insurances = await getInsurances();
    res.json(insurances);
  });
  
  app.get("/insurances/:id", async (req, res) => {
    const { id } = req.params;
    const insurance = await getInsuranceById(parseInt(id));
    if (!insurance) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    res.json(insurance);
  });
  
  app.put("/insurances/:id", async (req, res) => {
    const { id } = req.params;
    const updatedInsurance = await updateInsurance(parseInt(id), req.body);
    res.json(updatedInsurance);
  });
  
  app.delete("/insurances/:id", async (req, res) => {
    const { id } = req.params;
    await deleteInsurance(parseInt(id));
    res.json({ message: "Insurance deleted successfully" });
  });

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
