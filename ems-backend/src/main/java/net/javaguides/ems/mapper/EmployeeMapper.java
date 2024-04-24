package net.javaguides.ems.mapper;

import net.javaguides.ems.dto.EmployeeDto;
import net.javaguides.ems.entity.Employee;

public class EmployeeMapper {
        public static Employee mapToEmployee(EmployeeDto employeeDto){
            return new Employee(employeeDto.id(),
                    employeeDto.firstName(),
                    employeeDto.lastName(),
                    employeeDto.email());
        }

        public static EmployeeDto mapToEmployeeDto(Employee employee){
            return new EmployeeDto(employee.getId(),
                    employee.getFirstName(),
                    employee.getLastName(),
                    employee.getEmail());
        }
}
