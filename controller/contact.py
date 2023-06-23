from model.postgresCon import conn, cur

def get_all_contact():
    try:
        cur.execute("SELECT * FROM user");
        rows = cur.fetchall();
        return rows;
    except Exception as e:
        print(e);
        return False;

def insert_one_contact(data):
    print(data)
    # try:
    #     cur.execute("INSERT INTO user (name, email, message) VALUES ("+name+","+email+","+message+")");
    #     conn.commit();
    #     return True;
    # except Exception as e:
    #     print(e);
    #     return False;