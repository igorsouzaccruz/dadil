﻿using System.ComponentModel.DataAnnotations;

namespace DadilApplication.DTOs
{
    public class LoginModel
    {
        [Required(ErrorMessage = "User name is required")]
        public string? UserName { get; set; }

        [Required(ErrorMessage = "Password name is required")]
        public string? Password { get; set; }
    }
}
