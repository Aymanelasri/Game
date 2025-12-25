import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
    name: "employee",
    initialState: {
        employees: []
    },

    reducers: {
        // (a) Ajouter un employé
        addEmployee: (state, action) => {
            state.employees.push(action.payload);
        },

        // (b) Supprimer un employé par son code
        deleteEmployee: (state, action) => {
            state.employees = state.employees.filter(
                emp => emp.code !== action.payload
            );
        },

        // (c) Assigner un matériel à un employé
        assignMaterial: (state, action) => {
            const { employeeCode, materialCode } = action.payload;

            const employee = state.employees.find(e => e.code === employeeCode);

            if (employee && !employee.materielsUtilises.includes(materialCode)) {
                employee.materielsUtilises.push(materialCode);
            }
        },

        // (d) Retirer un matériel d’un employé
        removeMaterial: (state, action) => {
            const { employeeCode, materialCode } = action.payload;

            const employee = state.employees.find(e => e.code === employeeCode);

            if (employee) {
                employee.materielsUtilises = employee.materielsUtilises.filter(
                    m => m !== materialCode
                );
            }
        }
    }
});

export const { addEmployee, deleteEmployee, assignMaterial, removeMaterial } =
    employeeSlice.actions;

export default employeeSlice.reducer;
