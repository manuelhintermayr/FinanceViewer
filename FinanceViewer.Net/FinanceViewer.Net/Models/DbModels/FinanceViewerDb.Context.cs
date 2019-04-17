﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System.Linq;
using System.Web.Helpers;
using FinanceViewer.Net.Models.GetModels;

namespace FinanceViewer.Net.Models.DbModels
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class financeviewerEntities : DbContext
    {
        public financeviewerEntities()
            : base("name=financeviewerEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<fv_users> fv_users { get; set; }
        public virtual DbSet<fv_views> fv_views { get; set; }
        public virtual DbSet<fv_years> fv_years { get; set; }

        public Boolean CheckCorrectUser(LoginData loginData)
        {
            if (loginData.username == AdminCredentials.Username && loginData.password == AdminCredentials.Password)
            {
                return true;
            }

            //Check if user was found
            fv_users finalUser = null;
            try
            {
                finalUser = fv_users.Single(m => m.u_name == loginData.username);
            }
            catch (InvalidOperationException) { }
            if (finalUser == null)
            {
                return false;
            }

            //Check if password is right
            //string hashedPassword = Crypto.HashPassword(loginData.password);
            if (Crypto.VerifyHashedPassword(finalUser.u_password, loginData.password))
            {
                //Check if username is not blocked
                if (finalUser.u_isLocked == 0)
                {
                    return true;
                }
            }

            return false;
        }

        public string GetFirstNameForUsername(string username)
        {
            if (UserIsAdmin(username))
            {
                return "Administrator";
            }

            //Check if user was found
            fv_users finalUser = null;
            try
            {
                finalUser = fv_users.Single(m => m.u_name == username);
            }
            catch (InvalidOperationException) { }
            if (finalUser == null)
            {
                return "[undefined]";
            }

            return finalUser.u_firstName;
        }

        public string GetUrlForUser(string username)
        {
            return UserIsAdmin(username) ? "admin" : "dashboard";
        }

        public bool UserIsAdmin(string username)
        {
            return username == AdminCredentials.Username;
        }
    }
}