import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

// Define the servlet URL mapping
@WebServlet("/welcome")
public class WelcomeServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Set response content type
        response.setContentType("text/html");

        // Get the name parameter from the request
        String name = request.getParameter("name");

        // Create a PrintWriter to write the response
        PrintWriter out = response.getWriter();

        // Write the response HTML content
        out.println("<html>");
        out.println("<head><title>Welcome Page</title></head>");
        out.println("<body>");
        out.println("<h1>Welcome, " + name + "!</h1>");
        out.println("</body>");
        out.println("</html>");
    }
}
