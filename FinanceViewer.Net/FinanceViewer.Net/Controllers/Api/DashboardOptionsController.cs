﻿using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Validation;
using System.Data.SqlClient;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Mvc;
using FinanceViewer.Net.Models.AnswerModels;
using FinanceViewer.Net.Models.DbModels;

namespace FinanceViewer.Net.Controllers.Api
{
    public class DashboardOptionsController : Controller
    {
        private readonly financeviewerEntities _context;
        private string username = "";
        private int year = 0;

        public DashboardOptionsController()
        {
            _context = new financeviewerEntities();
        }

        // GET: Dashboard Options
        public ActionResult Index()
        {
            if (!_context.UserIsLoggedInCorrectly(Session))
            {
                Response.StatusCode = 403;
                return Content("Not logged in.");
            }

            SetUsernameForView();
            SetYearForView();

            var action = Request.QueryString["action"];
            if (!string.IsNullOrEmpty(action))
            {
                switch (action)
                {
                    case "getViews":
                        return GetViews();
                    case "addView":
                        return AddView();
                    case "removeView":
                        return RemoveView();
                    case "updateViewMonth":
                        return UpdateViewMonth();
                    default:
                        return ActionNotSupported(action);
                }
            }
            else
            {
                Response.StatusCode = 400;
                return Content("Bad request.");
            }
        }

        private void SetUsernameForView()
        {
            username = Session["m_user"].ToString();

            if (_context.UserIsAdmin(Session["m_user"].ToString()) && Session["m_view_username"] != null)
            {
                username = Session["m_view_username"].ToString();
            }
        }

        private void SetYearForView()
        {
            var years = _context.GetYearsForUser(username);

            if (Session["m_view_year"]!=null)
            {
                if (years.Contains((int)Session["m_view_year"]))
                {//check if set year is valid
                    year = (int) Session["m_view_year"];
                }
                else
                {
                    SetYearFirstValueOfArray(years);
                }
            }
            else
            {
                SetYearFirstValueOfArray(years);
            }
        }

        private void SetYearFirstValueOfArray(int[] years)
        {
            if (years.Length != 0)
            {
                year = years[0];
            }
        }

        private ActionResult GetViews()
        {
            var viewsFromDb = _context.GetViewsForUserAndYear(username, year);

            List<Views> convertedViews = new List<Views>();

            foreach (var view in viewsFromDb)
            {
                convertedViews.Add(GetViewArrayByRowResult(view));
            }
        
            Response.StatusCode = 200;
            return Json(new
                    {
                        year,
                        username,
                        data = convertedViews
                    },
                    JsonRequestBehavior.AllowGet);
        }

        private Views GetViewArrayByRowResult(fv_views viewFromDb)
        {
            Views.ViewData yearData = new Views.ViewData() {
                    january = viewFromDb.v_month_01,
                    february = viewFromDb.v_month_02,
                    march = viewFromDb.v_month_03,
                    april = viewFromDb.v_month_04,
                    may = viewFromDb.v_month_05,
                    june = viewFromDb.v_month_06,
                    july = viewFromDb.v_month_07,
                    august = viewFromDb.v_month_08,
                    september = viewFromDb.v_month_09,
                    october = viewFromDb.v_month_10,
                    november = viewFromDb.v_month_11,
                    december = viewFromDb.v_month_12,
                    tempJanuary = viewFromDb.v_month_01,
                    tempFebruary = viewFromDb.v_month_02,
                    tempMarch = viewFromDb.v_month_03,
                    tempApril = viewFromDb.v_month_04,
                    tempMay = viewFromDb.v_month_05,
                    tempJune = viewFromDb.v_month_06,
                    tempJuly = viewFromDb.v_month_07,
                    tempAugust = viewFromDb.v_month_08,
                    tempSeptember = viewFromDb.v_month_09,
                    tempOctober = viewFromDb.v_month_10,
                    tempNovember = viewFromDb.v_month_11,
                    tempDecember = viewFromDb.v_month_12
                };

            Views view = new Views()
            {
                count = viewFromDb.v_id,
                name = viewFromDb.v_name,
                description = viewFromDb.v_description,
                id = viewFromDb.v_html_id,
                notes = viewFromDb.v_notes,
                profile_url = viewFromDb.v_profile_url,
                data = yearData
            };
              
            return view;
        }

