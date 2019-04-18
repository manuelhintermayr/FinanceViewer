﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;
using FinanceViewer.Net.Models.AnswerModels;
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
            //Check if correct admin
            if (loginData.username == AdminCredentials.Username 
                && Crypto.VerifyHashedPassword(Crypto.HashPassword(Crypto.SHA256(AdminCredentials.Password)), loginData.password) 
                )
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

        public bool UserIsLoggedInCorrectly(HttpSessionStateBase session)
        {
            if (session["m_user"] == null || session["m_password"] == null)
            {
                return false;
            }

            return CheckCorrectUser(new LoginData()
            {
                password = session["m_password"].ToString(),
                username = session["m_user"].ToString()
            });
        }

        public IEnumerable<User> GetUsers()
        {
            List<User> users =
                (from user in fv_users
                select new User
                {
                    username = user.u_name,
                    firstname = user.u_firstName,
                    lastname = user.u_lastName,
                    isLocked = user.u_isLocked == 0 ? false : true,
                }).ToList();

            List<User> usersWithYears =
                (from user in users
                 select new User
                {
                    username = user.username,
                    firstname = user.firstname,
                    lastname = user.lastname,
                    isLocked = user.isLocked,
                    years = GetYearsForUser(user.username)
                }).ToList(); //workaround for: https://stackoverflow.com/questions/6676047/linq-to-entities-exception-does-not-recognize-the-method-and-cannot-be-translate

            return usersWithYears;
        }

        public int[] GetYearsForUser(string username)
        {
            if (username == AdminCredentials.Username)
            {
                return new int[0];
            }

            //check if years for user were found
            List<fv_years> years = null;
            try
            {
                years = fv_years.Where(m => m.y_u_name == username).ToList();
            }
            catch (InvalidOperationException) { }
            if (years == null)
            {
                return new int[0];
            }

            return years.Select(m => Int32.Parse(m.y_year)).ToArray();
        }

        public List<fv_views> GetViewsForUserAndYear(string username, int year)
        {
            if (username == AdminCredentials.Username)
            {
                return new List<fv_views>();
            }

            //check if views for user and year were found
            List<fv_views> views = null;
            try
            {
                views = fv_views.Where(m => m.v_u_name == username && m.v_y_year == year.ToString()).ToList();
            }
            catch (InvalidOperationException) { }
            if (views == null)
            {
                return new List<fv_views>();
            }

            return views;
        }

        public string SQLEscape(string str)
        {
            return Regex.Replace(str, @"[\x00'""\b\n\r\t\cZ\\%_]",
                delegate (Match match)
                {
                    string v = match.Value;
                    switch (v)
                    {
                        case "\x00":            // ASCII NUL (0x00) character
                            return "\\0";
                        case "\b":              // BACKSPACE character
                            return "\\b";
                        case "\n":              // NEWLINE (linefeed) character
                            return "\\n";
                        case "\r":              // CARRIAGE RETURN character
                            return "\\r";
                        case "\t":              // TAB
                            return "\\t";
                        case "\u001A":          // Ctrl-Z
                            return "\\Z";
                        default:
                            return "\\" + v;
                    }
                });
        }

        public bool RemoveYearByYearAndUsername(int year, string username, bool saveActionsImmediately = true)
        {
            //Check if year was found
            fv_years finalYear = null;
            try
            {
                finalYear = fv_years.SingleOrDefault(m => (m.y_u_name == username) && (m.y_year == year.ToString()));
            }
            catch (InvalidOperationException) { }
            if (finalYear == null)
            {
                return false;
            }

            fv_years.Remove(finalYear);

            if (saveActionsImmediately)
            {
                SaveChanges();
            }

            return true;
        }

        public void AddNewYearForUser(int year, string username, bool saveActionsImmediately = true)
        {
            var newYear = new fv_years()
            {
                y_u_name = username,
                y_year = year.ToString()
            };

            fv_years.Add(newYear);

            if (saveActionsImmediately)
            {
                SaveChanges();
            }
        }
    }
}
