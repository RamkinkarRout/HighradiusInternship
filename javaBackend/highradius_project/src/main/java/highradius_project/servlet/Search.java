package highradius_project.servlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import highradius_project.bean.Response;

/**
 * Servlet implementation class Search
 */
@WebServlet("/searchData")
public class Search extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Search() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		

		 Connection con = DbConnection.createConnect();

	        String doc_id = request.getParameter("doc_id");
	        String cust_number = request.getParameter("cust_number");
	        String invoice_id = request.getParameter("invoice_id");
	        String buisness_year = request.getParameter("buisness_year");
	       String query = "select * from winter_internship where doc_id = '"+doc_id+"' or cust_number = '"+cust_number+"' or invoice_id = '"+invoice_id+"' or buisness_year = '"+buisness_year+"'";
		
		  try {

	            ResultSet rs = con.createStatement().executeQuery(query);
	            
	            ArrayList<Response> data = new ArrayList<Response>();
	            
	            while (rs.next()) {
	               
					Response inv = new Response();

					inv.setSl_no(rs.getInt("sl_no"));
					inv.setBusiness_code(rs.getString("business_code"));
					inv.setCust_number(rs.getInt("cust_number"));
					inv.setClear_date(rs.getString("clear_date"));
					inv.setBuisness_year(rs.getString("buisness_year"));
					inv.setDoc_id(rs.getString("doc_id"));
					inv.setPosting_date(rs.getString("posting_date"));
					inv.setDocument_create_date(rs.getString("document_create_date"));
					inv.setDocument_create_date1(rs.getString("document_create_date1"));
					inv.setDue_in_date(rs.getString("due_in_date"));
					inv.setInvoice_currency(rs.getString("invoice_currency"));
					inv.setDocument_type(rs.getString("document_type"));
					inv.setPosting_id(rs.getInt("posting_id"));
					inv.setArea_business(rs.getString("area_business"));
					inv.setTotal_open_amount(rs.getDouble("total_open_amount"));
					inv.setBaseline_create_date(rs.getString("baseline_create_date"));
					inv.setCust_payment_terms(rs.getString("cust_payment_terms"));
					inv.setInvoice_id(rs.getInt("invoice_id"));
					inv.setIsOpen(rs.getInt("isOpen"));
					inv.setAging_bucket(rs.getString("aging_bucket"));
					inv.setIs_deleted(rs.getInt("is_deleted"));
					data.add(inv);

				}
				
				Gson gson = new GsonBuilder().setPrettyPrinting().create();
				String json = gson.toJson(data);
			
				response.setContentType("application/json");
				response.setCharacterEncoding("UTF-8");
				response.setHeader("Access-Control-Allow-Origin", "*");
				try {
					response.getWriter().write(json);
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}

				
				rs.close();
				con.close();
				
			}
		  
			catch(SQLException e) {
				e.printStackTrace();
			}
		  
		  catch (Exception e) {
				//TODO: handle exception
				e.printStackTrace();
			}
			
		
		
//		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