        private ActionResult AddView()
        {
            var POST = this.GetJsonPostObjectFromRequest();

            if (POST["name"] != null
                && POST["description"] != null
                && POST["id"] != null
                && POST["notes"] != null
                && POST["profile_url"] != null
                && POST["name"].ToString() != ""
                && POST["name"].ToString() != " "
                && POST["description"].ToString() != ""
                && POST["description"].ToString() != " "
                && POST["id"].ToString() != ""
                && POST["id"].ToString() != " "
                && POST["notes"].ToString() != ""
                && POST["notes"].ToString() != " "
                && POST["profile_url"].ToString() != ""
                && POST["profile_url"].ToString() != " ")
            {
                string name = _context.SQLEscape(POST["name"].ToString());
                string description = _context.SQLEscape(POST["description"].ToString());
                string id = _context.SQLEscape(POST["id"].ToString());
                string notes = _context.SQLEscape(POST["notes"].ToString());
                string profile_url = _context.SQLEscape(POST["profile_url"].ToString());

                if (!id.Contains(" ") && !profile_url.Contains(" "))
                {
                    var listForExistingID = _context.fv_views.Where(x =>
                        x.v_y_year == year.ToString()
                        && x.v_u_name == username
                        && x.v_html_id == id
                    ).ToList();
                    var listForExistingName = _context.fv_views.Where(x =>
                        x.v_y_year == year.ToString() 
                        && x.v_u_name == username
                        && x.v_name == name
                    ).ToList();

                    if (listForExistingName.Count>= 1 || listForExistingID.Count >= 1)
                    {
                        Response.StatusCode = 400;
                        return Content("ID or Name does already exist");
                    } 
                    else
                    {
                        //add View:
                        fv_views newView = new fv_views()
                            {
                                v_y_year = year.ToString(), 
                                v_u_name = username,
                                v_name = name,
                                v_description = description,
                                v_html_id = id,
                                v_notes = notes,
                                v_profile_url = profile_url,
                                v_month_01 = "0",
                                v_month_02 = "0",
                                v_month_03 = "0",
                                v_month_04 = "0",
                                v_month_05 = "0",
                                v_month_06 = "0",
                                v_month_07 = "0",
                                v_month_08 = "0",
                                v_month_09 = "0",
                                v_month_10 = "0",
                                v_month_11 = "0",
                                v_month_12 = "0"
                        };

                        _context.fv_views.Add(newView);

                        try
                        {
                            _context.SaveChanges();
                        }
                        catch (Exception ex)
                        {
                            if (ex is DbEntityValidationException || ex is DbUpdateException || ex is SqlException)
                            {
                                Response.StatusCode = 400;
                                return Content("Could not create a new view. SQL Execution failed.");
                            }

                            throw;
                        }

                        //check if view was saved:
                        fv_views finalView = null;
                        try
                        {
                            finalView = _context.fv_views.Single(x =>
                                x.v_y_year == year.ToString()
                                && x.v_u_name == username
                                && x.v_html_id == id
                            );
                        }
                        catch (InvalidOperationException) { }
                        if (finalView == null)
                        {
                            Response.StatusCode = 400;
                            return Content("View was created but cannot be accessed. SQL Execution failed.");
                        }

                        Response.StatusCode = 200;
                        return Json(GetViewArrayByRowResult(finalView), JsonRequestBehavior.AllowGet);
                    }
                }
                else
                {
                    Response.StatusCode = 400;
                    return Content("Profile_Url or id should not contain whitespaces.");
                }
            }
            else
            {
                Response.StatusCode = 400;
                return Content("Not all values are set.");
            }
        }

