package main;
import java.sql.*;
//一个用来定义全局变量的类
public class sql_va{
  private static final String URL = "jdbc:mysql://localhost:3306/rjgc?serverTimezone=GMT%2B8";
  public static final String USER = "root";
  public static final String PASSWORD = "456321";
  public static Connection conn;
  public static Statement  stmt;
  public static int 	   stop=0;
  public static void DataBase_Driver ()throws Exception
  {
      //1.加载驱动程序
      Class.forName("com.mysql.cj.jdbc.Driver");
      //2. 获得数据库连接
      conn = DriverManager.getConnection(URL, USER, PASSWORD);
      //3.操作数据库，实现增删改查
      stmt = conn.createStatement();
  }
}
