package net.javaguides.ems.dto;

public record EmployeeDto(
        Long id,
        String firstName,
        String lastName,
        String email
) {
}