        private ActionResult RemoveView()
        {
            var POST = this.GetJsonPostObjectFromRequest();

            if (POST["view_id"]!=null)
            {
                string idString = _context.SQLEscape(POST["view_id"].ToString());

                if (int.TryParse(idString, out int id))
                {
                    //find view
                    fv_views viewToDelete = null;
                    try
                    {
                        viewToDelete = _context.fv_views.Single(x => x.v_id == id);
                    }
                    catch (InvalidOperationException) { }
                    if (viewToDelete == null)
                    {
                        Response.StatusCode = 400;
                        return Content($"Could not find View to delete with id: {id}");
                    }

                    //delete view
                    try
                    {
                        _context.fv_views.Remove(viewToDelete);
                        _context.SaveChanges();
                    }
                    catch (Exception ex)
                    {
                        if (ex is DbEntityValidationException || ex is DbUpdateException || ex is SqlException)
                        {
                            Response.StatusCode = 400;
                            return Content($"Could not delete view $id for the user {username}. SQL Execution failed.");
                        }

                        throw;
                    }
                    
                    Response.StatusCode = 200;
                    return Json(new { message = "View deleted." }, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    Response.StatusCode = 400;
                    return Content("ID for View is not valid.");
                }
            }
            else
            {
                Response.StatusCode = 400;
                return Content("View ID is not set.");
            }
        }

        private ActionResult UpdateViewMonth()
        {
            var POST = this.GetJsonPostObjectFromRequest();

            if (POST["view_id"]!=null
                && POST["updatedMonth"]!=null
                && POST["value"]!=null
                && POST["view_id"].ToString() != ""
                && POST["view_id"].ToString() != " "
                && POST["updatedMonth"].ToString() != ""
                && POST["updatedMonth"].ToString() != " "
                && POST["value"].ToString() != ""
                && POST["value"].ToString() != " ")
            {
                string idString = _context.SQLEscape(POST["view_id"].ToString());
                string monthNumberString = _context.SQLEscape(POST["updatedMonth"].ToString());

                if (int.TryParse(idString, out int id) && int.TryParse(monthNumberString, out int monthNumber))
                {
                    string month = monthNumber > 9 ? monthNumber.ToString() : $"0{monthNumber}";
                    string value = _context.SQLEscape(POST["value"].ToString());

                    //check if new value for month is correct
                    Regex regex = new Regex("^([0-9+(*)/.-])*$");
                    Match match = regex.Match(value);
                    if (match.Success)
                    {
                        //find view
                        fv_views viewToDelete = null;
                        try
                        {
                            viewToDelete = _context.fv_views.Single(x => x.v_id == id);
                        }
                        catch (InvalidOperationException) { }
                        if (viewToDelete == null)
                        {
                            Response.StatusCode = 400;
                            return Content($"Could not find View to update with id: {id}");
                        }

                        //update
                        try
                        {
                            _context.Database.ExecuteSqlCommand(
                                $"UPDATE [fv_views] SET [v_month_{month}] = '{value}' WHERE [fv_views].[v_id] = {id} AND [fv_views].[v_u_name] = '{username}'");
                            _context.SaveChanges();
                        }
                        catch (Exception ex)
                        {
                            if (ex is DbEntityValidationException || ex is DbUpdateException || ex is SqlException)
                            {
                                Response.StatusCode = 400;
                                return Content("Could not update the month. SQL Execution failed.");
                            }

                            throw;
                        }

                        Response.StatusCode = 200;
                        return Json(new { message = "Month updated." }, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        Response.StatusCode = 400;
                        return Content($"New value is invalid: {value}");
                    }
                }
                else
                {
                    Response.StatusCode = 400;
                    return Content("View-ID or Month is not valid.");
                }
            }
            else
            {
                Response.StatusCode = 400;
                return Content("Not all values are set.");
            }
        }

        private ActionResult ActionNotSupported(string action)
        {
            Response.StatusCode = 400;
            return Content($"Action {action} is not supported.");
        }
    }
}
