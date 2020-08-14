package main;
import java.sql.ResultSet;

import javax.websocket.OnMessage;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

@ServerEndpoint("/test")
public class test {
    
	@OnMessage
    public void onMessage(String message, Session session) 
        throws Exception {
        System.out.println("¿Í»§¶ËËµ£º" + message);
        sql_va.DataBase_Driver();
        ResultSet rs = sql_va.stmt.executeQuery("SELECT * FROM user_prop");
        rs.last();
		int row_count=rs.getRow();
		rs.first();
		String [][]data=new String[row_count][5];
		for(int i=0;i<row_count;i++)
			{
				for(int j=0;j<5;j++)
				{
				data[i][j]=rs.getString(j+1);
				System.out.printf("%s ",data[i][j]);
				}
				System.out.println();
			}
        while(true){
        	String s="word";
            session.getBasicRemote().sendText(s);
            Thread.sleep(2000);
        }
    }
	
}